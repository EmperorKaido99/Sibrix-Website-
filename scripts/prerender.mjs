// Build step: render every page to static HTML with its own title, description and
// canonical URL, so search engines and link previews get real content per page.
//   /          -> dist/index.html
//   /about     -> dist/about.html         (and so on for each entry in src/seo/pages.ts)
//   not found  -> dist/404.html           (served by Vercel for unknown URLs, noindex)
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");
let template = await readFile(path.join(dist, "index.html"), "utf8");
{
  const { readdir } = await import("node:fs/promises");
  const assets = await readdir(path.join(dist, "assets"));
  const fonts = ["inter-tight-latin-400-normal", "inter-tight-latin-600-normal"]
    .map((n) => assets.find((f) => f.startsWith(n) && f.endsWith(".woff2")))
    .filter(Boolean);
  if (fonts.length !== 2) throw new Error("prerender: Inter Tight 400/600 woff2 not found in dist/assets");
  // Preload the two fonts used above the fold so text paints in Inter Tight from the start
  // (avoids a fallback-to-webfont swap that shifted the layout on slow phones).
  const links = fonts.map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`);
  template = template.replace("</head>", `    ${links.join("\n    ")}\n  </head>`);
}
const { render, PAGES, NOT_FOUND, urlFor } = await import(
  pathToFileURL(path.join(root, "dist-server/entry-server.js")).href
);

const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const escapeText = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

function swap(html, pattern, replacement, label) {
  if (!pattern.test(html)) throw new Error(`prerender: could not find ${label} in index.html`);
  return html.replace(pattern, replacement);
}

function pageHtml(meta, body, { noindex = false } = {}) {
  const url = urlFor(meta);
  let html = template;
  html = swap(html, /<title>[^<]*<\/title>/, `<title>${escapeText(meta.title)}</title>`, "<title>");
  html = swap(html, /(<meta name="description" content=")[^"]*/, `$1${escapeAttr(meta.description)}`, "description");
  html = swap(html, /(<meta property="og:title" content=")[^"]*/, `$1${escapeAttr(meta.title)}`, "og:title");
  html = swap(html, /(<meta property="og:description" content=")[^"]*/, `$1${escapeAttr(meta.description)}`, "og:description");
  html = swap(html, /(<meta name="twitter:title" content=")[^"]*/, `$1${escapeAttr(meta.title)}`, "twitter:title");
  html = swap(html, /(<meta name="twitter:description" content=")[^"]*/, `$1${escapeAttr(meta.description)}`, "twitter:description");
  html = swap(html, /(<link rel="canonical" href=")[^"]*/, `$1${url}`, "canonical");
  html = swap(html, /(<meta property="og:url" content=")[^"]*/, `$1${url}`, "og:url");
  if (noindex) {
    html = swap(html, /(<meta name="robots" content=")[^"]*/, "$1noindex, follow", "robots");
    html = html.replace(/\s*<link rel="canonical"[^>]*>/, "");
  }
  return swap(html, /<div id="root"><\/div>/, `<div id="root">${body}</div>`, '<div id="root">');
}

for (const meta of PAGES) {
  // Flat files (about.html) rather than folders (about/index.html): with "cleanUrls" in
  // vercel.json, /about serves about.html with no redirect, and vite preview does the same.
  const file = meta.path === "/" ? path.join(dist, "index.html") : path.join(dist, `${meta.path.slice(1)}.html`);
  await mkdir(path.dirname(file), { recursive: true });
  const body = render(meta.path);
  await writeFile(file, pageHtml(meta, body));
  console.log(`prerender: ${meta.path.padEnd(10)} -> ${path.relative(root, file)} (${(body.length / 1024).toFixed(1)} KB)`);
}

await writeFile(path.join(dist, "404.html"), pageHtml(NOT_FOUND, render("/this-page-does-not-exist"), { noindex: true }));
console.log("prerender: not found  -> dist/404.html");

await rm(path.join(root, "dist-server"), { recursive: true, force: true });

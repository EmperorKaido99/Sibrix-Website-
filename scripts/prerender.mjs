// Build step: render the home page to HTML and inject it into dist/index.html.
import { readFile, writeFile, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const template = await readFile(path.join(root, "dist/index.html"), "utf8");
const { render } = await import(pathToFileURL(path.join(root, "dist-server/entry-server.js")).href);

const html = render("/");
const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error("prerender: #root marker not found in dist/index.html");

await writeFile(path.join(root, "dist/index.html"), template.replace(marker, `<div id="root">${html}</div>`));
await rm(path.join(root, "dist-server"), { recursive: true, force: true });
console.log(`prerender: wrote ${(html.length / 1024).toFixed(1)} KB of HTML into dist/index.html`);

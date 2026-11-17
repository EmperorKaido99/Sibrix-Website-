# Release Notes

Newest entries first. Each entry says **what changed, why, and what (if anything) you need to do**.
Written for both people and AI coding assistants working on this repo — read the latest entry before making changes.

---

## 2026-11-17 — Visitor colour themes (branch `palettes`, based on `recommendations`)

- Visitors can switch the site's colours from a **palette icon in the navbar** (mobile: inside the menu): **Classic** (default), **Refined**, **Ocean**, **Teal night**.
  All are the same brand family; every pair passes WCAG AA (white on navy 16.3:1 or more, green on navy 8.0:1 or more).
- `src/lib/theme.ts` (themes + `useSiteTheme` hook), `src/components/ThemePicker.tsx` (desktop menu + mobile buttons),
  `html[data-theme="…"]` blocks in `src/index.css` that override the brand tokens.
- Choice saved in `localStorage` (`sibrix-theme`). A small inline script in `index.html` applies it **before first paint**, so there is no flash
  and the pre-rendered HTML still hydrates cleanly (React never renders the attribute).
- Checked: switching works on desktop and mobile, persists across pages, applied before React loads, no console errors, no mobile overflow.

---

## 2026-11-17 — Packages page restructured (branch `recommendations`)

**Author:** Sibusiso (GitHub: Cibucico), with Claude Code.

New order on `/packages`: **Websites** (Launch / Grow / Online Store) → "Not sure which fits?" picker → **Add-ons** (AI chatbot, automation,
integrations, dashboards) → **IT & Security** (CCTV, network setup, monthly IT support) → **Care plans** (care plan + development retainer)
→ **Custom systems** (discovery workshop, example systems) → Compare websites → FAQ → contact.

- **Single source:** all package content, prices and the comparison live in `src/data/packages.ts`. Cards show "Price on request" until a `price` is set.
- **Needs Sibrix sign-off before going live** (listed at the top of `src/data/packages.ts`): prices; WhatsApp button + Google Business Profile in Launch;
  bookings/quotes + blog in Grow; PayFast/Yoco/Ozow; what the care plan includes; chatbot monthly fee; IT & Security sold on its own;
  whether the discovery workshop is paid. The FAQ repeats some of these.
- Removed: `PackagesSection.tsx` (old Starter/Business/Enterprise cards and modal) and `RetainerSection.tsx` (now inside Care plans).
  The old Enterprise promise of "5 custom internal apps" is gone on purpose: custom work is quoted after a workshop.
- Picker now answers Launch / Grow / Online Store / Custom; `/contact?package=launch|grow|store|custom|it` pre-fills the message.
- WhatsApp button has a white ring so it stays visible on the green Custom band.
- Checked: tsc clean, lint 0 errors, build OK, no console errors on /, /packages, /contact (motion on and reduced), all 4 picker outcomes and 5 prefill links verified, no mobile overflow.

---

## 2026-11-17 — UI/UX recommendations (branch `recommendations`, based on `multi-page`)

**Author:** Sibusiso (GitHub: Cibucico), with Claude Code. Everything here uses only facts already on the site or visible in the live CrimeSpots app.

- **CrimeSpots video:** `public/media/crimespots-demo.mp4` (1280px, 896 KB) + `-720.mp4` (phones, 260 KB) + poster `.webp`.
  Recorded from crimespots.vercel.app with Playwright, encoded H.264 High, yuv420p, `+faststart`, 18.5 s loop, no audio.
  Player: `src/components/DemoVideo.tsx` (muted autoplay, pauses off-screen, starts paused for reduced motion, visible Pause/Play button for WCAG 2.2.2).
  Paths in `src/lib/media.ts`. Used on Home (new `FeaturedWork`), Work (replaces the screenshot) and the case study.
- **Case study page** `/work/crimespots` (`src/pages/CrimeSpotsCaseStudy.tsx`): problem, what we built, how it works, tech. No invented numbers;
  add real usage/outcome figures only when Sibrix has them.
- **Page intro bands** (`src/components/PageIntro.tsx`): About, Work, Services, Packages and the case study now open with an h1 that rises word by word
  over a drifting green glow. Every page has exactly one h1 (Contact's is the "Discuss a project" heading via `<CTASection asPage />`).
- **Service icons:** each of the 18 services in `AdditionalServices.tsx` has a lucide icon tile that turns green on hover.
- **Package picker** (`src/components/PackagePicker.tsx`, Packages page): 3 yes/no questions, suggests a package, links to `/contact?package=…`,
  which pre-fills the message (`ContactForm.tsx`, after hydration).
- **FAQ** (`src/components/PackagesFAQ.tsx`, Packages page) with `FAQPage` JSON-LD. Answers only restate existing site copy. Add price/timeline/ownership answers once confirmed.
- **Contact form:** optional "What do you need?" chips (sent as "Interested in: …" at the top of the message, so no API/DB change),
  "What happens next" steps beside the form and in the success message.
- **Footer:** "Cape Town, South Africa".
- `src/seo/pages.ts` and `sitemap.xml` include `/work/crimespots`; prerender creates sub-folders (`dist/work/crimespots.html`).
- Checked: tsc clean, lint 0 errors, test + build OK, all 8 pages 200 with exactly one h1 and no console errors (motion on and reduced),
  video plays/pauses, phones get the 720p file, picker → contact prefill works, no mobile overflow.

---

## 2026-11-17 — "Systems built right." typewriter animation (branch `multi-page`)

- New `src/components/Typewriter.tsx` (+ `.typewriter` / `.tw-char` CSS in `src/index.css`): types text letter by letter with a cursor
  that follows the newest letter, blinks 4 times at the end, then hides.
- Used on the Home hero line above the headline (types on load) and the About "Our brand promise" text (`startOnView`: types when scrolled into view).
- Timing is pure CSS (`--tw-at` per letter), so pre-rendered HTML and the browser render match (no hydration mismatch).
  Screen readers get the full phrase once (`sr-only`); reduced-motion visitors see the text immediately.
- Checked: typing order verified frame by frame, About waits until visible, no console errors, build OK.
- **Loop:** `repeatEvery={20000}` on both uses: the text clears and retypes every 20 s (remounts the letters via a `key`).
  Not run for reduced-motion visitors and paused while the browser tab is hidden.

---

## 2026-11-17 — Taste pass (design-taste-frontend skill, preserve mode) (branch `multi-page`)

**Author:** Sibusiso (GitHub: Cibucico), with Claude Code. Same brand, colours, content and pages; detail and motion upgraded.

- **No em dashes in visible text:** page titles in `src/seo/pages.ts` and `index.html` now use `|` and `:`.
- **One button label per intent:** every contact button says **"Discuss a project"** (was also "Get in touch", "Discuss your project",
  "Ask about a retainer", "Request a Quote"). Keep it that way.
- **Section headers stacked:** Our work, Packages and Compare packages no longer use "headline left / small paragraph right".
- **Compare packages:** the 20-row table is now 4 expandable groups (`<details>`, first open) with a feature count; no line under every row.
- **Packages:** featured Business card is wider (`lg:grid-cols-[1fr_1.2fr_1fr]`); cards lift slightly on hover.
- **Motion:** hero photo settles from 112% to 100%; nav links get a sliding green underline (`.nav-link` in `index.css`, also marks the current page);
  trailing arrows in `.btn` nudge on hover; Home tiles lift on hover. All transform/opacity only, and reduced motion is respected.
- **Type:** headings use `text-wrap: balance`, paragraphs `text-wrap: pretty`.
- Checked: tsc clean, lint 0 errors, build OK, all 7 pages hydrate without console errors (motion on and reduced), no mobile overflow.

---

## 2026-11-17 — WhatsApp button, POPIA privacy page, "How we work" (branch `multi-page`)

**Author:** Sibusiso (GitHub: Cibucico), with Claude Code.

- **Phone format:** shown as `(+27) 66 404 0070` everywhere. Contact details now live in `src/lib/contact.ts` (email, phone, WhatsApp number). Change them there only.
- **WhatsApp:** floating "WhatsApp us" button on every page (`src/components/WhatsAppButton.tsx`), opens `wa.me/27664040070` with a pre-typed message.
  **Check that 066 404 0070 is on WhatsApp (ideally WhatsApp Business).**
- **POPIA:** new `/privacy` page (`src/pages/PrivacyPage.tsx`), linked from the footer and from a notice under the contact form submit button.
  It is a plain-language draft. **Before going live:** confirm the details are accurate (email host, Supabase use, retention),
  name the Information Officer registered with the Information Regulator, and have it reviewed.
- **How we work:** Discover, Design, Build, Support (`src/components/ProcessSection.tsx`) on Home and Services; green lines draw in sequence on scroll.
  Uses one `whileInView` on the list with `staggerChildren` (separate per-item `whileInView` left the first line stuck at width 0 after hydration).
- `/privacy` added to `src/seo/pages.ts` (pre-rendered) and `sitemap.xml`.
- **Do not use `src/components/TestimonialsSection.tsx`:** its clients, quotes and figures are invented. Replace with real, permitted quotes or delete it.
- Checked: tsc clean, lint 0 errors, build OK, all 7 pages hydrate with no console errors, lines draw with motion on and reduced, no mobile overflow.

---

## 2026-11-17 — Split the one-page site into pages (branch `multi-page`)

**Author:** Sibusiso (GitHub: Cibucico), with Claude Code. **Design:** unchanged; the existing sections were moved onto separate pages.

- Routes: `/` (hero + four signpost tiles + contact), `/about`, `/work`, `/services`, `/packages` (packages, comparison, retainer), `/contact`.
  Every page except Contact ends with the existing contact section. Shared frame: `src/components/SiteLayout.tsx`.
- New files: `src/seo/pages.ts` (title + description per page, single source of truth), `src/pages/SitePages.tsx`, `src/components/HomeOverview.tsx`.
- All `#cta` / `#services` style anchors are now router links; the navbar highlights the current page.
- Old links like `/#services`, `/#packages`, `/#cta` redirect to the matching page (see `LEGACY_HASHES` in `src/pages/Index.tsx`).
- Pre-render now writes one HTML file per page (`dist/about.html` ...) with its own title, description, canonical and OG tags,
  plus `dist/404.html` (noindex). `vercel.json` adds `"cleanUrls": true` so `/about` serves `about.html`.
- `sitemap.xml` lists all six pages.
- Fix: `HeroSection` no longer branches on `useReducedMotion()`; that made the pre-rendered hero stay invisible for reduced-motion visitors.
  **Rule:** never render different markup on server vs browser (no `useReducedMotion`, `window` checks, dates) during render.
- Checked: tsc clean, lint 0 errors, build OK, all 6 pages hydrate with no console errors (motion on and reduced), nav, CTA and old-link redirects work, no mobile overflow.

---

## 2026-11-17 — SEO part 2: pre-rendering, share image, self-hosted font

**Author:** Sibusiso (GitHub: Cibucico), with Claude Code. **Visible change:** none (same design; text is now in the HTML).

- **Build-time pre-rendering.** `npm run build` now runs three steps: the normal Vite build, an SSR build of
  `src/entry-server.tsx`, then `scripts/prerender.mjs`, which renders `/` to HTML and injects it into `dist/index.html`.
  Crawlers, AI search and link previews now see the full page text without running JavaScript.
  - `src/App.tsx` now exports `AppShell` (providers) and `AppRoutes`; the browser uses `BrowserRouter`, the pre-render uses `StaticRouter`.
  - `src/main.tsx` hydrates the pre-rendered HTML (`hydrateRoot`) and falls back to `createRoot` in dev.
  - **Rule:** components must not touch `window`, `document` or `localStorage` while rendering (only inside `useEffect`/handlers),
    or the build will fail. `supabase/client.ts` was made SSR-safe for this reason.
  - `vite.config.ts`: `manualChunks` only applies to the client build (`isSsrBuild`).
  - **Vercel:** the project must use the default build command (`npm run build`). If it is overridden to `vite build`, pre-rendering is skipped.
- **Share image:** `public/og-image.jpg` (1200×630) plus `og:image*` and `twitter:image` tags.
- **Font:** Inter Tight is self-hosted via `@fontsource/inter-tight` (Latin, weights 400–700) instead of the render-blocking Google Fonts `@import`.
- Checked: `tsc` clean, lint 0 errors, build OK, page loads with JS on and off, hydration has no console warnings, nav links work.

---

## 2026-11-16 — SEO foundations (part 1)

**Author:** Sibusiso (GitHub: Cibucico), with Claude Code. **Visible change:** none.

- `index.html`: `lang="en-ZA"`, canonical URL, robots meta, `og:url`/`og:site_name`/`og:locale`, Twitter title/description;
  removed `twitter:site="@Sibrix"` (handle not verified as ours).
- Added JSON-LD structured data: `ProfessionalService` (name, Cape Town address, phone, email, services catalogue) + `WebSite`.
- `public/robots.txt` simplified and now points to the new `public/sitemap.xml`.
- **Assumes the live domain is `https://sibrixgroup.co.za/`.** On 2026-11-16 that domain returned HTTP 503, so check it is attached in Vercel → Domains.

**Still to do:** submit `https://sibrixgroup.co.za/sitemap.xml` in Google Search Console once the domain is live.

---

## 2026-11-16 — Security & health clean-up

**Author:** Sibusiso (GitHub: Cibucico), with Claude Code
**Visible change to the site:** none. Same pages, same design, same copy.

### Why
A review of the repo found secrets that would end up in the public browser bundle if they were ever configured,
a failing type check, and lint errors. This release fixes those without touching the design.

### What changed

1. **Removed browser-side database and AI code (security).**
   - Deleted `src/lib/turso.ts`, which ran `initDatabase()` (CREATE TABLE ...) from the browser on every page load
     using `VITE_TURSO_AUTH_TOKEN`. Any `VITE_*` variable is bundled into public JS, so that token would have been readable
     by every visitor, giving full read/write access to the database.
   - Deleted `src/lib/ai-agent.ts`, which created a Groq client in the browser with `dangerouslyAllowBrowser: true` and
     `VITE_GROQ_API_KEY`. Same problem: the key would be public. It was not imported anywhere.
   - Deleted `src/lib/email.ts`, a placeholder that only logged to the console and wrote to `localStorage`. Not imported anywhere.
   - Removed the call to `initDatabase()` from `src/App.tsx`.
   - Removed the now-unused dependencies `@libsql/client`, `groq-sdk` and `resend` from `package.json`.

2. **Fixed the TypeScript error in `ContactForm.tsx`.**
   `src/integrations/supabase/types.ts` had no tables, so `supabase.from("contacts").insert(...)` failed `tsc`.
   Added the `contacts` table type (`id, name, email, phone, message, created_at`). If the real table differs,
   regenerate it with `npx supabase gen types typescript --project-id erhmivjfrjfqqoacuciv > src/integrations/supabase/types.ts`.

3. **Lint: 4 errors → 0.**
   - `tailwind.config.ts`: `require("tailwindcss-animate")` → ES `import`.
   - `ui/command.tsx`, `ui/textarea.tsx`: empty `interface X extends Y {}` → `type X = Y`.
   - (The 8 remaining items are `react-refresh` warnings in shadcn files; harmless, left as-is.)

4. **Image size.** `src/assets/project-crimespots.png` (466 KB) → `project-crimespots.webp` (129 KB), same 1440×900.
   `ProjectsSection.tsx` now imports the `.webp`.

5. **React console warning.** `HeroSection.tsx`: `fetchPriority="high"` is not a known prop in React 18 and logged a warning;
   it is now passed as the lowercase HTML attribute `fetchpriority`.

### Checks run before pushing
| Check | Before | After |
|---|---|---|
| `npx tsc -p tsconfig.app.json --noEmit` | 2 errors | clean |
| `npm run lint` | 4 errors, 8 warnings | 0 errors, 8 warnings |
| `npm test` | pass | pass |
| `npm run build` | pass | pass (main JS 226 → 215 KB) |
| Page in browser | 1 console warning | 0 console errors, all images load |

### What you need to do
- **Nothing is required.** The contact form still uses `/api/contact` (xneelo SMTP) and optionally Supabase, exactly as before.
- If you had set `VITE_TURSO_*` or `VITE_GROQ_API_KEY` in Vercel, **remove them and rotate those keys**: they were exposed.
- **Rule going forward:** never put a secret in a `VITE_*` variable. Anything that needs a secret key
  (database writes, AI calls, email) belongs in a serverless function under `api/`, like `api/contact.ts`.

### Still open (not done in this release)
- No `og:image` although `twitter:card` is `summary_large_image`; no `sitemap.xml`.
- Unused components: `TestimonialsSection`, `ThemeSwitcher`, `NavLink`, and ~36 shadcn `ui/` components (tree-shaken, so no bundle cost).
- Only one placeholder test (`src/test/example.test.ts`).

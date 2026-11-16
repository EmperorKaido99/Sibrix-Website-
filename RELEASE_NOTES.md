# Release Notes

Newest entries first. Each entry says **what changed, why, and what (if anything) you need to do**.
Written for both people and AI coding assistants working on this repo — read the latest entry before making changes.

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

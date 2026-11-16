# Sibrix Group website

Vite + React 18 + TypeScript + Tailwind/shadcn. Contact form posts to the Vercel function `api/contact.ts` (xneelo SMTP).

- **Read `RELEASE_NOTES.md` first** — it records what other collaborators changed and why. Add an entry there for every change you push.
- Never put secrets in `VITE_*` env vars (they ship to the browser). Server-side code goes in `api/`.
- Before pushing: `npx tsc -p tsconfig.app.json --noEmit`, `npm run lint`, `npm test`, `npm run build`.

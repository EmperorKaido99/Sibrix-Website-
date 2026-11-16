import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppShell, AppRoutes } from "./App.tsx";

// Used only at build time by scripts/prerender.mjs to turn the page into static HTML,
// so search engines and link previews see the real content without running JavaScript.
export function render(url: string) {
  return renderToString(
    <AppShell>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </AppShell>,
  );
}

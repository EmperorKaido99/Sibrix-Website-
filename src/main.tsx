import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource/inter-tight/latin-400.css";
import "@fontsource/inter-tight/latin-500.css";
import "@fontsource/inter-tight/latin-600.css";
import "@fontsource/inter-tight/latin-700.css";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;

// In production the page HTML is pre-rendered at build time (scripts/prerender.mjs),
// so React attaches to it; in dev the root is empty and React renders from scratch.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}

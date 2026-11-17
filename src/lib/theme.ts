import { useCallback, useEffect, useState } from "react";

// Visitor-selectable colour themes. Each id (except "classic") matches an
// html[data-theme="…"] block in src/index.css that overrides the brand colour tokens.
// index.html applies the saved theme before the page paints, so there is no flash.
export const THEMES = [
  { id: "classic", label: "Classic", swatch: ["#061426", "#00D68F", "#EAF0F5"] },
  { id: "refined", label: "Refined", swatch: ["#0B192D", "#14C886", "#EEF2F6"] },
  { id: "ocean", label: "Ocean", swatch: ["#0F1D38", "#0DD39B", "#E7F0F3"] },
  { id: "teal", label: "Teal night", swatch: ["#09202A", "#19CC7F", "#EDF3F0"] },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];

const STORAGE_KEY = "sibrix-theme";
const EVENT = "sibrix-theme-change";

const isTheme = (v: unknown): v is ThemeId => THEMES.some((t) => t.id === v);

const applyTheme = (id: ThemeId) => {
  if (id === "classic") delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = id;
};

/** Current theme + setter. Starts as "classic" on the server and first render,
 *  then syncs with what index.html applied, so pre-rendered HTML always matches. */
export function useSiteTheme() {
  const [theme, setThemeState] = useState<ThemeId>("classic");

  useEffect(() => {
    const read = () => {
      const t = document.documentElement.dataset.theme;
      setThemeState(isTheme(t) ? t : "classic");
    };
    read();
    window.addEventListener(EVENT, read);
    return () => window.removeEventListener(EVENT, read);
  }, []);

  const setTheme = useCallback((id: ThemeId) => {
    applyTheme(id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* storage blocked: the choice lasts for this page view only */
    }
    window.dispatchEvent(new Event(EVENT)); // keep desktop + mobile pickers in sync
  }, []);

  return { theme, setTheme };
}

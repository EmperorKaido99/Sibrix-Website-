import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type ThemeName = "default" | "premium-minimal";

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (t: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: "default", setTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

const THEMES: Record<ThemeName, Record<string, string>> = {
  default: {
    "--background": "40 30% 95%",
    "--foreground": "220 40% 13%",
    "--card": "40 25% 97%",
    "--card-foreground": "220 40% 13%",
    "--primary": "220 40% 20%",
    "--primary-foreground": "40 30% 95%",
    "--secondary": "220 35% 15%",
    "--secondary-foreground": "40 25% 92%",
    "--muted": "40 15% 90%",
    "--muted-foreground": "220 15% 45%",
    "--accent": "43 72% 50%",
    "--accent-foreground": "220 40% 10%",
    "--border": "40 15% 85%",
    "--input": "40 15% 85%",
    "--ring": "43 72% 50%",
    "--gold": "43 72% 50%",
    "--gold-light": "43 80% 65%",
    "--gold-dark": "43 65% 38%",
    "--cream": "40 30% 95%",
    "--navy": "220 40% 20%",
    "--navy-light": "220 35% 28%",
    "--charcoal": "220 40% 13%",
  },
  "premium-minimal": {
    "--background": "28 38% 91%",
    "--foreground": "213 68% 14%",
    "--card": "30 33% 96%",
    "--card-foreground": "213 68% 14%",
    "--primary": "213 68% 14%",
    "--primary-foreground": "28 38% 91%",
    "--secondary": "213 55% 18%",
    "--secondary-foreground": "30 33% 96%",
    "--muted": "28 20% 85%",
    "--muted-foreground": "213 20% 40%",
    "--accent": "38 46% 60%",
    "--accent-foreground": "213 68% 14%",
    "--border": "28 18% 80%",
    "--input": "28 18% 80%",
    "--ring": "38 46% 60%",
    "--gold": "38 46% 60%",
    "--gold-light": "38 55% 72%",
    "--gold-dark": "38 40% 48%",
    "--cream": "28 38% 91%",
    "--navy": "213 68% 14%",
    "--navy-light": "213 55% 22%",
    "--charcoal": "213 68% 10%",
  },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme: ThemeName = "default";
  const setTheme = () => {};

  useEffect(() => {
    const root = document.documentElement;
    const vars = THEMES["default"];
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

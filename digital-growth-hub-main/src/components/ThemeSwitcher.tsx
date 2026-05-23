import { Palette } from "lucide-react";
import { useTheme, type ThemeName } from "@/contexts/ThemeContext";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const themes: { id: ThemeName; label: string; colors: string[] }[] = [
  {
    id: "default",
    label: "Classic Gold",
    colors: ["hsl(40,30%,95%)", "hsl(220,40%,20%)", "hsl(43,72%,50%)"],
  },
  {
    id: "premium-minimal",
    label: "Premium Minimal",
    colors: ["hsl(28,38%,91%)", "hsl(213,68%,14%)", "hsl(38,46%,60%)"],
  },
];

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
        aria-label="Change theme"
      >
        <Palette size={16} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute right-0 top-12 bg-card border border-border rounded-lg shadow-lg p-3 min-w-[180px] z-50"
          >
            <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2">Theme</p>
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => { setTheme(t.id); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-left ${
                  theme === t.id ? "bg-accent/10" : "hover:bg-muted"
                }`}
              >
                <div className="flex gap-1">
                  {t.colors.map((c, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border border-border"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
                <span className="font-body text-sm text-foreground">{t.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;

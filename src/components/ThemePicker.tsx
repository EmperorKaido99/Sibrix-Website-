import { Check, Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { THEMES, useSiteTheme, type ThemeId } from "@/lib/theme";

const Swatch = ({ colors }: { colors: readonly string[] }) => (
  <span className="flex shrink-0" aria-hidden="true">
    {colors.map((c) => (
      <span key={c} className="h-4 w-4 ring-1 ring-black/10" style={{ background: c }} />
    ))}
  </span>
);

/** Desktop: palette icon in the navbar that opens a menu of colour themes. */
export const ThemeMenu = () => {
  const { theme, setTheme } = useSiteTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="inline-flex h-11 w-11 items-center justify-center text-paper/85 hover:text-paper hover:bg-paper/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
        aria-label="Change colour theme"
      >
        <Palette size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 rounded-none border-0 bg-paper p-2 text-navy shadow-[0_16px_40px_-12px_hsl(var(--navy)/0.5)]">
        <DropdownMenuLabel className="px-2 pb-2 text-sm font-semibold">Colour theme</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={theme} onValueChange={(v) => setTheme(v as ThemeId)}>
          {THEMES.map((t) => (
            <DropdownMenuRadioItem
              key={t.id}
              value={t.id}
              className="cursor-pointer gap-3 rounded-none py-2.5 pl-2 pr-2 text-base focus:bg-paper-2 [&>span:first-child]:hidden"
            >
              <Swatch colors={t.swatch} />
              <span className="flex-1">{t.label}</span>
              {theme === t.id && <Check size={16} aria-hidden="true" />}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

/** Mobile menu: the same choices as a row of buttons. */
export const ThemeSwatches = () => {
  const { theme, setTheme } = useSiteTheme();
  return (
    <div className="mt-8 border-t border-paper/10 pt-6">
      <p className="text-base text-paper/70">Colour theme</p>
      <div className="mt-3 grid grid-cols-2 gap-2" role="radiogroup" aria-label="Colour theme">
        {THEMES.map((t) => (
          <button
            key={t.id}
            type="button"
            role="radio"
            aria-checked={theme === t.id}
            onClick={() => setTheme(t.id)}
            className={`flex items-center gap-3 px-3 py-3 text-base font-medium ${
              theme === t.id ? "bg-paper text-navy" : "bg-paper/10 text-paper hover:bg-paper/15"
            }`}
          >
            <Swatch colors={t.swatch} />
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
};

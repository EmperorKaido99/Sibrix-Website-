import { useEffect, useState } from "react";

// PREVIEW ONLY (palettes branch). Lets reviewers flip between colour refinements.
// Remove this component and the html[data-palette] blocks in index.css before going live.
const OPTIONS = [
  { id: "", label: "Current", swatch: ["#061426", "#00D68F", "#EAF0F5"] },
  { id: "a", label: "A Refined", swatch: ["#0B192D", "#14C886", "#EEF2F6"] },
  { id: "b", label: "B Ocean", swatch: ["#0F1D38", "#0DD39B", "#E7F0F3"] },
  { id: "c", label: "C Teal night", swatch: ["#09202A", "#19CC7F", "#EDF3F0"] },
];

const apply = (id: string) => {
  if (id) document.documentElement.dataset.palette = id;
  else delete document.documentElement.dataset.palette;
};

const PaletteLab = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    let id = new URLSearchParams(window.location.search).get("palette") ?? "";
    if (!id) {
      try {
        id = localStorage.getItem("sibrix-palette") ?? "";
      } catch {
        /* storage blocked: fall back to current */
      }
    }
    if (!OPTIONS.some((o) => o.id === id)) id = "";
    apply(id);
    setActive(id);
  }, []);

  const choose = (id: string) => {
    apply(id);
    setActive(id);
    try {
      localStorage.setItem("sibrix-palette", id);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-40 bg-paper text-navy shadow-[0_10px_30px_-8px_hsl(var(--navy)/0.45)] ring-1 ring-navy/10 p-2">
      <p className="px-2 pt-1 pb-2 text-xs font-semibold">Colour preview</p>
      <div className="flex flex-col sm:flex-row gap-1">
        {OPTIONS.map((o) => (
          <button
            key={o.label}
            type="button"
            aria-pressed={active === o.id}
            onClick={() => choose(o.id)}
            className={`flex items-center gap-2 px-2.5 py-1.5 text-sm font-medium ${
              active === o.id ? "bg-navy text-paper" : "hover:bg-paper-2"
            }`}
          >
            <span className="flex">
              {o.swatch.map((c) => (
                <span key={c} className="h-3.5 w-3.5 ring-1 ring-black/10" style={{ background: c }} />
              ))}
            </span>
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaletteLab;

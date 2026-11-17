import { Check, Minus, Plus } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { COMPARISON, WEBSITE_TIERS } from "@/data/packages";

const Cell = ({ included, featured }: { included: boolean; featured?: boolean }) => (
  <td className={`py-3 px-2 sm:px-4 text-center ${featured ? "bg-green/15" : ""}`}>
    {included ? (
      <Check size={20} strokeWidth={2.25} className="text-navy mx-auto" aria-label="Included" />
    ) : (
      <Minus size={16} className="text-navy/30 mx-auto" aria-label="Not included" />
    )}
  </td>
);

// Website tiers side by side, in expandable groups (first one open).
const ComparisonTable = () => (
  <section id="comparison" className="field-navy section">
    <div className="frame">
      <AnimateOnScroll className="mb-12 md:mb-16">
        <h2 className="heading-xl">Compare websites</h2>
        <p className="lead mt-6 text-paper/80 max-w-[40ch]">What each website includes, grouped by what it does for your business.</p>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.1}>
        <div className="bg-paper text-navy">
          {COMPARISON.map((g, gi) => (
            <details key={g.title} open={gi === 0} className="compare-group group border-t border-border first:border-t-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 sm:px-8 py-6 text-xl md:text-2xl font-semibold tracking-tight">
                {g.title}
                <span className="text-sm md:text-base font-medium text-navy/60 ml-auto">
                  {g.rows.length} {g.rows.length === 1 ? "feature" : "features"}
                </span>
                <Plus size={22} className="shrink-0 transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
              </summary>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th scope="col" className="sr-only">Feature</th>
                    {WEBSITE_TIERS.map((t) => (
                      <th
                        key={t.id}
                        scope="col"
                        className={`w-[18%] sm:w-[15%] pb-3 px-2 text-center text-sm sm:text-base font-semibold ${t.featured ? "bg-green/15" : ""}`}
                      >
                        {t.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {g.rows.map((r) => (
                    <tr key={r.name}>
                      <th scope="row" className="text-left font-normal py-3 pl-4 sm:pl-8 pr-2">
                        <span className="block text-base font-medium">{r.name}</span>
                        <span className="hidden md:block text-sm text-navy/70 mt-0.5">{r.tip}</span>
                      </th>
                      {WEBSITE_TIERS.map((t) => (
                        <Cell key={t.id} included={r.tiers[t.id]} featured={t.featured} />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="h-6" />
            </details>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default ComparisonTable;

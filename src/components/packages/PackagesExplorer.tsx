import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { bookingLink } from "@/lib/booking";
import { AUTOMATION_PLANS, CARE_PLANS, COMPARISON, IT_PLANS, WEBSITE_TIERS } from "@/data/packages";

/*
 * Packages page: one section with tabs (Business automation | IT support | Websites) instead of five stacked
 * sections. All panels are rendered (inactive ones `hidden`), so every plan is in the pre-rendered HTML for search.
 * Prices: a card only shows a price when one is set in src/data/packages.ts; otherwise the single note above the
 * tabs explains that pricing follows the free consultation.
 */

interface Card {
  id: string;
  name: string;
  forWho: string;
  price?: string;
  monthly?: boolean;
  featured?: boolean;
  badge?: string;
  features: string[];
}

const TABS = [
  { id: "automation", label: "Business automation", lead: "From a single workflow to integrated operations, with optional monthly care." },
  { id: "it", label: "IT support", lead: "Professional set-up, followed by managed monthly support." },
  { id: "websites", label: "Websites", lead: "Three ways to get online, plus monthly care. Every website includes one month of support after launch." },
] as const;
type TabId = (typeof TABS)[number]["id"];

// Old in-page anchors still open the right tab: /packages#websites, #it-plans, #automation-plans.
const HASH_TO_TAB: Record<string, TabId> = {
  "#websites": "websites",
  "#care": "websites",
  "#comparison": "websites",
  "#it-plans": "it",
  "#it": "it",
  "#automation-plans": "automation",
};

const PlanCard = ({ c, compact = false }: { c: Card; compact?: boolean }) => {
  const dark = !!c.featured;
  return (
    <article
      className={`h-full flex flex-col transition-transform duration-300 ease-out hover:-translate-y-1.5 ${
        compact ? "p-7 sm:p-8" : "p-7 sm:p-10"
      } ${dark ? "field-navy" : "bg-paper text-navy"}`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className={`${compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"} font-semibold tracking-tight`}>{c.name}</h3>
        {c.badge && <span className="bg-green px-3 py-1 text-sm font-semibold text-navy whitespace-nowrap">{c.badge}</span>}
      </div>
      <p className={`mt-3 text-lg leading-relaxed ${dark ? "text-paper/85" : "text-navy/80"}`}>{c.forWho}</p>
      {c.price && (
        <p className={`mt-5 text-2xl font-semibold tracking-tight ${dark ? "text-green" : ""}`}>
          {c.price}
          {c.monthly && <span className="text-base font-normal opacity-70"> / month</span>}
        </p>
      )}
      {!c.price && c.monthly && <p className={`mt-3 text-sm font-semibold ${dark ? "text-green" : "text-navy/60"}`}>Monthly plan</p>}
      <ul className="mt-7 mb-9 flex-1 space-y-3">
        {c.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-base">
            <Check size={18} className={`mt-0.5 shrink-0 ${dark ? "text-green" : "text-navy"}`} />
            <span className={f.startsWith("Everything in") ? "font-semibold" : ""}>{f}</span>
          </li>
        ))}
      </ul>
      <Link to={bookingLink(c.id)} className={`${dark ? "btn-green" : "btn-navy"} w-full`}>
        Book a free consultation
        <ArrowRight size={18} />
      </Link>
    </article>
  );
};

const Grid = ({ cards, compact }: { cards: Card[]; compact?: boolean }) => (
  <div
    className={`grid grid-cols-1 gap-4 lg:gap-5 items-stretch ${
      cards.length === 3 ? "lg:grid-cols-3" : "md:grid-cols-2"
    }`}
  >
    {cards.map((c) => (
      <PlanCard key={c.id} c={c} compact={compact} />
    ))}
  </div>
);

const Compare = () => (
  <details className="compare-group group mt-10 bg-paper text-navy">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 sm:px-8 py-6 text-xl md:text-2xl font-semibold tracking-tight">
      Compare websites
      <Plus size={22} className="shrink-0 transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
    </summary>
    <div className="px-2 sm:px-4 pb-6 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th scope="col" className="sr-only">Feature</th>
            {WEBSITE_TIERS.map((t) => (
              <th key={t.id} scope="col" className={`w-[18%] py-3 px-2 text-center text-sm sm:text-base font-semibold ${t.featured ? "bg-green/15" : ""}`}>
                {t.name}
              </th>
            ))}
          </tr>
        </thead>
        {COMPARISON.map((g) => (
          <tbody key={g.title}>
            <tr>
              <th scope="colgroup" colSpan={WEBSITE_TIERS.length + 1} className="pt-6 pb-2 px-2 sm:px-4 text-left text-base font-semibold text-navy/60">
                {g.title}
              </th>
            </tr>
            {g.rows.map((r) => (
              <tr key={r.name}>
                <th scope="row" className="py-2.5 px-2 sm:px-4 text-left text-base font-medium">{r.name}</th>
                {WEBSITE_TIERS.map((t) => (
                  <td key={t.id} className={`py-2.5 px-2 text-center ${t.featured ? "bg-green/15" : ""}`}>
                    {r.tiers[t.id] ? (
                      <Check size={20} strokeWidth={2.25} className="mx-auto" aria-label="Included" />
                    ) : (
                      <Minus size={16} className="mx-auto text-navy/30" aria-label="Not included" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  </details>
);

const PackagesExplorer = () => {
  const [active, setActive] = useState<TabId>("automation");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const { hash } = useLocation();

  useEffect(() => {
    const tab = HASH_TO_TAB[hash];
    if (tab) setActive(tab);
  }, [hash]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = TABS[(i + dir + TABS.length) % TABS.length].id;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const current = TABS.find((t) => t.id === active)!;
  const care: Card[] = CARE_PLANS.map((c, i) => ({ id: i === 0 ? "care-plan" : "retainer", name: c.name, forWho: c.forWho, price: c.price, monthly: true, features: c.features }));

  return (
    <section id="packages" className="field-paper-2 section">
      {/* Anchor targets for old links; they all land on the tabs. */}
      <span id="websites" /><span id="it-plans" /><span id="automation-plans" />
      <div className="frame">
        <AnimateOnScroll>
          <p className="lead max-w-[52ch]">
            Pricing is tailored to your business and confirmed after your free consultation.
          </p>
          <div role="tablist" aria-label="Package type" className="mt-10 flex flex-wrap gap-2 border-b border-navy/15">
            {TABS.map((t, i) => (
              <button
                key={t.id}
                ref={(el) => (tabRefs.current[t.id] = el)}
                id={`tab-${t.id}`}
                role="tab"
                type="button"
                aria-selected={active === t.id}
                aria-controls={`panel-${t.id}`}
                tabIndex={active === t.id ? 0 : -1}
                onClick={() => setActive(t.id)}
                onKeyDown={(e) => onKey(e, i)}
                className={`relative -mb-px px-5 py-4 text-lg font-semibold transition-colors ${
                  active === t.id ? "text-navy" : "text-navy/55 hover:text-navy"
                }`}
              >
                {t.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-[3px] bg-green transition-transform duration-300 origin-left ${
                    active === t.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>
          <p className="mt-8 text-lg text-navy/80 max-w-[60ch]">{current.lead}</p>
        </AnimateOnScroll>

        <div className="mt-10">
          <div role="tabpanel" id="panel-automation" aria-labelledby="tab-automation" hidden={active !== "automation"}>
            <Grid cards={AUTOMATION_PLANS} />
          </div>
          <div role="tabpanel" id="panel-it" aria-labelledby="tab-it" hidden={active !== "it"}>
            <Grid cards={IT_PLANS} />
          </div>
          <div role="tabpanel" id="panel-websites" aria-labelledby="tab-websites" hidden={active !== "websites"}>
            <Grid cards={WEBSITE_TIERS} />
            <h3 className="mt-14 text-2xl md:text-3xl font-semibold tracking-tight">Ongoing care</h3>
            <div className="mt-6">
              <Grid cards={care} compact />
            </div>
            <Compare />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesExplorer;

import { Link } from "react-router-dom";
import { Lock, ShieldCheck, UserCheck } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

// Trust block for compliance-minded clients. Wording is a commitment Sibrix makes;
// keep it in step with the privacy policy (src/pages/PrivacyPage.tsx).
const points = [
  { icon: ShieldCheck, title: "POPIA-aligned", detail: "Personal information is processed in line with the Protection of Personal Information Act." },
  { icon: Lock, title: "Least-privilege access", detail: "We access only the data a project requires, restricted to the people delivering it." },
  { icon: UserCheck, title: "Human oversight", detail: "Automated decisions remain subject to human review and approval." },
];

const DataTrust = () => (
  <section className="field-paper-2 section">
    <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
      <AnimateOnScroll className="lg:col-span-4">
        <h2 className="heading-xl max-w-[12ch]">Data protection and compliance</h2>
        <Link to="/privacy" className="link-arrow mt-8 text-lg">
          Read our privacy policy
        </Link>
      </AnimateOnScroll>
      <ul className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {points.map((p, i) => (
          <AnimateOnScroll key={p.title} delay={i * 0.06} className="h-full">
            <li className="h-full bg-paper p-7">
              <p.icon size={26} strokeWidth={1.75} aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-navy/85">{p.detail}</p>
            </li>
          </AnimateOnScroll>
        ))}
      </ul>
    </div>
  </section>
);

export default DataTrust;

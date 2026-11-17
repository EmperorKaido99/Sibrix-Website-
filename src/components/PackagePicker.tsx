import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, RotateCcw } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

type Answer = boolean | null;

const questions = [
  { id: "admin", text: "Does your team re-type or copy the same information between systems?" },
  { id: "it", text: "Do you need help keeping computers, Wi-Fi or security working?" },
  { id: "site", text: "Do you mainly need a website or an online store?" },
] as const;

const results: Record<string, { name: string; why: string; id: string }> = {
  both: { id: "automation", name: "Automation + IT support", why: "Automate the admin and let us look after the IT behind it. We'll scope both in your consultation." },
  automation: { id: "automation-starter", name: "Automation Starter", why: "Start by automating the one workflow that costs your team the most time." },
  it: { id: "it-support-plan", name: "IT support plan", why: "Monthly support so problems get fixed fast and your systems stay secure." },
  site: { id: "launch", name: "Website creation", why: "A professional, search-friendly website. We'll suggest Launch, Grow or Online Store." },
  unsure: { id: "automation", name: "A free consultation", why: "Not sure yet? That's what the consultation is for. In 30 minutes we'll find where you lose time." },
};

// "Not sure which fits?": three yes/no questions, suggestion updates as you answer.
const PackagePicker = () => {
  const [answers, setAnswers] = useState<Record<string, Answer>>({ admin: null, it: null, site: null });
  const done = Object.values(answers).every((a) => a !== null);
  const key = answers.admin && answers.it ? "both" : answers.admin ? "automation" : answers.it ? "it" : answers.site ? "site" : "unsure";
  const result = results[key];

  return (
    <section className="field-paper section">
      <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
        <AnimateOnScroll className="lg:col-span-5">
          <h2 className="heading-xl max-w-[12ch]">Not sure which fits?</h2>
          <p className="lead mt-6 max-w-[34ch]">Answer three quick questions and we'll point you in the right direction.</p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1} className="lg:col-span-7">
          <ol className="space-y-4">
            {questions.map((q) => (
              <li key={q.id} className="bg-paper-2 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
                <p className="text-lg md:text-xl font-semibold tracking-tight max-w-[36ch]">{q.text}</p>
                <div className="flex gap-2 shrink-0" role="group" aria-label={q.text}>
                  {[true, false].map((v) => (
                    <button
                      key={String(v)}
                      type="button"
                      aria-pressed={answers[q.id] === v}
                      onClick={() => setAnswers((a) => ({ ...a, [q.id]: v }))}
                      className={`btn min-w-[5.5rem] ${
                        answers[q.id] === v
                          ? "bg-navy text-paper"
                          : "bg-paper text-navy shadow-[inset_0_0_0_2px_hsl(var(--navy)/0.25)] hover:shadow-[inset_0_0_0_2px_hsl(var(--navy))]"
                      }`}
                    >
                      {v ? "Yes" : "No"}
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ol>

          <div className="picker-result mt-4 field-navy p-6 md:p-8" aria-live="polite">
            {done ? (
              <>
                <p className="text-green font-semibold">We'd suggest</p>
                <p className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">{result.name}</p>
                <p className="mt-3 text-lg text-paper/85 max-w-[48ch]">{result.why}</p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Link to={`/contact?package=${result.id}`} className="btn-green">
                    Book a free consultation
                    <ArrowRight size={18} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setAnswers({ admin: null, it: null, site: null })}
                    className="inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline"
                  >
                    <RotateCcw size={16} /> Start again
                  </button>
                </div>
              </>
            ) : (
              <p className="text-lg text-paper/80">Your suggestion appears here once all three are answered.</p>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PackagePicker;

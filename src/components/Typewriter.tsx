import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  text: string;
  className?: string;
  /** Milliseconds between letters. */
  speed?: number;
  /** Milliseconds before the first letter. */
  delay?: number;
  /** Wait until the text scrolls into view (for text below the fold). */
  startOnView?: boolean;
}

// Types text out letter by letter with a cursor that follows the last letter, then
// blinks a few times and disappears. Pure CSS timing, so the server-rendered HTML and
// the browser render are identical (safe for pre-rendering). Screen readers get the
// whole phrase once; reduced-motion visitors see the text immediately (index.css).
const Typewriter = ({ text, className, speed = 55, delay = 300, startOnView = false }: TypewriterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!startOnView || !ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [startOnView]);

  const play = !startOnView || inView;
  const chars = Array.from(text);

  return (
    <span ref={ref} className={cn("typewriter", className)} data-play={play}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {chars.map((ch, i) => (
          <span
            key={i}
            className={cn("tw-char", i === chars.length - 1 && "tw-last")}
            style={{ "--tw-at": `${delay + i * speed}ms`, "--tw-step": `${speed}ms` } as CSSProperties}
          >
            {ch}
          </span>
        ))}
      </span>
    </span>
  );
};

export default Typewriter;

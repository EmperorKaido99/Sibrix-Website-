import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface DemoVideoProps {
  /** 1280px H.264 MP4 (desktop). */
  src: string;
  /** 720px H.264 MP4, served to screens under 768px wide. */
  srcSmall?: string;
  poster: string;
  /** Describes what the video shows, for screen readers. */
  label: string;
  className?: string;
}

// Silent looping product video. Downloads and plays (muted) only once it scrolls into view,
// shows the poster until then, pauses when scrolled off screen, and starts paused for reduced-motion
// visitors. Has a visible pause/play button, since moving content that runs longer than
// 5 seconds needs one (WCAG 2.2.2). Markup is identical on server and browser.
const DemoVideo = ({ src, srcSmall, poster, label, className }: DemoVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [near, setNear] = useState(false);
  const userPaused = useRef(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      userPaused.current = true;
      video.pause();
      setPaused(true);
    }
    // Attach the poster shortly before the video scrolls into view (saves ~70 KB on page load).
    const nearIo = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          nearIo.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    nearIo.observe(video);
    const io = new IntersectionObserver(([entry]) => {
      if (userPaused.current) return;
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    io.observe(video);
    return () => {
      io.disconnect();
      nearIo.disconnect();
    };
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => {});
      setPaused(false);
    } else {
      userPaused.current = true;
      video.pause();
      setPaused(true);
    }
  };

  return (
    <div className={cn("relative overflow-hidden bg-navy-deep", className)}>
      <video
        ref={ref}
        className="block w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="none"
        poster={near ? poster : undefined}
        aria-label={label}
        width={1280}
        height={800}
      >
        {srcSmall && <source src={srcSmall} type="video/mp4" media="(max-width: 767px)" />}
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        className="absolute bottom-3 right-3 inline-flex items-center gap-2 bg-navy/80 px-3 py-2 text-sm font-semibold text-paper backdrop-blur hover:bg-navy"
        aria-label={paused ? "Play video" : "Pause video"}
      >
        {paused ? <Play size={14} /> : <Pause size={14} />}
        {paused ? "Play" : "Pause"}
      </button>
    </div>
  );
};

export default DemoVideo;

"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const onScroll = () => {
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));
      if (!copyRef.current) return;
      copyRef.current.style.opacity = String(1 - progress * 1.2);
      copyRef.current.style.translate = progress === 0 ? "" : `0 ${progress * 28}px`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pageshow", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pageshow", onScroll);
      if (copyRef.current) {
        copyRef.current.style.opacity = "";
        copyRef.current.style.translate = "";
      }
    };
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero__stage">
        <div className="hero__layer">
          <div className="media-fill">
            <video
              src="/hero-video.mp4"
              poster="/hero-video-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="hero__video"
            />
          </div>
        </div>
      </div>

      <div className="hero__copy" ref={copyRef}>
        <p className="eyebrow">A Legacy in Every Thread</p>
        <h1 className="hero__title">
          <span>Mysore</span>
          <span>Silk</span>
        </h1>
        <p className="hero__lead">Made to be inherited.</p>
        <p className="hero__body">
          Woven in Mysuru. Cherished today.
          <br />
          Passed to tomorrow.
        </p>
        <div className="hero__ctas">
          <Link className="btn btn--outline" href="/sarees">
            Explore silk <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

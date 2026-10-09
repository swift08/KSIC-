"use client";

import Image from "next/image";
import Link from "next/link";

export default function ArtSection() {
  return (
    <div className="art-band">
      <div className="art-container">
        <section className="art" id="silk">
          <div className="art__film" aria-label="The craft of Mysore Silk weaving">
            <Image
              src="/art-craft.jpg"
              alt="KSIC artisan operating historic Mysore silk powerloom in Mysuru factory, weaving crimson silk with pure gold zari"
              fill
              priority
              quality={90}
              sizes="(max-width: 1400px) 70vw, 980px"
              className="art__img"
            />
          </div>

          <div className="art__panel">
            <p className="eyebrow">The Art of Mysore Silk</p>
            <h2 className="display">
              More than a saree.
              <br />
              A living tradition.
            </h2>
            <p className="body">
              Woven in Mysuru, our silk is a celebration of craftsmanship, culture and timeless
              beauty. Each piece carries a history, a heritage and a promise — to last for
              generations.
            </p>
            <Link className="btn btn--text" href="#categories">
              Explore Our Craft <span aria-hidden="true">→</span>
            </Link>
            <div className="palace-sketch" aria-hidden="true">
              <svg viewBox="0 0 360 140" fill="none" stroke="currentColor" strokeWidth="0.65">
                <path d="M18 118h324" />
                <path d="M42 118V68l22-20 22 20v50" />
                <path d="M108 118V52l38-32 38 32v66" />
                <path d="M206 118V68l22-20 22 20v50" />
                <path d="M272 118V78l18-14 18 14v40" />
                <path d="M128 52h76" />
                <path d="M148 24v12M166 14v22M184 24v12" />
                <circle cx="166" cy="10" r="2.8" />
                <path d="M56 82h36M220 82h36M120 82h80" />
                <path d="M140 70h52M148 90h36" />
              </svg>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import type { ReactNode } from "react";

import { Reveal } from "./reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  intro?: string | null;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  index,
  title,
  intro,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-24 border-t border-white/5 py-20 sm:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.2em] text-brand-light">
              {index}
            </span>
            <span className="h-px w-8 bg-brand/40" aria-hidden="true" />
            <h2
              id={`${id}-title`}
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              {title}
            </h2>
          </div>
          {intro ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              {intro}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

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
      className={`relative scroll-mt-24 py-20 sm:py-28 ${className}`}
    >
      <div
        aria-hidden="true"
        className="section-rule absolute inset-x-0 top-0 h-px"
      />

      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
            <span
              aria-hidden="true"
              className="mono-label inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-elevated text-brand-light"
            >
              {index}
            </span>

            <div className="max-w-2xl">
              <h2 id={`${id}-title`} className="text-title">
                {title}
              </h2>
              {intro ? (
                <p className="mt-4 text-body leading-relaxed text-muted sm:text-lead">
                  {intro}
                </p>
              ) : null}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}

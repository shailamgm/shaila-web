import type { Content, Locale } from "@/lib/types";

import { ArrowDownIcon, FileTextIcon } from "./icons";
import { Typewriter } from "./typewriter";

type HeroProps = {
  locale: Locale;
  content: Content;
  name: string;
  monogram: string;
  role: string;
  cv: string | null;
  dict: {
    ctaProjects: string;
    ctaContact: string;
    ctaCv: string;
    scroll: string;
    externalLink: string;
  };
};

export function Hero({
  locale,
  content,
  name,
  monogram,
  role,
  cv,
  dict,
}: HeroProps) {
  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="hero-glow absolute inset-0 -z-10"
      />
      <div
        aria-hidden="true"
        className="blueprint-grid absolute inset-0 -z-10"
      />
      <div
        aria-hidden="true"
        className="grain absolute inset-0 -z-10"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 pb-20 pt-16 sm:pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-24">
        <div>
          <p className="font-serif text-2xl italic leading-none text-brand-light sm:text-3xl">
            {content.hero.greeting}
          </p>

          <h1 id="hero-title" className="mt-3 text-display">
            {firstName}{" "}
            <span className="text-gradient">{lastName}</span>
          </h1>

          <p className="mt-6 min-h-[2.75rem] text-lead font-medium text-muted">
            <Typewriter words={content.hero.roles} />
          </p>

          {content.hero.intro ? (
            <p className="mt-4 max-w-xl text-body leading-relaxed text-muted">
              {content.hero.intro}
            </p>
          ) : null}

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              {dict.ctaProjects}
              <ArrowDownIcon className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              {dict.ctaContact}
            </a>
            {cv ? (
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {dict.ctaCv}
                <FileTextIcon className="h-4 w-4" />
                <span className="sr-only">{dict.externalLink}</span>
              </a>
            ) : null}
          </div>

          <div
            aria-hidden="true"
            className="mt-10 hidden h-px w-full max-w-md bg-gradient-to-r from-line to-transparent sm:block"
          />
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-full bg-brand/15 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="corner-marks pointer-events-none absolute -inset-4"
          />

          <div className="relative flex aspect-square flex-col overflow-hidden rounded-[1.75rem] border border-line bg-card shadow-[0_40px_120px_-60px_var(--glow-brand)] backdrop-blur-md">
            <div
              aria-hidden="true"
              className="blueprint-grid absolute inset-0 opacity-70"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_32%_18%,var(--hero-glow-2),transparent_62%)]"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-line-soft sm:h-60 sm:w-60"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-line-soft/60 sm:h-80 sm:w-80"
            />

            <div className="relative flex items-center justify-between border-b border-line-soft px-5 py-3.5">
              <span className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-1.5 w-1.5 rounded-full bg-brand/80" />
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-brand-indigo/60" />
              </span>
              <span className="mono-label text-muted-subtle">
                {locale.toUpperCase()}
              </span>
            </div>

            <div className="relative flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
              <span
                aria-hidden="true"
                className="font-mono text-7xl font-semibold tracking-tight text-gradient sm:text-8xl"
              >
                {monogram}
              </span>
              <span className="mono-label max-w-[15rem] text-muted">
                {role}
              </span>
            </div>

            <div className="relative flex items-center justify-between gap-3 border-t border-line-soft px-5 py-3.5">
              <span className="mono-label truncate text-muted-subtle">
                {name}
              </span>
              <span className="flex items-center gap-1" aria-hidden="true">
                <span className="h-1 w-1 rounded-full bg-brand-light/70" />
                <span className="h-1 w-1 rounded-full bg-brand-light/40" />
                <span className="h-1 w-1 rounded-full bg-brand-light/20" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pb-10">
        <a
          href="#about"
          className="mx-auto flex w-fit items-center gap-2 rounded-full px-3 py-1.5 mono-label text-muted transition-colors hover:text-fg"
        >
          <span className="scroll-cue inline-flex" aria-hidden="true">
            <ArrowDownIcon className="h-3.5 w-3.5" />
          </span>
          {dict.scroll}
        </a>
      </div>
    </section>
  );
}

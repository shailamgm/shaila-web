import type { Content, Locale } from "@/lib/types";

import { ArrowDownIcon } from "./icons";
import { Typewriter } from "./typewriter";

type HeroProps = {
  locale: Locale;
  content: Content;
  name: string;
  monogram: string;
  role: string;
  dict: {
    ctaProjects: string;
    ctaContact: string;
    scroll: string;
  };
};

export function Hero({
  locale,
  content,
  name,
  monogram,
  role,
  dict,
}: HeroProps) {
  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="hero-grid absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 pb-20 pt-20 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-28 lg:pt-28">
        <div>
          <p className="font-mono text-sm tracking-[0.18em] text-brand-light">
            {content.hero.greeting}
          </p>

          <h1
            id="hero-title"
            className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {firstName}{" "}
            <span className="text-gradient">{lastName}</span>
          </h1>

          <p className="mt-6 min-h-[2.75rem] text-xl font-medium text-muted sm:text-2xl">
            <Typewriter words={content.hero.roles} />
          </p>

          {content.hero.intro ? (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
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
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="absolute -inset-6 rounded-full bg-brand/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-surface/70 backdrop-blur">
            <div
              className="absolute inset-3 rounded-[1.6rem] border border-brand/20"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18),transparent_60%)]"
              aria-hidden="true"
            />

            <div className="relative flex h-full flex-col items-center justify-center gap-5 px-8 text-center">
              <span
                aria-hidden="true"
                className="font-mono text-8xl font-semibold tracking-tight text-gradient sm:text-9xl"
              >
                {monogram}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                {role}
              </span>
            </div>

            <span
              aria-hidden="true"
              className="absolute bottom-5 right-6 font-mono text-[10px] tracking-[0.2em] text-muted/60"
            >
              {locale.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      <div className="relative pb-8">
        <a
          href="#about"
          className="mx-auto flex w-fit items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-fg"
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

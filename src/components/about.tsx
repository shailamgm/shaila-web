import type { AboutFact, Content } from "@/lib/types";

import { Reveal } from "./reveal";
import { Section } from "./section";

type AboutProps = {
  content: Content;
  title: string;
};

const hasValue = (
  fact: AboutFact,
): fact is AboutFact & { value: string } => fact.value !== null;

export function About({ content, title }: AboutProps) {
  const paragraphs = content.about.paragraphs ?? [];
  const facts = content.about.facts.filter(hasValue);

  return (
    <Section id="about" index="01" title={title}>
      <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <Reveal className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-6 top-1 hidden h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-brand/60 via-line to-transparent lg:block"
          />
          <div className="space-y-5">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-lead leading-[1.75] text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        {facts.length > 0 ? (
          <Reveal delay={80}>
            <dl className="surface overflow-hidden">
              <div
                aria-hidden="true"
                className="flex items-center gap-1.5 border-b border-line-soft px-5 py-3"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand/80" />
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-brand-indigo/60" />
              </div>

              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="group grid gap-1.5 border-t border-line-soft px-5 py-4 transition-colors first:border-t-0 hover:bg-elevated/60"
                >
                  <dt className="mono-label text-muted">{fact.label}</dt>
                  <dd className="text-small text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}

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
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal className="space-y-5">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-base leading-relaxed text-muted sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>

        {facts.length > 0 ? (
          <Reveal delay={80}>
            <dl className="rounded-2xl border border-white/10 bg-surface/70 p-6">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-t border-white/5 py-4 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}

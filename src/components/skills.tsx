import type { Content, Locale } from "@/lib/types";

import { Reveal } from "./reveal";
import { Section } from "./section";

type SkillsProps = {
  content: Content;
  locale: Locale;
  title: string;
};

export function Skills({ content, locale, title }: SkillsProps) {
  const groups = content.skills.groups.filter((group) => group.items.length > 0);

  if (groups.length === 0) return null;

  return (
    <Section
      id="skills"
      index="02"
      title={title}
      intro={content.skills.intro}
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => (
          <li key={group.id}>
            <Reveal delay={index * 60} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-surface/70 p-6 transition-colors hover:border-brand/30">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-light">
                  {group.title[locale]}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-fg/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

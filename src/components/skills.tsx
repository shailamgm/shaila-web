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
              <div className="surface surface-hover flex h-full flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="mono-label text-brand-light">
                    {group.title[locale]}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="font-mono text-[10px] leading-none text-muted-subtle"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
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

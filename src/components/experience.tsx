import type {
  Content,
  EducationStatus,
  Locale,
  PracticeStatus,
} from "@/lib/types";

import { CheckIcon } from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

type ExperienceProps = {
  content: Content;
  locale: Locale;
  title: string;
  labels: {
    practice: string;
    education: string;
    certifications: string;
    inProgress: string;
    completed: string;
  };
};

const statusClasses: Record<PracticeStatus, string> = {
  "en-curso": "border-brand/30 bg-brand/10 text-brand-light",
  finalizado: "border-white/10 bg-white/[0.04] text-muted",
};

function StatusBadge({
  status,
  labels,
}: {
  status: PracticeStatus | EducationStatus;
  labels: Pick<ExperienceProps["labels"], "inProgress" | "completed">;
}) {
  const inProgress = status === "en-curso";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] ${statusClasses[status]}`}
    >
      {inProgress ? (
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-brand-light"
        />
      ) : (
        <CheckIcon className="h-3 w-3" />
      )}
      {inProgress ? labels.inProgress : labels.completed}
    </span>
  );
}

export function Experience({
  content,
  locale,
  title,
  labels,
}: ExperienceProps) {
  const practices = content.experience.practice;
  const education = content.experience.education;
  const certifications = content.experience.certifications;

  return (
    <Section
      id="experience"
      index="04"
      title={title}
      intro={content.experience.intro}
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-light">
            {labels.practice}
          </h3>

          <div className="mt-6 space-y-8">
            {practices.map((practice, index) => {
              const role = practice.role?.[locale];
              const period = practice.period?.[locale];
              const description = practice.description?.[locale];
              const tasks = practice.tasks?.[locale] ?? [];

              return (
                <Reveal key={practice.id} delay={index * 80}>
                  <article className="relative border-l border-white/10 pl-6">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-night bg-brand"
                    />

                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="text-lg font-semibold">
                        {practice.organization[locale]}
                      </h4>
                      {practice.status ? (
                        <StatusBadge
                          status={practice.status}
                          labels={labels}
                        />
                      ) : null}
                    </div>

                    {role ? (
                      <p className="mt-1 text-sm text-brand-light">{role}</p>
                    ) : null}

                    {period ? (
                      <p className="mt-1 font-mono text-xs text-muted">
                        {period}
                      </p>
                    ) : null}

                    {description ? (
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {description}
                      </p>
                    ) : null}

                    {tasks.length > 0 ? (
                      <ul className="mt-4 space-y-2">
                        {tasks.map((task) => (
                          <li
                            key={task}
                            className="flex items-start gap-2 text-sm text-muted"
                          >
                            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-light">
            {labels.education}
          </h3>

          <div className="mt-6 space-y-6">
            {education.map((entry, index) => {
              const period = entry.period?.[locale];

              return (
                <Reveal key={entry.id} delay={index * 80}>
                  <article className="rounded-2xl border border-white/10 bg-surface/70 p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h4 className="text-base font-semibold">
                        {entry.title[locale]}
                      </h4>
                      <StatusBadge status={entry.status} labels={labels} />
                    </div>

                    {entry.center ? (
                      <p className="mt-1.5 text-sm text-muted">
                        {entry.center}
                      </p>
                    ) : null}

                    {period ? (
                      <p className="mt-1 font-mono text-xs text-muted">
                        {period}
                      </p>
                    ) : null}
                  </article>
                </Reveal>
              );
            })}
          </div>

          {certifications.length > 0 ? (
            <div className="mt-10">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-light">
                {labels.certifications}
              </h3>

              <ul className="mt-4 space-y-3">
                {certifications.map((certification) => (
                  <li
                    key={certification.id}
                    className="rounded-xl border border-white/10 bg-surface/50 px-5 py-4"
                  >
                    <p className="text-sm font-medium text-fg">
                      {certification.name}
                    </p>
                    <p className="mt-0.5 text-xs text-muted">
                      {certification.issuer}
                      {certification.year ? (
                        <span className="font-mono">
                          {" "}
                          · {certification.year}
                        </span>
                      ) : null}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

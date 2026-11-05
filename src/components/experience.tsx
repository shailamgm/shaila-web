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
  "en-curso": "border-brand/35 bg-brand/10 text-brand-light",
  finalizado: "border-line bg-elevated text-muted",
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
      className={`mono-label inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 ${statusClasses[status]}`}
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

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <h3 className="mono-label text-brand-light">{children}</h3>
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-gradient-to-r from-line to-transparent"
      />
    </div>
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
          <Subheading>{labels.practice}</Subheading>

          <div className="mt-6 space-y-9">
            {practices.map((practice, index) => {
              const role = practice.role?.[locale];
              const period = practice.period?.[locale];
              const description = practice.description?.[locale];
              const tasks = practice.tasks?.[locale] ?? [];

              return (
                <Reveal key={practice.id} delay={index * 80}>
                  <article className="relative pl-7">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-line via-line to-transparent"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-brand/70 bg-brand/40 ring-4 ring-night"
                    />

                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="text-body font-semibold">
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
                      <p className="mt-1 text-small text-brand-light">{role}</p>
                    ) : null}

                    {period ? (
                      <p className="mt-1 font-mono text-xs text-muted">
                        {period}
                      </p>
                    ) : null}

                    {description ? (
                      <p className="mt-3 text-small leading-relaxed text-muted">
                        {description}
                      </p>
                    ) : null}

                    {tasks.length > 0 ? (
                      <ul className="mt-4 space-y-2">
                        {tasks.map((task) => (
                          <li
                            key={task}
                            className="flex items-start gap-2.5 text-small text-muted"
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
          <Subheading>{labels.education}</Subheading>

          <div className="mt-6 space-y-4">
            {education.map((entry, index) => {
              const period = entry.period?.[locale];

              return (
                <Reveal key={entry.id} delay={index * 80}>
                  <article className="surface p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h4 className="text-body font-semibold">
                        {entry.title[locale]}
                      </h4>
                      <StatusBadge status={entry.status} labels={labels} />
                    </div>

                    {entry.center ? (
                      <p className="mt-1.5 text-small text-muted">
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
              <Subheading>{labels.certifications}</Subheading>

              <ul className="mt-4 space-y-2.5">
                {certifications.map((certification) => (
                  <li
                    key={certification.id}
                    className="surface-flat flex items-start gap-3 px-4 py-3.5 transition-colors hover:border-brand/30"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-brand/25 bg-brand/10 text-brand-light">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-small font-medium text-fg">
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
                    </div>
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

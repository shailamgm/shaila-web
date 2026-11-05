import type {
  Content,
  Locale,
  ProjectKind,
  ProjectStatus,
} from "@/lib/types";

import { ArrowUpRightIcon, CheckIcon } from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

type ProjectsProps = {
  content: Content;
  locale: Locale;
  title: string;
  labels: {
    kindPractica: string;
    kindProyecto: string;
    statusInProgress: string;
    statusDone: string;
    statusDocumented: string;
    viewDemo: string;
    viewRepo: string;
    externalLink: string;
  };
};

const kindLabels = (
  labels: ProjectsProps["labels"],
): Record<ProjectKind, string> => ({
  practica: labels.kindPractica,
  proyecto: labels.kindProyecto,
});

const statusLabels = (
  labels: ProjectsProps["labels"],
): Record<ProjectStatus, string> => ({
  "en-curso": labels.statusInProgress,
  finalizado: labels.statusDone,
  documentado: labels.statusDocumented,
});

export function Projects({
  content,
  locale,
  title,
  labels,
}: ProjectsProps) {
  const kinds = kindLabels(labels);
  const statuses = statusLabels(labels);

  return (
    <Section
      id="projects"
      index="03"
      title={title}
      intro={content.projects.intro}
    >
      <ul className="grid gap-6 lg:grid-cols-2">
        {content.projects.items.map((project, index) => {
          const summary = project.summary?.[locale];
          const highlights = project.highlights?.[locale] ?? [];
          const status = project.status ? statuses[project.status] : null;

          return (
            <li key={project.slug}>
              <Reveal delay={index * 90} className="h-full">
                <article className="surface surface-hover group flex h-full flex-col overflow-hidden p-6 sm:p-7">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="mono-label inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-brand-light">
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-brand-light"
                      />
                      {kinds[project.kind]}
                    </span>
                    {status ? (
                      <span className="mono-label inline-flex items-center rounded-full border border-line bg-elevated px-3 py-1 text-muted">
                        {status}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-5 text-subtitle">
                    {project.title[locale]}
                  </h3>

                  {summary ? (
                    <p className="mt-3 text-small leading-relaxed text-muted">
                      {summary}
                    </p>
                  ) : null}

                  {highlights.length > 0 ? (
                    <ul className="mt-5 space-y-2">
                      {highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2.5 text-small text-muted"
                        >
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {project.stack.length > 0 ? (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((technology) => (
                        <li key={technology} className="chip">
                          {technology}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {project.links.repo || project.links.demo ? (
                    <div className="mt-auto flex flex-wrap items-center gap-5 border-t border-line-soft pt-5">
                      {project.links.repo ? (
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1.5 text-small font-medium text-brand-light transition-colors hover:text-fg"
                        >
                          {labels.viewRepo}
                          <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                          <span className="sr-only">
                            {labels.externalLink}
                          </span>
                        </a>
                      ) : null}

                      {project.links.demo ? (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1.5 text-small font-medium text-brand-light transition-colors hover:text-fg"
                        >
                          {labels.viewDemo}
                          <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                          <span className="sr-only">
                            {labels.externalLink}
                          </span>
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

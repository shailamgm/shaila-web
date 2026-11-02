import type {
  Content,
  Locale,
  ProjectKind,
  ProjectStatus,
} from "@/lib/types";

import { CheckIcon, ExternalLinkIcon } from "./icons";
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
                <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-surface/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_70px_-40px_rgba(59,130,246,0.65)] sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-light">
                      {kinds[project.kind]}
                    </span>
                    {status ? (
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                        {status}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight sm:text-2xl">
                    {project.title[locale]}
                  </h3>

                  {summary ? (
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {summary}
                    </p>
                  ) : null}

                  {highlights.length > 0 ? (
                    <ul className="mt-5 space-y-2">
                      {highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-muted"
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
                        <li
                          key={technology}
                          className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-fg/90"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {project.links.repo || project.links.demo ? (
                    <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
                      {project.links.repo ? (
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-brand-light transition-colors hover:text-fg"
                        >
                          {labels.viewRepo}
                          <ExternalLinkIcon className="h-4 w-4" />
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
                          className="inline-flex items-center gap-2 text-sm font-medium text-brand-light transition-colors hover:text-fg"
                        >
                          {labels.viewDemo}
                          <ExternalLinkIcon className="h-4 w-4" />
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

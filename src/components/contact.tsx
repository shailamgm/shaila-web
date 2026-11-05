import type { Dictionary } from "@/lib/i18n";

import { ContactForm } from "./contact-form";
import { CopyEmailButton } from "./copy-email-button";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

type ContactProps = {
  title: string;
  intro: string | null;
  email: string;
  phone: string;
  linkedin: string | null;
  github: string | null;
  endpoint: string | null;
  labels: Dictionary["contact"] & { externalLink: string };
};

export function Contact({
  title,
  intro,
  email,
  phone,
  linkedin,
  github,
  endpoint,
  labels,
}: ContactProps) {
  const telHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <Section id="contact" index="05" title={title} intro={intro}>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <Reveal>
          <ul className="space-y-3">
            <li className="surface group flex items-center gap-3 p-4 transition-colors hover:border-brand/40 sm:p-5">
              <a
                href={`mailto:${email}`}
                className="flex min-w-0 flex-1 items-center gap-4 rounded-lg"
              >
                <span className="icon-tile">
                  <MailIcon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="mono-label block text-muted">
                    {labels.email}
                  </span>
                  <span
                    id="contact-email-address"
                    className="mt-1 block select-all truncate text-small text-fg transition-colors group-hover:text-brand-light"
                  >
                    {email}
                  </span>
                </span>
              </a>

              <CopyEmailButton
                email={email}
                emailId="contact-email-address"
                labels={{
                  copy: labels.copyEmail,
                  copied: labels.copied,
                  error: labels.copyError,
                }}
              />
            </li>

            <li>
              <a
                href={telHref}
                className="surface group flex items-center gap-4 p-4 transition-colors hover:border-brand/40 sm:p-5"
              >
                <span className="icon-tile">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="mono-label block text-muted">
                    {labels.phone}
                  </span>
                  <span className="mt-1 block font-mono text-small text-fg transition-colors group-hover:text-brand-light">
                    {phone}
                  </span>
                </span>
              </a>
            </li>

            {linkedin ? (
              <li>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface group flex items-center gap-4 p-4 transition-colors hover:border-brand/40 sm:p-5"
                >
                  <span className="icon-tile">
                    <LinkedInIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-small text-fg transition-colors group-hover:text-brand-light">
                      LinkedIn
                    </span>
                    <span className="mt-1 block text-xs text-muted">
                      {labels.linkedinDescription}
                    </span>
                    <span className="sr-only">{labels.externalLink}</span>
                  </span>
                  <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-light" />
                </a>
              </li>
            ) : null}

            {github ? (
              <li>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface group flex items-center gap-4 p-4 transition-colors hover:border-brand/40 sm:p-5"
                >
                  <span className="icon-tile">
                    <GitHubIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-small text-fg transition-colors group-hover:text-brand-light">
                      GitHub
                    </span>
                    <span className="mt-1 block text-xs text-muted">
                      {labels.githubDescription}
                    </span>
                    <span className="sr-only">{labels.externalLink}</span>
                  </span>
                  <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-light" />
                </a>
              </li>
            ) : null}
          </ul>
        </Reveal>

        <Reveal delay={80}>
          <ContactForm
            endpoint={endpoint}
            labels={labels}
            externalLink={labels.externalLink}
          />
        </Reveal>
      </div>
    </Section>
  );
}

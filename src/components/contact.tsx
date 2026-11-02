import { LinkedInIcon, MailIcon, PhoneIcon } from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

type ContactProps = {
  title: string;
  intro: string | null;
  email: string;
  phone: string;
  linkedin: string | null;
  labels: {
    formTitle: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    disabledNotice: string;
    externalLink: string;
  };
};

export function Contact({
  title,
  intro,
  email,
  phone,
  linkedin,
  labels,
}: ContactProps) {
  const telHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <Section id="contact" index="05" title={title} intro={intro}>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <Reveal>
          <ul className="space-y-3">
            <li>
              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/70 p-5 transition-colors hover:border-brand/40 hover:bg-brand/[0.06]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-brand-light">
                  <MailIcon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {labels.email}
                  </span>
                  <span className="mt-1 block truncate text-sm text-fg transition-colors group-hover:text-brand-light">
                    {email}
                  </span>
                </span>
              </a>
            </li>

            <li>
              <a
                href={telHref}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/70 p-5 transition-colors hover:border-brand/40 hover:bg-brand/[0.06]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-brand-light">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-sm text-fg transition-colors group-hover:text-brand-light">
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
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/70 p-5 transition-colors hover:border-brand/40 hover:bg-brand/[0.06]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-brand-light">
                    <LinkedInIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-fg transition-colors group-hover:text-brand-light">
                      LinkedIn
                    </span>
                    <span className="sr-only">{labels.externalLink}</span>
                  </span>
                </a>
              </li>
            ) : null}
          </ul>
        </Reveal>

        <Reveal delay={80}>
          <form
            aria-describedby="contact-form-status"
            className="rounded-2xl border border-white/10 bg-surface/70 p-6 sm:p-7"
          >
            <h3 className="text-lg font-semibold">{labels.formTitle}</h3>

            <p
              id="contact-form-status"
              className="mt-3 rounded-xl border border-brand/20 bg-brand/[0.06] p-3 text-sm leading-relaxed text-muted"
            >
              {labels.disabledNotice}
            </p>

            <fieldset disabled className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
                >
                  {labels.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="block w-full rounded-lg border border-white/10 bg-night/60 px-3 py-2.5 text-sm text-fg outline-none transition-colors focus-visible:border-brand-light disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
                >
                  {labels.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-lg border border-white/10 bg-night/60 px-3 py-2.5 text-sm text-fg outline-none transition-colors focus-visible:border-brand-light disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
                >
                  {labels.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  className="block w-full resize-none rounded-lg border border-white/10 bg-night/60 px-3 py-2.5 text-sm text-fg outline-none transition-colors focus-visible:border-brand-light disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <button
                type="submit"
                disabled
                className="btn-primary w-full cursor-not-allowed opacity-50"
              >
                {labels.submit}
              </button>
            </fieldset>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

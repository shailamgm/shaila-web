"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

import type { Dictionary } from "@/lib/i18n";

type FieldName = "name" | "email" | "subject" | "message";

type FieldErrors = Partial<Record<FieldName, string>>;

type Feedback = {
  kind: "success" | "error";
  message: string;
};

type ContactFormProps = {
  endpoint: string | null;
  labels: Dictionary["contact"];
  externalLink: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_ORDER: FieldName[] = ["name", "email", "subject", "message"];

function validate(
  values: Record<FieldName, string>,
  messages: Dictionary["contact"]["errors"],
): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name) {
    errors.name = messages.required;
  } else if (values.name.length < 2) {
    errors.name = messages.nameTooShort;
  } else if (values.name.length > 100) {
    errors.name = messages.nameTooLong;
  }

  if (!values.email) {
    errors.email = messages.required;
  } else if (values.email.length > 254 || !EMAIL_PATTERN.test(values.email)) {
    errors.email = messages.invalidEmail;
  }

  if (!values.subject) {
    errors.subject = messages.required;
  } else if (values.subject.length < 3) {
    errors.subject = messages.subjectTooShort;
  } else if (values.subject.length > 150) {
    errors.subject = messages.subjectTooLong;
  }

  if (!values.message) {
    errors.message = messages.required;
  } else if (values.message.length < 10) {
    errors.message = messages.messageTooShort;
  } else if (values.message.length > 5000) {
    errors.message = messages.messageTooLong;
  }

  return errors;
}

export function ContactForm({
  endpoint,
  labels,
  externalLink,
}: ContactFormProps) {
  const successRef = useRef<HTMLParagraphElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const isConfigured = Boolean(endpoint);

  useEffect(() => {
    if (feedback?.kind === "success") {
      successRef.current?.focus();
    } else if (feedback?.kind === "error") {
      errorRef.current?.focus();
    }
  }, [feedback]);

  const clearFieldError = (field: FieldName) => {
    setFieldErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });

    if (feedback?.kind === "error") {
      setFeedback(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!endpoint || isSubmitting) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: un envío sospechoso se trata en silencio, sin petición.
    if (String(data.get("_gotcha") ?? "").trim()) {
      form.reset();
      setFieldErrors({});
      setFeedback({ kind: "success", message: labels.success });
      return;
    }

    const values: Record<FieldName, string> = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    const errors = validate(values, labels.errors);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setFeedback(null);

      const firstInvalid = FIELD_ORDER.find((field) => errors[field]);
      if (firstInvalid) {
        requestAnimationFrame(() => {
          document.getElementById(`contact-${firstInvalid}`)?.focus();
        });
      }
      return;
    }

    setFieldErrors({});
    setFeedback(null);
    setIsSubmitting(true);

    // Se envían los valores ya recortados que se han validado.
    for (const field of FIELD_ORDER) {
      data.set(field, values[field]);
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setFeedback({ kind: "success", message: labels.success });
        return;
      }

      if (response.status === 429) {
        setFeedback({ kind: "error", message: labels.rateLimited });
      } else {
        // 422 u otros errores del servicio: nunca se muestra el mensaje crudo.
        setFeedback({ kind: "error", message: labels.error });
      }
    } catch {
      setFeedback({ kind: "error", message: labels.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      action={endpoint ?? undefined}
      method="POST"
      noValidate
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-title"
      aria-describedby={!isConfigured ? "contact-form-status" : undefined}
      aria-busy={isSubmitting}
      className="surface p-6 sm:p-7"
    >
      <h3
        id="contact-form-title"
        className="text-[1.125rem] font-semibold tracking-tight"
      >
        {labels.formTitle}
      </h3>

      {!isConfigured ? (
        <p
          id="contact-form-status"
          className="mt-3 rounded-xl border border-brand/25 bg-brand/[0.06] p-3.5 text-small leading-relaxed text-muted"
        >
          {labels.disabledNotice}
        </p>
      ) : null}

      <fieldset disabled={!isConfigured} className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="contact-name"
            className="mono-label mb-1.5 block text-muted"
          >
            {labels.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
            onChange={() => clearFieldError("name")}
            className="block w-full rounded-lg border border-line bg-input px-3.5 py-2.5 text-small text-fg outline-none transition-colors focus-visible:border-brand-light focus-visible:ring-2 focus-visible:ring-brand/20 disabled:cursor-not-allowed disabled:opacity-60"
          />
          {fieldErrors.name ? (
            <p id="contact-name-error" className="mt-1.5 text-xs text-danger">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mono-label mb-1.5 block text-muted"
          >
            {labels.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={
              fieldErrors.email ? "contact-email-error" : undefined
            }
            onChange={() => clearFieldError("email")}
            className="block w-full rounded-lg border border-line bg-input px-3.5 py-2.5 text-small text-fg outline-none transition-colors focus-visible:border-brand-light focus-visible:ring-2 focus-visible:ring-brand/20 disabled:cursor-not-allowed disabled:opacity-60"
          />
          {fieldErrors.email ? (
            <p id="contact-email-error" className="mt-1.5 text-xs text-danger">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="mono-label mb-1.5 block text-muted"
          >
            {labels.subject}
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            minLength={3}
            maxLength={150}
            autoComplete="off"
            aria-invalid={Boolean(fieldErrors.subject)}
            aria-describedby={
              fieldErrors.subject ? "contact-subject-error" : undefined
            }
            onChange={() => clearFieldError("subject")}
            className="block w-full rounded-lg border border-line bg-input px-3.5 py-2.5 text-small text-fg outline-none transition-colors focus-visible:border-brand-light focus-visible:ring-2 focus-visible:ring-brand/20 disabled:cursor-not-allowed disabled:opacity-60"
          />
          {fieldErrors.subject ? (
            <p
              id="contact-subject-error"
              className="mt-1.5 text-xs text-danger"
            >
              {fieldErrors.subject}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mono-label mb-1.5 block text-muted"
          >
            {labels.message}
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            minLength={10}
            maxLength={5000}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={
              fieldErrors.message ? "contact-message-error" : undefined
            }
            onChange={() => clearFieldError("message")}
            className="block w-full resize-none rounded-lg border border-line bg-input px-3.5 py-2.5 text-small text-fg outline-none transition-colors focus-visible:border-brand-light focus-visible:ring-2 focus-visible:ring-brand/20 disabled:cursor-not-allowed disabled:opacity-60"
          />
          {fieldErrors.message ? (
            <p
              id="contact-message-error"
              className="mt-1.5 text-xs text-danger"
            >
              {fieldErrors.message}
            </p>
          ) : null}
        </div>

        <input type="hidden" name="_subject" defaultValue={labels.emailSubject} />

        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          disabled={!isConfigured || isSubmitting}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? labels.sending : labels.submit}
        </button>
      </fieldset>

      <p
        ref={successRef}
        id="contact-form-success"
        tabIndex={-1}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={
          feedback?.kind === "success"
            ? "mt-4 rounded-xl border border-success-border bg-success-surface p-3.5 text-small leading-relaxed text-success"
            : "sr-only"
        }
      >
        {feedback?.kind === "success" ? feedback.message : ""}
      </p>

      <p
        ref={errorRef}
        id="contact-form-error"
        tabIndex={-1}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        className={
          feedback?.kind === "error"
            ? "mt-4 rounded-xl border border-danger-border bg-danger-surface p-3.5 text-small leading-relaxed text-danger"
            : "sr-only"
        }
      >
        {feedback?.kind === "error" ? feedback.message : ""}
      </p>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        {labels.privacyNotice}{" "}
        <a
          href="https://formspree.io/legal/privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-brand/40 underline-offset-2 transition-colors hover:text-brand-light"
        >
          {labels.privacyPolicy}
          <span className="sr-only"> ({externalLink})</span>
        </a>
      </p>
    </form>
  );
}

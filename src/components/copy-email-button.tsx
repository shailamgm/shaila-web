"use client";

import { useEffect, useState } from "react";

import { CheckIcon, CopyIcon } from "./icons";

type CopyStatus = "idle" | "copied" | "error";

type CopyEmailButtonProps = {
  email: string;
  emailId: string;
  labels: {
    copy: string;
    copied: string;
    error: string;
  };
};

/** Selecciona la dirección visible para que se pueda copiar con Ctrl/Cmd + C. */
function selectEmail(emailId: string) {
  const node = document.getElementById(emailId);
  if (!node) return;

  const range = document.createRange();
  range.selectNodeContents(node);

  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
}

export function CopyEmailButton({
  email,
  emailId,
  labels,
}: CopyEmailButtonProps) {
  const [status, setStatus] = useState<CopyStatus>("idle");

  useEffect(() => {
    if (status === "idle") return;

    const timeout = window.setTimeout(() => setStatus("idle"), 3000);
    return () => window.clearTimeout(timeout);
  }, [status]);

  const handleCopy = async () => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      // Sin Clipboard API (o si el permiso falla) se selecciona la
      // dirección para que se pueda copiar manualmente.
      setStatus("error");
      selectEmail(emailId);
    }
  };

  const copied = status === "copied";
  const error = status === "error";

  return (
    <div className="relative shrink-0">
      <button
        type="button"
        onClick={handleCopy}
        aria-label={labels.copy}
        className={`icon-button ${
          copied
            ? "border-success-border bg-success-surface text-success"
            : error
              ? "border-danger-border bg-danger-surface text-danger"
              : "text-muted hover:border-brand/40 hover:bg-brand/10 hover:text-brand-light"
        }`}
      >
        {copied ? (
          <CheckIcon className="h-4 w-4" />
        ) : (
          <CopyIcon className="h-4 w-4" />
        )}
      </button>

      <span
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute right-0 top-full z-10 mt-1.5 w-max max-w-[13rem] rounded-lg border bg-menu px-2.5 py-1 text-[11px] leading-snug shadow-lg ${
          copied
            ? "visible border-success-border text-success"
            : error
              ? "visible border-danger-border text-danger"
              : "invisible border-transparent"
        }`}
      >
        {copied ? labels.copied : error ? labels.error : ""}
      </span>
    </div>
  );
}

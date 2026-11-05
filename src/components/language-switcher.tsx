"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { Locale } from "@/lib/types";

type LanguageOption = {
  code: Locale;
  label: string;
};

type LanguageSwitcherProps = {
  locale: Locale;
  options: LanguageOption[];
  label: string;
  className?: string;
};

/**
 * Enlaces directos a cada idioma. Conserva el ancla de la sección actual
 * (`#projects`, `#contact`…) cuando existe.
 */
export function LanguageSwitcher({
  locale,
  options,
  label,
  className = "",
}: LanguageSwitcherProps) {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <div
      role="group"
      aria-label={label}
      className={`flex h-10 items-center gap-0.5 rounded-full border border-line bg-elevated p-1 ${className}`}
    >
      {options.map((option) => {
        const isCurrent = option.code === locale;

        return (
          <Link
            key={option.code}
            href={`/${option.code}${hash}`}
            hrefLang={option.code}
            lang={option.code}
            aria-current={isCurrent ? "true" : undefined}
            className={`rounded-full px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
              isCurrent
                ? "bg-brand-deep text-white shadow-[0_2px_10px_-4px_var(--btn-shadow)]"
                : "text-muted hover:bg-elevated-strong hover:text-fg"
            }`}
          >
            {option.code}
          </Link>
        );
      })}
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

import { CloseIcon, MenuIcon } from "./icons";
import { LanguageSwitcher } from "./language-switcher";

type LanguageOption = {
  code: Locale;
  label: string;
};

type SiteHeaderProps = {
  locale: Locale;
  dict: Dictionary;
  name: string;
  monogram: string;
  languageOptions: LanguageOption[];
};

export function SiteHeader({
  locale,
  dict,
  name,
  monogram,
  languageOptions,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const links = [
    { href: "#about", label: dict.sections.about },
    { href: "#skills", label: dict.sections.skills },
    { href: "#projects", label: dict.sections.projects },
    { href: "#experience", label: dict.sections.experience },
    { href: "#contact", label: dict.sections.contact },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-night/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3 rounded-md transition-opacity hover:opacity-80"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 font-mono text-sm font-semibold tracking-tight text-brand-light">
            {monogram}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            {name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher
            locale={locale}
            options={languageOptions}
            label={dict.nav.changeLanguage}
            className="hidden md:flex"
          />

          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-fg transition-colors hover:border-brand/40 hover:bg-brand/10 md:hidden"
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/5 bg-night/95 px-6 pb-6 pt-4 backdrop-blur-md md:hidden"
      >
        <nav>
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-base text-muted transition-colors hover:bg-white/[0.04] hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-4 border-t border-white/5 pt-4">
          <LanguageSwitcher
            locale={locale}
            options={languageOptions}
            label={dict.nav.changeLanguage}
          />
        </div>
      </div>
    </header>
  );
}

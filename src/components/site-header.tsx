"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

import { CloseIcon, MenuIcon } from "./icons";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

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
    <header className="sticky top-0 z-50 border-b border-line-soft bg-header backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          href={`/${locale}`}
          className="group flex items-center gap-3 rounded-lg"
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-line-strong bg-elevated font-mono text-xs font-semibold tracking-tight text-brand-light transition-colors group-hover:border-brand/50">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-brand-cyan/10"
            />
            <span className="relative">{monogram}</span>
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            {name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
              <span
                aria-hidden="true"
                className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-brand-light to-brand-cyan transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle
            labels={{
              light: dict.nav.themeLight,
              lightOn: dict.nav.themeLightOn,
              darkOn: dict.nav.themeDarkOn,
            }}
          />

          <LanguageSwitcher
            locale={locale}
            options={languageOptions}
            label={dict.nav.changeLanguage}
            className="hidden lg:flex"
          />

          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            className="icon-button lg:hidden"
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
        className="border-t border-line-soft bg-menu px-6 pb-6 pt-4 backdrop-blur-xl lg:hidden"
      >
        <nav>
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-base text-muted transition-colors hover:bg-elevated hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-4 border-t border-line-soft pt-4">
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

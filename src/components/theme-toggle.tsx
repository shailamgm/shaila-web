"use client";

import { useState, useSyncExternalStore } from "react";

import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

import { MoonIcon, SunIcon } from "./icons";

type ThemeToggleProps = {
  labels: {
    light: string;
    lightOn: string;
    darkOn: string;
  };
};

const listeners = new Set<() => void>();

function getSnapshot(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  const handleStorage = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY) return;

    document.documentElement.dataset.theme =
      event.newValue === "light" ? "light" : "dark";
    for (const notify of listeners) notify();
  };

  window.addEventListener("storage", handleStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Si el almacenamiento no está disponible, el tema sigue activo
    // durante la sesión; solo se pierde la persistencia.
  }

  for (const notify of listeners) notify();
}

export function ThemeToggle({ labels }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [announcement, setAnnouncement] = useState("");
  const isLight = theme === "light";

  const toggleTheme = () => {
    const next: Theme = isLight ? "dark" : "light";
    applyTheme(next);
    setAnnouncement(next === "light" ? labels.lightOn : labels.darkOn);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={labels.light}
        aria-pressed={isLight}
        className="icon-button"
      >
        <SunIcon className="theme-icon-when-dark h-5 w-5" />
        <MoonIcon className="theme-icon-when-light h-5 w-5" />
      </button>

      <span role="status" aria-live="polite" className="sr-only">
        {announcement}
      </span>
    </>
  );
}

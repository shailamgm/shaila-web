"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  words: string[];
};

/**
 * Alterna los roles aprobados con efecto de escritura.
 *
 * El primer rol se renderiza completo en el servidor para que el contenido
 * exista sin JavaScript. Con `prefers-reduced-motion` se queda estático.
 */
export function Typewriter({ words }: TypewriterProps) {
  const firstWord = words[0] ?? "";
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(firstWord.length);
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion || words.length === 0) return;

    const word = words[wordIndex] ?? "";

    if (!deleting && charIndex === word.length) {
      const timeout = window.setTimeout(() => setDeleting(true), 1800);
      return () => window.clearTimeout(timeout);
    }

    if (deleting && charIndex === 0) {
      const timeout = window.setTimeout(() => {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      }, 350);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(
      () => setCharIndex((index) => index + (deleting ? -1 : 1)),
      deleting ? 38 : 82,
    );
    return () => window.clearTimeout(timeout);
  }, [charIndex, deleting, reducedMotion, wordIndex, words]);

  const currentWord = words[wordIndex] ?? "";
  const visible = reducedMotion ? firstWord : currentWord.slice(0, charIndex);

  return (
    <span className="inline-flex items-baseline">
      <span aria-hidden="true">{visible}</span>
      {!reducedMotion ? (
        <span
          aria-hidden="true"
          className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-brand-light align-baseline"
        />
      ) : null}
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}

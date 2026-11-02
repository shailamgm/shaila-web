import ca from "@/dictionaries/ca.json";
import en from "@/dictionaries/en.json";
import es from "@/dictionaries/es.json";

import { LOCALES, type Locale } from "./types";

/**
 * `es.json` es la referencia: define las claves del diccionario.
 *
 * Si a `ca.json` o `en.json` les falta una clave, TypeScript falla en el
 * tipado de `dictionaries` y el build no pasa: no se puede publicar una
 * traducción incompleta.
 */
export type Dictionary = typeof es;

const dictionaries: Record<Locale, Dictionary> = { es, ca, en };

/** Idiomas disponibles, en el orden del selector. */
export const locales: readonly Locale[] = LOCALES;

export const hasLocale = (value: string): value is Locale =>
  Object.hasOwn(dictionaries, value);

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

export { dictionaries };

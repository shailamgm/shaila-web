import { LOCALES, type Locale, type Localized } from "./types";

/**
 * Identidad y datos técnicos del sitio.
 *
 * `null` = pendiente de confirmar: no se publica ni se renderiza.
 */
export const site = {
  name: "Shaila Martínez",
  monogram: "SM",

  /** Dominio definitivo. Sin él, `metadataBase` queda sin definir. */
  url: null,

  /** Idioma por defecto: `/` redirige a `/es` mediante `proxy.ts`. */
  locales: LOCALES,
  defaultLocale: "es" as Locale,

  languageNames: {
    es: "Español",
    ca: "Català",
    en: "English",
  } satisfies Localized<string>,

  /** Rol profesional confirmado. */
  role: {
    es: "Sistemas y Soporte IT",
    ca: "Sistemes i Suport IT",
    en: "Systems and IT Support",
  } satisfies Localized<string>,

  /** Correo público. Publicación autorizada expresamente por Shaila. */
  email: "shailamgm07@gmail.com",

  /** Teléfono público. Publicación autorizada expresamente por Shaila. */
  phone: "+34 691 24 08 46",

  /** Ubicación: pendiente de confirmar si quieres mostrarla. */
  location: null,

  /** Foto real futura. Mientras sea `null`, se usa el monograma. */
  photo: null,

  /** CV descargable por idioma: pendiente. */
  cv: null,

  /** Perfiles externos: solo enlaces, sin conectar nada. */
  socials: {
    github: null,
    linkedin: "https://www.linkedin.com/in/shaila-martinez-gonzalez-de-molina",
  },

  /**
   * Formulario de contacto.
   *
   * Visible pero DESACTIVADO: todavía no hay proveedor elegido.
   * No se guardan identificadores de servicio ni variables de entorno.
   * Cuando exista un servicio real, se rellena `provider` + `endpoint`
   * y se cambia `enabled` a `true`.
   */
  form: {
    enabled: false,
    provider: null,
    endpoint: null,
  },
} as const;

export type Site = typeof site;

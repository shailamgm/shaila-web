/**
 * Tipos compartidos del modelo de contenido.
 *
 * Regla del proyecto: `null` significa "pendiente de confirmar".
 * Un campo pendiente no se renderiza nunca; no se usan textos de relleno.
 */

/** Idiomas soportados. El orden es el del selector de idioma. */
export const LOCALES = ["es", "ca", "en"] as const;

export type Locale = (typeof LOCALES)[number];

/** Texto (o lista) en los tres idiomas. */
export type Localized<T> = Record<Locale, T>;

/** Campo todavía sin contenido. */
export type Pending<T> = T | null;

/** Los trabajos son académicos: práctica o proyecto académico. Nunca "proyecto publicado". */
export type ProjectKind = "practica" | "proyecto";

export type ProjectStatus = "en-curso" | "finalizado" | "documentado";

export type EducationStatus = "en-curso" | "finalizado";

export type PracticeStatus = "en-curso" | "finalizado";

export type SkillGroup = {
  id: string;
  title: Localized<string>;
  /** Tecnologías trabajadas. Sin niveles, sin porcentajes y sin barras. */
  items: string[];
};

export type ProjectLinks = {
  demo: Pending<string>;
  repo: Pending<string>;
};

export type Project = {
  slug: string;
  kind: ProjectKind;
  title: Localized<string>;
  summary: Pending<Localized<string>>;
  highlights: Pending<Localized<string[]>>;
  stack: string[];
  status: Pending<ProjectStatus>;
  links: ProjectLinks;
  image: Pending<string>;
};

export type PracticeEntry = {
  id: string;
  /** Nombre del centro/empresa o etiqueta pública ("Entorno hospitalario"). */
  organization: Localized<string>;
  role: Pending<Localized<string>>;
  period: Pending<Localized<string>>;
  status: Pending<PracticeStatus>;
  description: Pending<Localized<string>>;
  tasks: Pending<Localized<string[]>>;
};

export type EducationEntry = {
  id: string;
  title: Localized<string>;
  center: Pending<string>;
  period: Pending<Localized<string>>;
  status: EducationStatus;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  year: Pending<string>;
};

export type ContentMeta = {
  title: string;
  description: string;
  keywords: string[];
};

export type HeroContent = {
  greeting: string;
  /** Textos que rotan en el efecto de escritura. */
  roles: string[];
  intro: Pending<string>;
};

export type AboutFact = {
  label: string;
  value: Pending<string>;
};

export type AboutContent = {
  paragraphs: Pending<string[]>;
  facts: AboutFact[];
};

export type SkillsContent = {
  intro: Pending<string>;
  groups: SkillGroup[];
};

export type ProjectsContent = {
  intro: Pending<string>;
  items: Project[];
};

export type ExperienceContent = {
  intro: Pending<string>;
  practice: PracticeEntry[];
  education: EducationEntry[];
  certifications: Certification[];
};

export type ContactContent = {
  intro: Pending<string>;
};

export type Content = {
  meta: ContentMeta;
  hero: HeroContent;
  about: AboutContent;
  skills: SkillsContent;
  projects: ProjectsContent;
  experience: ExperienceContent;
  contact: ContactContent;
};

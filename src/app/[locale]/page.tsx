import { notFound } from "next/navigation";

import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";
import { getContent } from "@/lib/content";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { site } from "@/lib/site";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  const content = getContent(locale);
  const dict = getDictionary(locale);

  const languageOptions = site.locales.map((code) => ({
    code,
    label: site.languageNames[code],
  }));

  return (
    <>
      <a href="#main" className="skip-link">
        {dict.a11y.skipToContent}
      </a>

      <SiteHeader
        locale={locale}
        dict={dict}
        name={site.name}
        monogram={site.monogram}
        languageOptions={languageOptions}
      />

      <main id="main" tabIndex={-1} className="flex-1">
        <Hero
          locale={locale}
          content={content}
          name={site.name}
          monogram={site.monogram}
          role={site.role[locale]}
          dict={dict.hero}
        />

        <About content={content} title={dict.sections.about} />

        <Skills
          content={content}
          locale={locale}
          title={dict.sections.skills}
        />

        <Projects
          content={content}
          locale={locale}
          title={dict.sections.projects}
          labels={{
            ...dict.projects,
            externalLink: dict.a11y.externalLink,
          }}
        />

        <Experience
          content={content}
          locale={locale}
          title={dict.sections.experience}
          labels={dict.experience}
        />

        <Contact
          title={dict.sections.contact}
          intro={content.contact.intro}
          email={site.email}
          phone={site.phone}
          linkedin={site.socials.linkedin}
          labels={{
            ...dict.contact,
            externalLink: dict.a11y.externalLink,
          }}
        />
      </main>

      <Footer
        name={site.name}
        monogram={site.monogram}
        rights={dict.footer.rights}
        builtWith={dict.footer.builtWith}
      />
    </>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";

import { getContent } from "@/lib/content";
import { hasLocale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { LOCALES, type Locale } from "@/lib/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const openGraphLocales: Record<Locale, string> = {
  es: "es_ES",
  ca: "ca_ES",
  en: "en_US",
};

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};

  const content = getContent(locale);

  return {
    title: content.meta.title,
    description: content.meta.description,
    keywords: content.meta.keywords,
    openGraph: {
      type: "website",
      siteName: site.name,
      title: content.meta.title,
      description: content.meta.description,
      locale: openGraphLocales[locale],
      alternateLocale: LOCALES.filter((item) => item !== locale).map(
        (item) => openGraphLocales[item],
      ),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-night font-sans text-fg antialiased">
        {children}
      </body>
    </html>
  );
}

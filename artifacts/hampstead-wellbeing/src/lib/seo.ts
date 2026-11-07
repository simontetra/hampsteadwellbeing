import { directoryCategories, providersIn } from "@/data/wellbeingDirectory";

export const SITE_URL = "https://www.hampsteadwellbeing.com";
const SITE_NAME = "Hampstead Wellbeing";

export interface PageMeta {
  path: string;
  title: string;
  description: string;
}

const staticPages: PageMeta[] = [
  {
    path: "/",
    title: "Hampstead Wellbeing | Wellbeing Directory for Yoga, Pilates, Meditation & Fitness",
    description:
      "A curated wellbeing directory of yoga, Pilates, meditation and fitness providers across the UK, plus online classes and apps you can use anywhere, women's yoga retreats and corporate wellness.",
  },
  {
    path: "/directory",
    title: "Wellbeing Directory: Yoga, Pilates, Meditation & Fitness | Hampstead Wellbeing",
    description:
      "Browse our curated directory of yoga studios, yoga teachers, Pilates, meditation and fitness providers across the UK, and online options you can use anywhere, with locations, price levels and links.",
  },
  {
    path: "/corporate-wellness",
    title: "Corporate Wellness Programmes | Hampstead Wellbeing",
    description:
      "Tailored workplace wellbeing for teams and organisations: breathwork, stress reduction, mindfulness and resilience sessions to help prevent burnout.",
  },
  {
    path: "/mindfulness",
    title: "Mindfulness, Meditation & Nervous System Regulation | Hampstead Wellbeing",
    description:
      "Mindfulness practices for everyday calm and clarity, including breathwork, meditation and nervous system regulation.",
  },
  {
    path: "/breathwork",
    title: "Breathwork: What It Is & Its Benefits | Hampstead Wellbeing",
    description:
      "What breathwork is, how the breath affects the nervous system, its benefits for stress, anxiety, sleep and focus, and what happens during a session.",
  },
  {
    path: "/team",
    title: "Our Team | Hampstead Wellbeing",
    description:
      "Meet the founders of Hampstead Wellbeing, committed to making wellness genuinely accessible to practitioners and the people they serve.",
  },
];

const categoryPages: PageMeta[] = directoryCategories.map((c) => ({
  path: `/directory/${c.slug}`,
  title: `${c.heading} | Hampstead Wellbeing Directory`,
  description: `${c.intro} ${providersIn(c.name).length} listings.`,
}));

/** Every page that is built as its own HTML file and listed in the sitemap. */
export const pages: PageMeta[] = [...staticPages, ...categoryPages];

export function pageMeta(path: string): PageMeta | undefined {
  const clean = path.length > 1 ? path.replace(/\/+$/, "") : path;
  return pages.find((p) => p.path === clean);
}

/** Pages are addressed with a trailing slash (/team/), which is how Render serves their files. */
export function canonicalUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}/`;
}

export const NOT_FOUND_META = {
  title: `Page not found | ${SITE_NAME}`,
  description: "This page could not be found.",
};

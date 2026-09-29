/**
 * ===== IMAGE FILE — every picture on the site is listed here =====
 * To swap a photo, change its `src` (a full URL, or a local path like
 * "/images/hero.jpg" once you've added the file to /public/images).
 * Nothing else in the codebase needs to change.
 */

export type SiteImage = { src: string; alt: string };

function placeholder(seed: string, w = 1200, h = 800): string {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

export const images = {
  heroHome: {
    src: "/images5.jpeg",
    alt: "Refinery plant at dusk",
  },
  introHome: {
    src: "/images12.jpeg",
    alt: "Crude oil storage tanks",
  },
  aboutStory: {
    src: "/images13.jpeg",
    alt: "Refinery control room",
  },
  serviceRefining: {
    src: "/images6.jpeg",
    alt: "Distillation towers",
  },
  serviceDistribution: {
    src: "/images7.jpeg",
    alt: "Fuel tanker truck",
  },
  serviceExploration: {
    src: "/images16.jpeg",
    alt: "Offshore oil platform",
  },
  pillarSafety: {
    src: "/images14.jpeg",
    alt: "Worker in safety equipment",
  },
  pillarEnvironment: {
    src: "/images10.jpeg",
    alt: "Environmental monitoring",
  },
  pillarQuality: {
    src: "/images9.jpeg",
    alt: "Laboratory quality testing",
  },
  processBand: {
    src: "/images15.jpeg",
    alt: "Oil tanker at port",
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;

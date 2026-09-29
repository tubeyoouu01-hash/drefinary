export type ServiceId = "refining" | "distribution" | "exploration";
export type PillarId = "safety" | "environment" | "quality";

// Images for these live in src/lib/images.ts (serviceRefining, pillarSafety, etc.)
export const services: { id: ServiceId; icon: string }[] = [
  { id: "refining", icon: "Factory" },
  { id: "distribution", icon: "Truck" },
  { id: "exploration", icon: "Compass" },
];

export const pillars: { id: PillarId; icon: string }[] = [
  { id: "safety", icon: "HardHat" },
  { id: "environment", icon: "Leaf" },
  { id: "quality", icon: "BadgeCheck" },
];

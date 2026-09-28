export type ServiceId = "refining" | "distribution" | "exploration";
export type PillarId = "safety" | "environment" | "quality";

export const services: { id: ServiceId; icon: string; seed: string ,image:string}[] = [
  { id: "refining", icon: "Factory", seed: "refinery-distillation-towers",
    image:"/download5.jpeg"
   },
  { id: "distribution", icon: "Truck", seed: "fuel-tanker-truck-logistics",    image:"/images7.jpeg"
    
  },
  { id: "exploration", icon: "Compass", seed: "offshore-oil-platform"

   , image:"/images8.jpeg"
   },
];

export const pillars: { id: PillarId; icon: string; seed: string }[] = [
  { id: "safety", icon: "HardHat", seed: "refinery-worker-safety-ppe" },
  { id: "environment", icon: "Leaf", seed: "refinery-green-environment" },
  { id: "quality", icon: "BadgeCheck", seed: "refinery-lab-quality-testing" },
];

export function seedImage(seed: string, w = 1200, h = 800) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

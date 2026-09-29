export type WhyId = "directness" | "logistics" | "reach" | "safety";

// Icons only — title/body text is translated and lives in each dictionary's home.whyItems
export const whyChooseUs: { id: WhyId; icon: string }[] = [
  { id: "directness", icon: "Handshake" },
  { id: "logistics", icon: "CalendarClock" },
  { id: "reach", icon: "Globe2" },
  { id: "safety", icon: "ShieldCheck" },
];

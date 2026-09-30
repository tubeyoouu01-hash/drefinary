import { Fuel } from "lucide-react";
import { SITE_SHORT_NAME } from "@/lib/site-config";

/**
 * ===== LOGO FILE — swap this to rebrand =====
 * Placeholder mark: white badge, thin red ring, ink-colored icon —
 * deliberately NOT filled with the brand blue. To use a real logo,
 * replace the <span> below with <Image src="/logo.svg" ... /> (drop
 * your file in /public) or paste your own SVG here. Header and footer
 * both render this one component, so this is the only file to edit.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={`flex items-center justify-center rounded-full bg-white border-2 border-red text-ink ${className ?? "h-10 w-10"}`}
      aria-label={`${SITE_SHORT_NAME} logo placeholder`}
    >
      <Fuel className="h-[52%] w-[52%]" strokeWidth={2.25} />
    </span>
  );
}

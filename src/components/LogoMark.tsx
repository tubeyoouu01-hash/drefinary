import { Fuel } from "lucide-react";
import { SITE_SHORT_NAME } from "@/lib/site-config";
import Image from "next/image";

/**
 * ===== LOGO FILE — swap this to rebrand =====
 * Placeholder mark: a plain lucide icon in a blue badge with a thin red ring.
 * To use a real logo: replace the <span> below with an <Image src="/logo.svg" ... />
 * (drop your file in /public) or paste your SVG here. Every place the logo
 * appears on the site (header, footer) renders this one component.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <img
    alt="logo"
    // width={12}
    height={12}
    src="/Dangote-Petroleum-Refnery-logo-scaled.png"
      className={`flex items-center justify-center rounded-full 

        text-white ring-2 ring-red/80 ring-offset-2 ring-offset-white ${className ?? "h-10 w-10"}`}
      aria-label={`${SITE_SHORT_NAME} logo placeholder`}
    />
 
    // <span
    //   className={`flex items-center justify-center rounded-full bg-blue text-white ring-2 ring-red/80 ring-offset-2 ring-offset-white ${className ?? "h-10 w-10"}`}
    //   aria-label={`${SITE_SHORT_NAME} logo placeholder`}
    // >
    //   <Fuel className="h-[55%] w-[55%]" strokeWidth={2} />
    // </span>
  );
}

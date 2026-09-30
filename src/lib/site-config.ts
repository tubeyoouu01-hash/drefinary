/**
 * Site-wide constants.
 *
 * Every piece of "dynamic" identity data — name, domain, contact details,
 * socials, founding year — lives here and ONLY here. Nothing below should
 * ever be hardcoded again in a component or a dictionary file.
 *
 * To reskin this project for a real company: edit this file. That's it.
 */

export const SITE_NAME = "Dangote Refinery";
export const SITE_SHORT_NAME = "Dangote";
export const SITE_SUFFIX = "Refinery";
export const SITE_DOMAIN = "sales.enquiry@dangote.com";

export const CONTACT_EMAIL = `sales.enquiry@dangote.com`;
export const CONTACT_PHONE_DISPLAY = "+234 707 470 2100";
export const CONTACT_PHONE_HREF = "+2348055501234"; // for tel: links

export const OFFICE_ADDRESS_LINE = "Lekki Free Trade Zone, ";
export const OFFICE_CITY_LINE = "Ibeju Lekki, Lagos, Nigeria";
export const OFFICE_FULL_ADDRESS = `${OFFICE_ADDRESS_LINE}, ${OFFICE_CITY_LINE}`;

export const COMPANY_FOUNDED_YEAR = 20206;

export type SocialPlatform = "youtube" | "facebook" | "linkedin" | "x" | "instagram";

export const SOCIAL_LINKS: { platform: SocialPlatform; name: string; href: string }[] = [
  { platform: "youtube", name: "YouTube", href: "https://www.youtube.com/@DangoteGroup?sub_confirmation=1" },
  { platform: "facebook", name: "Facebook", href: "facebook.com/dangotegroup" },
  { platform: "linkedin", name: "LinkedIn", href: "https://ng.linkedin.com/company/dangotegroup" },
  { platform: "x", name: "X", href: "https://x.com/DangoteGroup?lang=en" },
  { platform: "instagram", name: "Instagram", href: "https://www.instagram.com/dangotegroup/?hl=en" },
];

/**
 * Notes for whoever configures this for a live deployment:
 * - SITE_DOMAIN currently uses the .example TLD (reserved for docs/testing per RFC 2606) — replace with your real domain
 * - CONTACT_PHONE_DISPLAY is a placeholder number — replace with a real, dialable line
 * - SOCIAL_LINKS all point to "#" — replace with real profile URLs
 * - about.licenseNote in each dictionary file contains a "[Permit Number]" placeholder — replace with your real operating/refining license number, or remove if not applicable in your jurisdiction
 */

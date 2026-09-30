/**
 * ===== LEADERSHIP FILE — one place for the CEO's identity data =====
 * Name and (optional) photo are NOT translated content, so they live here
 * once instead of being duplicated across every dictionary file. The
 * title and quote (which ARE translated) live in about.ceoTitle /
 * about.ceoQuote in each dictionary under src/lib/dictionaries/.
 *
 * This is placeholder data for a portfolio/template build — not a real person.
 *
 * To add a real photo later: put the file in /public/team/ and set
 * avatarImage below, e.g. { src: "/team/ceo.jpg", alt: "Jane Doe" }.
 * Leave it null to keep the initials-only placeholder avatar.
 */
export const CEO_NAME = "Aliko Dangote";
export const CEO_INITIALS = "EC";
export const CEO_AVATAR_IMAGE: { src: string; alt: string } | null = {
    src:"/gettyimages-2271099499-612x612.jpg",alt :"dangote"
};

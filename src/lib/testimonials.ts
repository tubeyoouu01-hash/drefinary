export type TestimonialPerson = {
  /** Dummy name — for portfolio/demo purposes, not a real person. */
  name: string;
  /** ISO 3166-1 alpha-2 country code, localized at render time via Intl.DisplayNames. */
  countryCode: string;
};

// Order must match home.testimonials in every dictionary file.
export const testimonialPeople: TestimonialPerson[] = [
  { name: "Chidi Okonkwo", countryCode: "NG" },
  { name: "Fatima Al-Sayed", countryCode: "AE" },
  { name: "Johan van der Merwe", countryCode: "ZA" },
];

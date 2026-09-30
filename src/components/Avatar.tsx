import Image from "next/image";

/**
 * Person avatar. Pass `image` to show a real photo (once one exists —
 * see CEO_AVATAR_IMAGE in src/lib/leadership.ts); otherwise it falls back
 * to a generic initials badge. Never substitute a stock photo of someone
 * unrelated to the company for a real person's photo.
 */
export function Avatar({
  initials,
  image,
  className,
}: {
  initials: string;
  image?: { src: string; alt: string } | null;
  className?: string;
}) {
  const size = className ?? "h-20 w-20 text-2xl";

  if (image) {
    return (
      <span className={`relative block overflow-hidden rounded-full border-2 border-blue/30 ${size}`}>
        <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="200px" />
      </span>
    );
  }

  return (
    <span
      className={`flex items-center justify-center rounded-full bg-blue-tint border-2 border-blue/30 text-blue-deep font-display font-bold ${size}`}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}

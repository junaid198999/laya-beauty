import Image from "next/image";
import Link from "next/link";

type ProductBannerProps = {
  src: string;
  alt: string;
  href?: string;
  priority?: boolean;
};

/**
 * Full-width designed banner. Copy lives inside the image.
 * Scales by height with the viewport width - never crops, never overlays text.
 */
export function ProductBanner({
  src,
  alt,
  href,
  priority = false,
}: ProductBannerProps) {
  const image = (
    <Image
      src={src}
      alt={alt}
      width={1024}
      height={576}
      priority={priority}
      className="h-auto w-full"
      sizes="100vw"
    />
  );

  if (href) {
    return (
      <Link href={href} className="block w-full bg-cream" aria-label={alt}>
        {image}
      </Link>
    );
  }

  return <div className="w-full bg-cream">{image}</div>;
}

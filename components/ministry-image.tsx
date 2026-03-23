import Image from "next/image"
import type { Ministry } from "@/lib/ministries"

interface MinistryImageProps {
  ministry: Ministry
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
}

export function MinistryImage({
  ministry,
  alt,
  className = "h-full w-full object-cover",
  priority = false,
  sizes = "100vw",
}: MinistryImageProps) {
  const responsive = ministry.responsiveImages

  if (responsive) {
    const mobileSrc = responsive.mobile ?? ministry.image
    const tabletSrc = responsive.tablet ?? responsive.desktop ?? ministry.image
    const desktopSrc = responsive.desktop ?? responsive.tablet ?? ministry.image

    return (
      <picture>
        <source media="(min-width: 1024px)" srcSet={desktopSrc} />
        <source media="(min-width: 640px)" srcSet={tabletSrc} />
        <img
          src={mobileSrc}
          alt={alt}
          className={className}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      </picture>
    )
  }

  return (
    <Image
      src={ministry.image}
      alt={alt}
      fill
      className={className}
      priority={priority}
      sizes={sizes}
    />
  )
}

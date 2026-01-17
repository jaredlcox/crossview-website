import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

interface MediaTeaserProps {
  title?: string
  description?: string
  image?: string
  href?: string
}

export function MediaTeaser({
  title = "Featured Message",
  description = "A short excerpt from recent preaching.",
  image = "/church-sermon-pastor-preaching.jpg",
  href = "/contact",
}: MediaTeaserProps) {
  return (
    <Link href={href} className="block relative overflow-hidden rounded-xl group">
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt="Recent sermon"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#1E3D42]/50" />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F1802C] text-white transition-transform group-hover:scale-110">
            <Play className="h-7 w-7 ml-1" fill="white" />
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-serif text-xl font-bold">{title}</h3>
          <p className="mt-2 text-sm text-white/80 leading-relaxed">{description}</p>
          <p className="mt-3 text-sm font-medium text-white/90">View Sermons →</p>
        </div>
      </div>
    </Link>
  )
}

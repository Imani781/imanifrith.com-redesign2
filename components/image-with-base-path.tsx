"use client"

import Image from "next/image"

interface ImageWithBasePathProps {
  src: string
  alt: string
  fill: boolean
  className?: string
  priority?: boolean
}

export default function ImageWithBasePath({ src, alt, fill, className, priority }: ImageWithBasePathProps) {
  // Assuming basePath is already configured in next.config.js
  return <Image src={src || "/placeholder.svg"} alt={alt} fill={fill} className={className} priority={priority} />
}

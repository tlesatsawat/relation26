'use client'

import Image from 'next/image'

interface GalleryItemProps {
  item: {
    id: number
    title: string
    category: string
    date: string
    imageUrl: string
  }
  priority?: boolean
}

export default function GalleryItem({ item, priority = false }: GalleryItemProps) {
  return (
    <div className="group overflow-hidden">
      <div className="relative w-full overflow-hidden rounded-lg">
        <div className="aspect-[3/4] w-full relative">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-1000 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-110"
            priority={priority}
          />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-light text-luxury-black font-serif-display">{item.title}</h3>
        <div className="flex justify-between mt-1">
          <span className="text-sm font-light text-gray-600 font-sans-thin uppercase tracking-wider">{item.category}</span>
          <span className="text-sm font-light text-gray-600 font-sans-thin">{item.date}</span>
        </div>
      </div>
    </div>
  )
}
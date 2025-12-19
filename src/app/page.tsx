'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import GalleryItem from '@/components/GalleryItem'
import LoadingSkeleton from '@/components/LoadingSkeleton'
import { GalleryItem as GalleryItemType, getGalleryItems } from '@/lib/cms'

export default function Home() {
  const [galleryItems, setGalleryItems] = useState<GalleryItemType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGalleryItems()
        setGalleryItems(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching gallery items:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-widest text-luxury-black font-serif-display mb-4">
            RELATION 26
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-600 font-sans-thin max-w-2xl mx-auto">
            Luxury minimalist photography capturing the essence of contemporary life
          </p>
        </div>

        {/* Magazine-style Masonry Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Show loading skeletons while data is loading
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <LoadingSkeleton />
              </div>
            ))
          ) : (
            // Show gallery items when data is loaded
            <>
              {galleryItems.map((item, index) => (
                <div key={item.id} className="break-inside-avoid mb-8">
                  <GalleryItem item={item} priority={index < 3} />
                </div>
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  )
}
// CMS integration handler
// Will be implemented with Sanity.io or Supabase

export interface GalleryItem {
  id: number
  title: string
  category: string
  date: string
  imageUrl: string
}

// Import the CMS integrations
import { getSanityGalleryItems } from '@/lib/sanity'
import { getSupabaseGalleryItems } from '@/lib/supabase'

// Determine which CMS to use based on environment variables
const CMS_TYPE = process.env.NEXT_PUBLIC_CMS_TYPE || 'mock'

// Fetch gallery items based on CMS type
export const getGalleryItems = async (): Promise<GalleryItem[]> => {
  try {
    switch (CMS_TYPE) {
      case 'sanity':
        return await getSanityGalleryItems()
      case 'supabase':
        return await getSupabaseGalleryItems()
      default:
        // Return mock data as fallback
        return [
          {
            id: 1,
            title: 'Urban Landscapes',
            category: 'Architecture',
            date: '2023-10-15',
            imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          },
          {
            id: 2,
            title: 'Natural Light Portraits',
            category: 'Portraits',
            date: '2023-09-22',
            imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
          },
          {
            id: 3,
            title: 'Minimalist Fashion',
            category: 'Fashion',
            date: '2023-11-05',
            imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
          },
          {
            id: 4,
            title: 'Abstract Textures',
            category: 'Fine Art',
            date: '2023-08-17',
            imageUrl: 'https://images.unsplash.com/photo-1546387903-6d82d96ccca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          },
          {
            id: 5,
            title: 'Coastal Serenity',
            category: 'Landscape',
            date: '2023-07-30',
            imageUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
          },
          {
            id: 6,
            title: 'Black & White Studies',
            category: 'Street',
            date: '2023-12-01',
            imageUrl: 'https://images.unsplash.com/photo-1516726817505-5a0fc0ee6c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
          },
        ]
    }
  } catch (error) {
    console.error('Error fetching gallery items:', error)
    // Return mock data as fallback
    return [
      {
        id: 1,
        title: 'Urban Landscapes',
        category: 'Architecture',
        date: '2023-10-15',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 2,
        title: 'Natural Light Portraits',
        category: 'Portraits',
        date: '2023-09-22',
        imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      },
      {
        id: 3,
        title: 'Minimalist Fashion',
        category: 'Fashion',
        date: '2023-11-05',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
      },
      {
        id: 4,
        title: 'Abstract Textures',
        category: 'Fine Art',
        date: '2023-08-17',
        imageUrl: 'https://images.unsplash.com/photo-1546387903-6d82d96ccca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      },
      {
        id: 5,
        title: 'Coastal Serenity',
        category: 'Landscape',
        date: '2023-07-30',
        imageUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      },
      {
        id: 6,
        title: 'Black & White Studies',
        category: 'Street',
        date: '2023-12-01',
        imageUrl: 'https://images.unsplash.com/photo-1516726817505-5a0fc0ee6c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      },
    ]
  }
}
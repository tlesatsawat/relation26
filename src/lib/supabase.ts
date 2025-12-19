// Placeholder for Supabase integration
// This file will be implemented when Supabase is set up

import { GalleryItem } from '@/lib/cms'

// Schema definition for Supabase
/*
  Gallery Table Schema:
  - id: UUID (Primary Key)
  - image_url: TEXT
  - title: TEXT
  - category: TEXT
  - date: DATE
*/

// Function to fetch gallery items from Supabase (to be implemented)
export const getSupabaseGalleryItems = async (): Promise<GalleryItem[]> => {
  // This will be implemented when Supabase is connected
  // For now, return mock data
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
# Relation 26 Photography Portfolio

A luxury minimalist photography portfolio showcasing professional work with elegant design and smooth interactions.

## Features

- Luxury minimalist design aesthetic
- Masonry grid gallery layout
- Responsive design for all devices
- Image hover effects (grayscale to color + zoom)
- CMS integration ready (Sanity.io/Supabase)
- Loading skeletons for better UX

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React
- Sanity.io/Supabase (CMS - to be implemented)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── page.tsx         # Home page
│   ├── layout.tsx       # Root layout
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Navbar.tsx       # Navigation bar
│   ├── GalleryItem.tsx  # Gallery item component
│   └── LoadingSkeleton.tsx # Loading skeleton
└── lib/                 # Data fetching & utilities
    └── cms.ts           # CMS integration
```

## Design Elements

- **Typography**: Playfair Display (serif) for headings, Helvetica Neue (sans-serif) for body text
- **Color Palette**: Off-white (#fafafa) and luxury black (#1a1a1a)
- **Layout**: Masonry grid gallery with ample whitespace
- **Image Effects**: Grayscale to color transition with slow zoom on hover (1000ms duration)

## Deployment

This project is ready for deployment to Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

## Future Enhancements

- Full CMS integration with Sanity.io or Supabase
- Advanced filtering by category
- Lightbox gallery view
- Contact form integration
- SEO optimization
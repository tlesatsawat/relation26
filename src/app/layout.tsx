import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Relation 26 | Professional Photography',
  description: 'Luxury minimalist photography portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
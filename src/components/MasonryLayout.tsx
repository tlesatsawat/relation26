'use client'

import { ReactNode } from 'react'

interface MasonryLayoutProps {
  children: ReactNode[]
  columnCount?: number
}

export default function MasonryLayout({ 
  children, 
  columnCount = 3 
}: MasonryLayoutProps) {
  // Create columns array
  const columns = Array.from({ length: columnCount }, () => [])
  
  // Distribute children across columns
  children.forEach((child, index) => {
    columns[index % columnCount].push(child)
  })

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-${columnCount} gap-8`}>
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="grid gap-8">
          {column.map((child, childIndex) => (
            <div key={childIndex} className="break-inside-avoid">
              {child}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
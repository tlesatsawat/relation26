'use client'

import { ReactNode } from 'react'

interface MasonryGridProps {
  children: ReactNode
  columns?: number
}

export default function MasonryGrid({ children, columns = 3 }: MasonryGridProps) {
  return (
    <div 
      className="grid gap-8"
      style={{ 
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridAutoRows: '10px'
      }}
    >
      {children}
    </div>
  )
}
'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="py-6 px-4 md:px-8 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-widest text-luxury-black font-serif-display">
          RELATION 26
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-sm font-light text-luxury-black hover:opacity-70 transition-opacity font-sans-thin">
            Gallery
          </a>
          <a href="#" className="text-sm font-light text-luxury-black hover:opacity-70 transition-opacity font-sans-thin">
            About
          </a>
          <a href="#" className="text-sm font-light text-luxury-black hover:opacity-70 transition-opacity font-sans-thin">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-luxury-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4 px-4">
            <a 
              href="#" 
              className="text-sm font-light text-luxury-black hover:opacity-70 transition-opacity font-sans-thin"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="#" 
              className="text-sm font-light text-luxury-black hover:opacity-70 transition-opacity font-sans-thin"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#" 
              className="text-sm font-light text-luxury-black hover:opacity-70 transition-opacity font-sans-thin"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
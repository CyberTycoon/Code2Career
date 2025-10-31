"use client"

import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-lg text-primary hidden sm:inline">Coding2Career</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#mission" className="text-foreground hover:text-primary transition-colors">
            Mission
          </Link>
          <Link href="#programs" className="text-foreground hover:text-primary transition-colors">
            Programs
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-3">
            <Link href="#mission" className="block text-foreground hover:text-primary transition-colors">
              Mission
            </Link>
            <Link href="#programs" className="block text-foreground hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="#contact" className="block text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

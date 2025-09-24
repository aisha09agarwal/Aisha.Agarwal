"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="sr-only">Home</span>
          Aisha Agarwal
        </Link>
        <nav className="flex items-center gap-6">
          <a href="#experience" className="text-sm opacity-80 hover:opacity-100">
            Experience
          </a>
          <a href="#skills" className="text-sm opacity-80 hover:opacity-100">
            Skills
          </a>
          <a href="#contact" className="text-sm opacity-80 hover:opacity-100">
            Contact
          </a>
          <a href="#certifications" className="text-sm opacity-80 hover:opacity-100">
            Certifications
          </a>
          <a href="#education" className="text-sm opacity-80 hover:opacity-100">
            Education
          </a>
          <Button asChild size="sm" className="ml-2">
            <a href="#contact">Work with me</a>
          </Button>
        </nav>
      </div>
    </header>
  )
}

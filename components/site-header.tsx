"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link href="/" className="font-semibold tracking-tight">
          <span className="sr-only">Home</span>
          Aisha Agarwal
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
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

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-6">
            <nav className="flex flex-col gap-4 mt-8">
              <a href="#experience" className="text-sm">Experience</a>
              <a href="#skills" className="text-sm">Skills</a>
              <a href="#contact" className="text-sm">Contact</a>
              <a href="#certifications" className="text-sm">Certifications</a>
              <a href="#education" className="text-sm">Education</a>
              <Button asChild size="sm" className="mt-4">
                <a href="#contact">Work with me</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

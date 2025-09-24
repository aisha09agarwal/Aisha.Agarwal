import { Certifications } from "@/components/sections/Certifications"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/sections/hero"
import { Education } from "@/components/sections/education"
import { Experience } from "@/components/sections/experience"
import { Skills } from "@/components/sections/skills"
import { Contact } from "@/components/sections/contact"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Experience />
      <Skills/>
      <Certifications />
      <Education />
      <Contact />
      <footer className="mx-auto mt-12 max-w-6xl px-4 pb-10 text-sm opacity-70 md:px-6">
        © {new Date().getFullYear()} Aisha Agarwal
      </footer>
    </main>
  )
}

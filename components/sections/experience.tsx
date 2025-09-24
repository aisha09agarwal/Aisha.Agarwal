import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const fullTimeBullets = [
    "Delivered Flow automations & DAG Batch Apex for Q2 Collections, reducing manual follow-ups by 40%.",
    "Built Salesforce ↔ FormAssembly integrations, cutting manual data entry by 95% and saving 14 mins/lead.",
    "Developed Service Cloud from scratch with LWC & workflow automation, boosting revenue 20% & speeding case resolution 35%.",
    "Configured Marketing Cloud campaigns, improving email open rates 18% & CTR 12%.",
    "Collaborated in Agile sprints, producing docs, demo videos, and delivering features on time with zero issues.",
  ]

  const apprenticeshipBullets = [
    "Gained hands-on experience with Salesforce Lending Cloud objects, fields, and relationships.",
    "Explored Q2 product workflows, contributing to client service automation via Originate and Loan processes.",
    "Developed Flows, Triggers, and Batch Apex to streamline processes, improving efficiency and accuracy.",
    "Actively applied Salesforce admin skills, demonstrating rapid learning and practical problem-solving.",
  ]

  return (
    <section id="experience" className="mx-auto mt-12 max-w-6xl px-4 md:mt-16 md:px-6">
      <div className="mb-4 md:mb-6">
        <h2 className="text-balance text-2xl font-semibold md:text-3xl">Professional Experience</h2>
      </div>

      {/* Full-time Experience Card */}
      <Card className="rounded-xl mb-6">
        <CardHeader>
          <CardTitle className="text-pretty text-xl">
            Cloudkaptan Consultancy Services — Software Engineer Trainee
          </CardTitle>
          <CardDescription>07/2024 – 08/2025 · Kolkata, India</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge className="rounded-full bg-primary text-primary-foreground">Deployment cycles ↓ 75%</Badge>
            <Badge className="rounded-full bg-primary text-primary-foreground">Marketing email engagement ↑ 18%</Badge>
          </div>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {fullTimeBullets.map((b) => (
              <li key={b} className="rounded-md border bg-card px-3 py-2 text-sm">
                {b}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Apprenticeship Card */}
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle className="text-pretty text-xl">
            Cloudkaptan Consultancy Services — Apprenticeship
          </CardTitle>
          <CardDescription>06/2024 – 07/2024 · Kolkata, India</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge className="rounded-full bg-secondary text-secondary-foreground">Learning & Hands-on</Badge>
            <Badge className="rounded-full bg-secondary text-secondary-foreground">Salesforce Automation</Badge>
          </div>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {apprenticeshipBullets.map((b) => (
              <li key={b} className="rounded-md border bg-card px-3 py-2 text-sm">
                {b}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
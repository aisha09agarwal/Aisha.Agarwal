import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const salesforce = [
    "LWC",
    "Apex",
    "SOQL",
    "Triggers",
    "Flows",
    "Service Cloud",
    "Marketing Cloud",
    "Experience Cloud",
    "Visualforce Page"
  ]
  const java = ["Java", "OOP", "DSA", "REST APIs", "JSON", "SQL"]
  const tools = ["Git", "GitHub", "Bitbucket", "Copado", "CI/CD",  "Agile/Scrum", "Confluence"]
  const frontend = ["HTML", "CSS", "Javascript", "SCSS"]

  const renderRow = (title: string, items: string[]) => (
    <Card className="rounded-xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {items.map((i) => (
          <Badge key={i} variant="secondary" className="rounded-full">
            {i}
          </Badge>
        ))}
      </CardContent>
    </Card>
  )

  return (
    <section id="skills" className="mx-auto mt-12 max-w-6xl px-4 md:mt-16 md:px-6">
      <h2 className="mb-4 text-2xl font-semibold md:mb-6 md:text-3xl">Core Skills</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {renderRow("Salesforce", salesforce)}
        {renderRow("Java & Backend", java)}
        {renderRow("Tools & Practices", tools)}
        {renderRow("Front-end",frontend)}
      </div>
    </section>
  )
}

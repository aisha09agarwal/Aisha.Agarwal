import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Education</h2>

      <Card className="rounded-xl overflow-hidden">
        <div className="pl-4 grid items-stretch md:grid-cols-2">
          {/* Left side image */}
          <div className="hidden md:block h-full w-full md:max-h-72">
            <img
              src="/images/aisha-college-image.png"
              alt="Dr. B. C. Roy Engineering College"
              className="h-full w-full object-cover rounded-l-xl"
            />
          </div>

          {/* Right side content */}
          <div className="p-6 md:p-8">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl md:text-2xl">
                Dr. B. C. Roy Engineering College
              </CardTitle>
              <CardDescription className="text-sm opacity-80">
                Computer Science & Engineering (2020-2024)
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 text-sm md:text-base text-gray-700">
              <p><strong>Duration:</strong> Nov 2020 – June 2024</p>
            </CardContent>
          </div>
        </div>
      </Card>
    </section>
  )
}

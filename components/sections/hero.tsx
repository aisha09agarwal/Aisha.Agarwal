"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-8 pt-10 md:flex md:items-center md:justify-between md:gap-10 md:px-6 md:pb-12 md:pt-16">
      <div className="max-w-xl">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="rounded-full">
            Salesforce
          </Badge>
          <Badge variant="secondary" className="rounded-full">
            Java
          </Badge>
          <Badge variant="secondary" className="rounded-full">
            Apex • LWC • Flow • Automations
          </Badge>
          <Badge variant="secondary" className="rounded-full">
            SQL • SOQL • PLSQL
          </Badge>
        </div>

        <h1 className="mt-4 text-pretty text-3xl font-semibold leading-tight md:text-5xl">
          JAVA Developer & Salesforce Automations
        </h1>
        <p className="mt-3 text-balance text-sm leading-relaxed opacity-80 md:text-base">
          1+ year implementing Salesforce and JAVA at a tech firm automating processes, reducing manual effort, enhancing efficiency and customer satisfaction at scale.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <a href="#experience">See Experience</a>
          </Button>
          <Button asChild variant="outline">
            <a href="#contact">Contact</a>
          </Button>
        </div>

        <dl className="mt-8 grid grid-cols-3 gap-4">
          <div>
            <dt className="text-xs opacity-70">Reduced Manual Process</dt>
            <dd className="text-2xl font-semibold text-primary">-75%</dd>
          </div>
          <div>
            <dt className="text-xs opacity-70">KPI Achievement</dt>
            <dd className="text-2xl font-semibold text-primary">120%</dd>
          </div>
          <div>
            <dt className="text-xs opacity-70">Queries resolved</dt>
            <dd className="text-2xl font-semibold text-primary">800+</dd>
          </div>
        </dl>
      </div>

      <div className="mt-8 w-full shrink-0 md:mt-0 md:w-[44%]">
        <div className="relative">
          <img
            src="/images/aisha-mountain-balcony.jpg"
            alt="Aisha Agarwal Image."
            className="md:max-h-[38rem] w-full rounded-xl border object-cover"
          />
          <div className="absolute -bottom-6 -left-6 hidden w-32 overflow-hidden rounded-lg border md:block">
            <img
              src="/images/aisha-golden-hour.png"
              alt="Aisha Agarwal Image."
              className="h-full w-full scale-180 translate-x-(-18) object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="mx-auto mt-12 max-w-6xl px-4 md:mt-16 md:px-6">
      <Card className="rounded-xl overflow-hidden">
        <div className="grid items-stretch md:grid-cols-2">
          <div className="p-6 md:p-8">
            <CardHeader className="p-0">
              <CardTitle className="text-2xl">Let’s Connect</CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-3 text-sm opacity-80">
              Interested in discussing new feature implementation and process automations? I'd love to hear from you.
            </CardContent>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="mailto:aisha02agarwal@gmail.com">Email</a>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:+918392043622">Call</a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://www.linkedin.com/in/aisha-agarwal-9640811a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="hidden md:block h-64 pr-6"> {/* h-64 = 16rem */}
            <img
              src="/images/aisha-office-atrium.png"
              alt="Aisha Agarwal Image."
              className="h-full w-full object-cover rounded-r-xl"
            />
          </div>
        </div>
      </Card>
    </section>
  )
}

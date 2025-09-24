export function ReferenceViewer() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <section className="mx-auto max-w-3xl p-6 md:p-10">
        <header className="mb-6">
          <h1 className="text-pretty text-2xl font-semibold tracking-tight">Reference Image Preview</h1>
          <p className="mt-2 text-sm opacity-80">
            This is the attached image you provided. If you meant to share a UI screenshot, please upload it and I will
            recreate it accurately.
          </p>
        </header>

        <div className="rounded-lg border bg-card p-2 shadow-sm">
          <img
            src="/images/reference.png"
            alt="Portrait photo outdoors with tall glass buildings in the background during golden hour."
            className="h-auto w-full rounded-md object-cover"
            loading="eager"
          />
        </div>
      </section>
    </main>
  )
}

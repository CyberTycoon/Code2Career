"use client"

export function Mission() {
  return (
    <section id="mission" className="bg-primary text-primary-foreground py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">The Mission</h2>
            <p className="text-xl opacity-90">Coding2Career: Bridging the Gap</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                At Coding2Career, we're on a mission to bridge the gap between tech learning and real-world
                employability.
              </p>
              <p className="text-lg leading-relaxed">
                We believe that coding is more than just writing lines of code—it's a pathway to innovation,
                independence, and impact.
              </p>
            </div>

            <div className="relative h-80 md:h-96">
              <div className="absolute inset-0 bg-white/10 rounded-3xl blur-2xl" />
              <img
                src="/professional-tech-workspace-mentorship.jpg"
                alt="Mission focus"
                className="relative w-full h-full object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

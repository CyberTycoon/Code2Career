"use client"

export function Programs() {
  const programs = [
    {
      title: "For Beginners",
      description: "Start your coding journey from scratch with our foundational programs",
      icon: "🚀",
    },
    {
      title: "For Students",
      description: "Enhance your skills and gain practical experience while studying",
      icon: "📚",
    },
    {
      title: "Career Changers",
      description: "Transition into tech with confidence and industry-ready skills",
      icon: "🎯",
    },
  ]

  return (
    <section id="programs" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Who Our Programs Are For</h2>
            <p className="text-lg text-foreground/80">
              Our programs are designed for beginners, students, and career changers who want to gain hands-on
              experience and confidently step into the world of technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <div className="text-4xl">{program.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">{program.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{program.description}</p>
                  <button className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Building the Next Generation</h3>
            <p className="text-foreground/80 leading-relaxed">
              Through training, community, and collaboration, Coding2Career is building the next generation of African
              tech talents—skilled, confident, and ready to lead the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

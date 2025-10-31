"use client"

export function LaunchCareer() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-96 md:h-full order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-3xl" />
            <img
              src="/career-growth-learning-development.jpg"
              alt="Launch your career"
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>

          <div className="space-y-8 order-1 md:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Launch Your Career</h2>
              <p className="text-2xl font-semibold text-accent">Learn. Build. Grow.</p>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Launch your tech career with Coding2Career. Our comprehensive programs are designed to equip you with
              practical skills, industry knowledge, and the confidence to succeed in the global tech space.
            </p>

            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
              Get Started Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

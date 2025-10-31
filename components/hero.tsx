"use client"

import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg">Hello World!</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                We are <span className="text-primary">Coding2Career</span>
              </h1>
              <p className="text-lg text-foreground/80">
                A University of Ibadan student-led tech community.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-lg font-semibold text-primary mb-2">Our mission is simple:</p>
                <p className="text-lg text-foreground">
                  Bridge the gap between tech learning and real-world employability
                </p>
              </div>

              <p className="text-base text-foreground/80 leading-relaxed">
                We train, mentor, and launch the careers of African tech talents, helping you confidently step into the
                global tech space.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold">
              Explore Our Journey
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl blur-3xl" />
            <img
              src="/tech-learning-community-diverse-team.jpg"
              alt="Coding2Career community"
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

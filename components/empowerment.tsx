"use client"

import Image from "next/image"

export function Empowerment() {
  return (
    <section className="bg-primary text-primary-foreground py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 ">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Our Empowerment Focus</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                We empower individuals with practical digital skills, mentorship, and career guidance to help them
                transition from learning to earning in the global tech space.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/30 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Practical Skills</h3>
                    <p className="text-primary-foreground/80">Hands-on training in modern tech stacks</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/30 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expert Mentorship</h3>
                    <p className="text-primary-foreground/80">Guidance from industry professionals</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/30 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Career Guidance</h3>
                    <p className="text-primary-foreground/80">Support to launch your tech career</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-80 md:h-120">
              <div className="absolute top-0 inset-0 bg-white/10 rounded-3xl blur-2xl " />
              <Image
                src="/empowerment-success-achievement-celebration.jpg"
                alt="Empowerment"
                className="relative w-full h-full object-cover rounded-3xl shadow-xl"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

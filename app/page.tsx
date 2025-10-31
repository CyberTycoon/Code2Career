import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Mission } from "@/components/mission"
import { LaunchCareer } from "@/components/launch-career"
import { Empowerment } from "@/components/empowerment"
import { Programs } from "@/components/programs"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Mission />
      <LaunchCareer />
      <Empowerment />
      <Programs />
      <Footer />
    </main>
  )
}

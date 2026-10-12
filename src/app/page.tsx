import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { Marquee } from '@/components/sections/marquee'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Stats } from '@/components/sections/stats'
import { Projects } from '@/components/sections/projects'
import { Experience } from '@/components/sections/experience'
import { Education } from '@/components/sections/education'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Stats />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

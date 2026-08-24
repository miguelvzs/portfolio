import { MotionConfig } from "framer-motion"
import { ThemeProvider } from "@/lib/theme"
import { ScrollProgress } from "@/components/scroll-progress"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Skills } from "@/components/sections/skills"
import { Credentials } from "@/components/sections/credentials"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"

export default function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <a
          href="#main-content"
          className="sr-only rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
        >
          Pular para o conteúdo
        </a>

        <ScrollProgress />
        <Navbar />

        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Credentials />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </MotionConfig>
    </ThemeProvider>
  )
}

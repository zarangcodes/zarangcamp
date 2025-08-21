import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { InitiativesSection } from "@/components/initiatives-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <InitiativesSection />
      <ManifestoSection />
      <FAQSection />
      <Footer />
    </main>
  )
}

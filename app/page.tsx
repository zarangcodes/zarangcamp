"use client";

import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { InitiativesSection } from "@/components/initiatives-section";
import { ManifestoSection } from "@/components/manifesto-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function Home() {
  const [isManifestoOpen, setIsManifestoOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <InitiativesSection />

      <ManifestoSection
        isOpen={isManifestoOpen}
        onClose={() => setIsManifestoOpen(false)}
      />

      <FAQSection />
      <Footer />
    </main>
  );
}

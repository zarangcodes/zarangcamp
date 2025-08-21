"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Linkedin, MessageCircle, Instagram, ChevronDown } from "lucide-react"
import { ManifestoSection } from "./manifesto-section"
import { SopSection } from "./sop-section"

export function HeroSection() {
  const [manifestoOpen, setManifestoOpen] = useState(false)
  const [sopOpen, setSopOpen] = useState(false)

  const scrollToInitiatives = () => {
    const initiativesSection = document.getElementById('initiatives-section')
    if (initiativesSection) {
      initiativesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen gradient-purple-dark flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Enhanced Floating Orbs with Better Animation */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-40 h-40 bg-gradient-to-r from-primary/25 to-accent/25 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Additional Subtle Elements */}
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-white/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Hero Text - Enhanced Handwritten Style */}
          <div className="mb-8 md:mb-12">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 md:mb-8 text-white leading-none" 
                style={{fontFamily: 'Dancing Script, cursive', transform: 'rotate(-1deg)', textShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>
              think big.
            </h1>
            
            {/* Enhanced Candidate Info */}
            <div className="mb-6 md:mb-8">
              <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white tracking-wide mb-2 md:mb-3 drop-shadow-lg" style={{fontFamily: 'Poppins, sans-serif'}}>Tarang Agrawal</h2>
              <p className="text-white/70 text-sm md:text-lg lg:text-xl font-mono tracking-wider mb-3 md:mb-4">2023A1PS0152P</p>
              <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-medium mb-2 md:mb-3" style={{fontFamily: 'Poppins, sans-serif'}}>Presidential Candidate, 2025 SU Elections</p>
              <p className="text-white/80 text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed px-4" style={{fontFamily: 'Poppins, sans-serif'}}>
                Revolutionary leadership for impactful change. From startup mindset to campus transformation.
              </p>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12 px-4">
            <Button 
              size="lg" 
              className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-6 md:px-10 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-base md:text-lg focus-ring relative z-10 w-full sm:w-auto"
              onClick={() => setManifestoOpen(true)}
              style={{fontFamily: 'Poppins, sans-serif'}}
            >
              View Manifesto
            </Button>
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-6 md:px-10 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-base md:text-lg focus-ring relative z-10 w-full sm:w-auto"
              onClick={scrollToInitiatives}
              style={{fontFamily: 'Poppins, sans-serif'}}
            >
              View Initiatives
            </Button>
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-6 md:px-10 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-base md:text-lg focus-ring relative z-10 w-full sm:w-auto"
              onClick={() => setSopOpen(true)}
              style={{fontFamily: 'Poppins, sans-serif'}}
            >
              Read SOP
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center gap-4 md:gap-6">
            <Button
              variant="ghost"
              size="sm"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/40 hover:scale-110 transition-all duration-300 rounded-full w-12 h-12 md:w-14 md:h-14 p-0 group focus-ring relative z-10"
              onClick={() => window.open('https://linkedin.com/in/tarangagrawal22', '_blank')}
            >
              <Linkedin className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform duration-300" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/40 hover:scale-110 transition-all duration-300 rounded-full w-12 h-12 md:w-14 md:h-14 p-0 group focus-ring relative z-10"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B919405906570&text&type=phone_number&app_absent=0', '_blank')}
            >
              <MessageCircle className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform duration-300" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/40 hover:scale-110 transition-all duration-300 rounded-full w-12 h-12 md:w-14 md:h-14 p-0 group focus-ring relative z-10"
              onClick={() => window.open('https://www.instagram.com/tar_ng_/', '_blank')}
            >
              <Instagram className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 md:gap-3 text-white/60 hover:text-white/80 transition-colors cursor-pointer group" onClick={scrollToInitiatives}>
          <span className="text-xs md:text-sm uppercase tracking-wider font-medium">Scroll</span>
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 animate-bounce group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>

      {/* Enhanced Corner Accents */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-white/5 to-transparent"></div>
      
      {/* Additional Corner Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/10 to-transparent"></div>

      {/* Modals */}
      <ManifestoSection isOpen={manifestoOpen} onClose={() => setManifestoOpen(false)} />
      <SopSection isOpen={sopOpen} onClose={() => setSopOpen(false)} />
    </section>
  )
}
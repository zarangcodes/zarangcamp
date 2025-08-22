"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, MessageCircle, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative gradient-purple-dark overflow-hidden">
      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Content */}
          <h2 className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 text-white" style={{fontFamily: 'Poppins, sans-serif'}}>Ready for Change?</h2>
          <p className="font-sans text-base md:text-lg mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto text-white/90 leading-relaxed px-4" style={{fontFamily: 'Poppins, sans-serif'}}>
            Join the revolution. Be part of the transformation that will define BITS Pilani's future.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 md:gap-6 mb-8 md:mb-10">
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

      {/* Footer Bottom Section */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
              {/* Contact Info */}
              <div className="text-center md:text-left">
                <p className="font-sans text-sm text-white/70 mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>
                  <span className="font-medium text-white/90">Tarang Agrawal</span> • 2023A1PS0152P
                </p>
                <p className="font-sans text-xs md:text-sm text-white/60" style={{fontFamily: 'Poppins, sans-serif'}}>
                  BITS Pilani Student Elections 2024
                </p>
              </div>
              
              {/* Additional Info */}
              <div className="text-center md:text-right">
                <p className="font-sans text-xs md:text-sm text-white/50" style={{fontFamily: 'Poppins, sans-serif'}}>
                  Empowering student voices • Building tomorrow's leaders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

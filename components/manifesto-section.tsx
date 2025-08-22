"use client"

import { Button } from "@/components/ui/button"
import { X, Calendar } from "lucide-react"

interface ManifestoSectionProps {
  isOpen: boolean
  onClose: () => void
}

export function ManifestoSection({ isOpen, onClose }: ManifestoSectionProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="gradient-purple-dark border border-purple-500/30 rounded-2xl max-w-lg w-full shadow-2xl relative overflow-hidden">
        {/* Enhanced Background Elements - Same as website */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Header */}
        <div className="relative flex items-center justify-between p-6 border-b border-purple-500/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-white">Manifesto</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-slate-400 hover:text-white hover:bg-white/10 h-10 w-10 p-0 rounded-xl transition-all duration-200"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="relative p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner border border-purple-400/20">
            <Calendar className="h-10 w-10 text-purple-300" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Coming Soon</h3>
          
          <p className="text-slate-200 text-base mb-6 leading-relaxed max-w-md mx-auto">
            Our comprehensive manifesto will be available on
          </p>
          
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl inline-block font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-400/30">
            27th August 2025
          </div>
        </div>
      </div>
    </div>
  )
}

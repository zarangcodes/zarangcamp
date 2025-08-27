"use client"

import { Button } from "@/components/ui/button"
import { X, BookOpen } from "lucide-react"
import { useEffect } from "react"

interface SopSectionProps {
  isOpen: boolean
  onClose: () => void
}

export function SopSection({ isOpen, onClose }: SopSectionProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="gradient-purple-dark border border-purple-500/30 rounded-2xl max-w-6xl w-full h-[90vh] shadow-2xl relative overflow-hidden">
        {/* Enhanced Background Elements - Same as website */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Header */}
        <div className="relative flex items-center justify-between p-4 border-b border-purple-500/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <BookOpen className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-white">Statement of Purpose</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-slate-400 hover:text-white hover:bg-white/10 h-8 w-8 p-0 rounded-lg transition-all duration-200"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* PDF Content */}
        <div className="relative h-[calc(100%-4rem)] overflow-hidden">
          <iframe
            src="/pdfs/sop.pdf"
            className="w-full h-full border-0"
            title="Statement of Purpose PDF"
            style={{ overflow: 'hidden' }}
          />
        </div>
      </div>
    </div>
  )
} 
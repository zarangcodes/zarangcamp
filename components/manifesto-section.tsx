"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Calendar, Target, Users, TrendingUp, Lightbulb, Shield, Heart } from "lucide-react"

interface ManifestoSectionProps {
  isOpen: boolean
  onClose: () => void
}

export function ManifestoSection({ isOpen, onClose }: ManifestoSectionProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-blue-400" />
            <h2 className="text-xl font-semibold text-white">Coming Soon</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-10 w-10 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Manifesto Release</h3>
            <p className="text-slate-300 mb-6">
              Our comprehensive manifesto will be available on
            </p>
            <div className="bg-purple-600 text-white px-6 py-3 rounded-lg inline-block font-semibold">
              27th August 2025
            </div>
          </div>

          {/* Preview Content */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-400" />
                Our Vision
              </h4>
              <p className="text-slate-300 leading-relaxed">
                Revolutionary leadership for impactful change. From startup mindset to campus transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-400" />
                  Student-Centric Approach
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Every decision, every initiative, every policy will be designed with students at the center.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-purple-400" />
                  Measurable Impact
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Data-driven solutions with clear metrics and transparent reporting.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-400" />
                  Innovation First
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Leveraging technology and creative solutions to solve campus challenges.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-400" />
                  Safety & Security
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Ensuring a safe, inclusive environment for all students.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 border border-purple-500/30">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-400" />
                Why This Matters
              </h4>
              <p className="text-slate-300 leading-relaxed">
                This manifesto represents not just promises, but a comprehensive roadmap for transforming BITS Pilani into a more inclusive, innovative, and student-friendly campus. Every point has been carefully crafted based on real student feedback and proven track record.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

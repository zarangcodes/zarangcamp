import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Calendar, BookOpen, Target, Users, TrendingUp, Lightbulb, Shield, Heart, CheckCircle } from "lucide-react"

interface SopSectionProps {
  isOpen: boolean
  onClose: () => void
}

export function SopSection({ isOpen, onClose }: SopSectionProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-green-400" />
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
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-10 w-10 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Statement of Purpose Release</h3>
            <p className="text-slate-300 mb-6">
              Our detailed implementation strategies will be available on
            </p>
            <div className="bg-green-600 text-white px-6 py-3 rounded-lg inline-block font-semibold">
              27th August 2025
            </div>
          </div>

          {/* Preview Content */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-green-400" />
                Implementation Strategy
              </h4>
              <p className="text-slate-300 leading-relaxed">
                Detailed implementation strategies and operational frameworks for systematic change across campus.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  Actionable Plans
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Step-by-step implementation plans with timelines, resources, and success metrics.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                  Performance Metrics
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Clear KPIs and measurement frameworks to track progress and impact.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-400" />
                  Stakeholder Engagement
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Comprehensive approach to involving students, faculty, and administration.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-400" />
                  Innovation Framework
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Systematic approach to identifying and implementing innovative solutions.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-6 border border-green-500/30">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                Operational Excellence
              </h4>
              <p className="text-slate-300 leading-relaxed">
                This SOP provides a comprehensive framework for executing our vision with precision, accountability, and measurable outcomes. Every strategy is backed by data, stakeholder input, and proven methodologies.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-400" />
                What to Expect
              </h4>
              <ul className="text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Detailed timeline for each initiative</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Resource allocation and budget breakdown</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Risk assessment and mitigation strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Communication and feedback mechanisms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Lightbulb, Users, TrendingUp } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              About
            </Badge>
            <h2 className="font-sans font-bold text-4xl md:text-5xl mb-6 text-foreground">The Journey to Impact</h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              From recognizing leadership gaps to creating revolutionary change on campus
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-6">
                <img
                  src="/images/tarang.jpg"
                  alt="Tarang Agrawal"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-xl shadow-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6">
              <h3 className="font-sans font-bold text-2xl md:text-3xl text-foreground">
                Why He Entered Politics & Elections
              </h3>

              <div className="space-y-4 text-muted-foreground">
                <p className="font-sans leading-relaxed">
                  He saw a fundamental fault in campus leadership - not with specific candidates, but with the entire
                  approach. Leaders were focused on low-effort initiatives like opening NAB rooms or distributing
                  alcohol, rather than creating real impact.
                </p>

                <p className="font-sans leading-relaxed">
                  He wanted to transform campus politics into something impact-oriented and institutional - befitting an
                  elite institution like BITS Pilani. His vision is to make incoming freshers aspire to leadership rather
                  than viewing politics as something negative.
                </p>

                <p className="font-sans leading-relaxed font-medium text-primary">
                  This is going to be a revolution - a radical change in how we approach campus leadership.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-sans font-semibold text-lg mb-2">Impact-Oriented</h4>
                <p className="font-sans text-sm text-muted-foreground">
                  Solving real pain points across all batches with measurable results
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-sans font-semibold text-lg mb-2">Innovation</h4>
                <p className="font-sans text-sm text-muted-foreground">
                  Bringing startup mindset and high-effort solutions to campus
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-sans font-semibold text-lg mb-2">Institutional</h4>
                <p className="font-sans text-sm text-muted-foreground">
                  Building bureaucratic, structured approaches to governance
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-sans font-semibold text-lg mb-2">Legacy</h4>
                <p className="font-sans text-sm text-muted-foreground">
                  Creating a lasting positive impact for future generations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

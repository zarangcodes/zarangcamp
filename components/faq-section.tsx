import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"

export function FAQSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              FAQ
            </Badge>
            <h2 className="font-sans font-bold text-4xl md:text-5xl mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-lg text-muted-foreground">Common questions about the campaign and vision</p>
          </div>

          {/* Coming Soon Card */}
          <Card className="text-center p-12">
            <CardContent className="pt-6">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-sans font-semibold text-2xl mb-4">FAQs Coming Soon</h3>
              <p className="font-sans text-muted-foreground max-w-md mx-auto">
                We're compiling the most important questions from students. Check back soon for detailed answers about
                our vision and plans.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

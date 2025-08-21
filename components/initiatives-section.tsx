import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Users, TrendingUp, Smartphone, Brain, BarChart3, Gift, Car, Home, Users2, Utensils } from "lucide-react"

const initiatives = [
  {
    title: "Internship Conclave",
    category: "Career Impact",
    description:
      "Campus-wide outreach bringing 55+ startups and companies directly to BITS Pilani students through curated interview drives.",
    impact: "60+ internships converted, average stipend of ₹25,000-30,000 per month across product, strategy, venture, and tech domains",
    icon: Users,
    link: "#",
    image: "/images/internship_conclave.jpg",
  },
  {
    title: "bitsGPT - AI Campus Assistant",
    category: "Technology",
    description:
      "AI chatbot trained on thousands of BITS-specific documents providing instant, verifiable answers to campus queries.",
    impact: "3,000+ users in first 3 days, 24/7 accessibility to critical campus information",
    icon: Brain,
    link: "gpt.tarang-bits.tech",
    image: "/images/bitsgpt.jpg",
  },
  {
    title: "BITeS - Campus Food Delivery",
    category: "Student-led Initiative",
    description:
      "First student-built delivery app at BITS Pilani with integrated Razorpay payments and direct partnerships with C'not restaurants.",
    impact: "₹1,00,000+ GMV in 13 days, 300+ deliveries, 15-30% revenue uplift for partner restaurants",
    icon: Smartphone,
    link: "linktr.ee/bitesbytarang",
    image: "/images/bites.jpg",
  },
  {
    title: "Swiggy Student Benefits",
    category: "Food & Dining",
    description:
      "Exclusive collaboration with Swiggy unlocking access to curated deals, group order benefits, and Swiggy One Lite memberships at specially negotiated rates.",
    impact: "2,706 users reached, average order value of ₹450 per head, dishes starting at ₹49",
    icon: Utensils,
    link: "swiggy.com",
    image: "/images/swiggy.jpg",
  },
  {
    title: "Shoffr - Safer Pilani Rides",
    category: "Transportation",
    description:
      "Partnership with Shoffr providing safe, transparent rides between Delhi NCR/Airport ↔ Pilani with all-electric BYD SUVs and background-verified drivers.",
    impact: "Fixed tariff of ₹5,500 for 250 km removes uncertainty, includes toll and parking waivers, 24×7 helpline and GPS tracking",
    icon: Car,
    link: "shoffr.in",
    image: "/images/shoffr.jpg",
  },
  {
    title: "Uber Partnership",
    category: "Partnership",
    description:
      "Initiated first-ever Uber partnership on campus, scaling from 50% off on 3 rides to 60% off on 5 rides.",
    impact: "Hundreds of students benefited, collective savings worth lakhs of rupees on local travel",
    icon: TrendingUp,
    link: "#",
    image: "/images/uber.jpg",
  },
  {
    title: "RedBus - Travel Discounts",
    category: "Travel & Accommodation",
    description:
      "Formalized partnership with RedBus, India's largest bus-ticketing platform, giving BITSians exclusive discounts across buses, hotels, and rail bookings.",
    impact: "₹300 savings per bus trip, up to ₹5,000 off hotels, up to ₹150 off rail tickets. Collective savings scale to tens of lakhs each semester",
    icon: TrendingUp,
    link: "redbus.in",
    image: "/images/redbus.jpg",
  },
  {
    title: "Housr - Managed Co-living",
    category: "Accommodation",
    description:
      "Partnership with Housr providing fully-furnished, professionally managed co-living spaces in major internship hubs (Gurgaon, Bangalore, Hyderabad, Pune).",
    impact: "Coverage across 4+ major cities, hundreds of beds, zero-brokerage, includes utilities, curated for student safety",
    icon: Home,
    link: "housr.in",
    image: "/images/housr.jpg",
  },
  {
    title: "PS Dashboard - Analytics",
    category: "Data & Transparency",
    description:
      "Interactive dashboard visualizing 3,000+ PS records including branch placements, stipend distributions, and station cutoffs.",
    impact: "First centralized resource for data-driven PS choices, reduced uncertainty in academic decisions",
    icon: BarChart3,
    link: "ps-dashboard-delta.vercel.app",
    image: "/images/psdashboard.jpg",
  },
  {
    title: "Student Offers Hub",
    category: "Student Benefits",
    description:
      "Online repository of verified student discounts spanning travel, subscriptions, software, and food with search functionality.",
    impact: "40+ curated offers providing recurring savings on essentials and premium tools",
    icon: Gift,
    link: "student-offers-hub.vercel.app",
    image: "/images/studenthub.jpg",
  },
  {
    title: "inspire. - Builders' Collective",
    category: "Community",
    description:
      "No-barriers student community where BITSians collaborate on 0→1 projects in tech, startups, consulting, and finance with mentorship from seniors and alumni.",
    impact: "Enabled dozens of students to launch real projects and teams, active WhatsApp and Calendly-based onboarding",
    icon: Users2,
    link: "#",
    image: "/images/inspire.png",
  },
]

export function InitiativesSection() {
  return (
    <section id="initiatives-section" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/10">
              Initiatives
            </Badge>
            <h2 className="font-sans font-bold text-4xl md:text-5xl mb-6 text-foreground">Proven Track Record</h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              High-effort solutions solving real pain points across all batches with measurable impact
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="font-sans font-bold text-3xl md:text-4xl text-primary mb-2">₹72L+</div>
              <div className="font-sans text-sm text-muted-foreground">Combined Impact Value</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="font-sans font-bold text-3xl md:text-4xl text-primary mb-2">3000+</div>
              <div className="font-sans text-sm text-muted-foreground">Students Reached</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="font-sans font-bold text-3xl md:text-4xl text-primary mb-2">55+</div>
              <div className="font-sans text-sm text-muted-foreground">Company Partnerships</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="font-sans font-bold text-3xl md:text-4xl text-primary mb-2">11</div>
              <div className="font-sans text-sm text-muted-foreground">Major Initiatives</div>
            </div>
          </div>

          {/* Initiatives Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="group card-hover bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs bg-secondary/80 border-border/50">
                      {initiative.category}
                    </Badge>
                    <initiative.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-sans font-semibold text-xl leading-tight">{initiative.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Initiative Image */}
                  <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-border/30">
                    {initiative.image.startsWith('/') ? (
                      <img
                        src={initiative.image}
                        alt={initiative.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                        {initiative.image}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{initiative.description}</p>

                  {/* Impact */}
                  <div className="bg-primary/5 p-3 rounded-lg border border-primary/10">
                    <p className="font-sans text-sm font-medium text-primary mb-1">Impact:</p>
                    <p className="font-sans text-sm text-foreground">{initiative.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

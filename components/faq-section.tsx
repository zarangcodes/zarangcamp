import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "You're running for President with a vision of \"revolutionary leadership,\" yet you haven't held a formal position in the Students' Union. How do you plan to lead effectively?",
    answer: "My leadership philosophy is built on a \"startup mindset\" and a proven track record of delivering impactful, institutional-level change for the student community. While I may not have a traditional background in student politics, my approach has always been to identify critical student issues and build scalable solutions. From creating the Internship Conclave that brought over 55 companies to campus, to developing bitsGPT, an AI campus assistant with over 3,000 users, my focus has been on tangible results, not titles. I believe the SU needs a leader who can think big and execute flawlessly, and my past initiatives demonstrate my commitment to exactly that. My experience lies in building systems and forging partnerships that create lasting value for students, and that's the data-driven, impact-oriented leadership I will bring to the Students' Union."
  },
  {
    question: "There are whispers and rumors of you being an \"admin's puppet.\" What is your response to these allegations?",
    answer: "My track record speaks for itself. My entire campaign is built on a foundation of transparency and a relentless focus on student-first initiatives. The partnerships I've secured with companies like Swiggy, Uber, and RedBus have been for the sole benefit of the student body. The PS Dashboard was created to empower students with data, and initiatives like the Student Offers Hub are designed to provide direct value. These are not the actions of someone beholden to any interests other than those of the students. I am here to challenge the status quo and introduce a new era of proactive, student-centric governance. My loyalty is, and always will be, to the students of BITS Pilani. I invite you to judge me on my work and my vision, not on baseless rumors."
  }
]

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

          {/* FAQ Items */}
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                      <HelpCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sans font-bold text-lg md:text-xl mb-3 text-foreground leading-tight">
                        {index + 1}. {faq.question}
                      </h3>
                      <div className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
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

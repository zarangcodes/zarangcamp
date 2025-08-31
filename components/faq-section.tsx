import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "You're running for President with a vision of \"revolutionary leadership,\" yet you haven't held a formal position in the Students' Union. How do you plan to lead effectively?",
    answer: [
      "Although he has not held an official position in the Students' Union, Tarang has already delivered more impact than the rest of the candidates combined. A presidential candidate has a point of \"Delivering 1Cr+ of impact through partnerships\" - He has already done that before having an official position of responsibility in the Union.",
      "His partnerships and initiatives speak for themselves - He connected more than 65 students for summer internships when they needed them the most, He created BITES: a delivery app for C'not that brought food to your doorstep, bitsGPT: the replacement to all your acads drives and the biggest every data repository for BITS Pilani, partnerships with Uber, Shoffr, Redbus, Housr and Swiggy as well as websites like the PS Dashboard and Students' Offers Hub.",
      "All of these are unique, impact-driven initiatives and he intends to carry the same energy and aspiration forward when he becomes President."
    ]
  },
  {
    question: "There are whispers and rumors of you being an \"admin's puppet.\" What is your response to these allegations?",
    answer: [
      "His track record speaks for itself. His entire campaign is built on a foundation of transparency and a relentless focus on student-first initiatives. He is here to challenge the status quo and introduce a new era of proactive, student-centric governance. His loyalty is, and always will be, to the students of BITS Pilani. He invites you to judge him on his work and his vision, not on baseless rumors.",
      "Also - to the candidate that defames him with this rumour? What were you doing on Founders' Day when the 3 performances were cancelled? What were you doing in the Biology Department to become the anchor of the Founders' Day? What was and has always been your demeanor in front of professors and the Director?",
      "He has always fought for students' rights against the admin - starting from a case in his first year where they tried to illegally frame his friends in a CP Lab test for cheating, to multiple cases where juniors were framed in false cases of disciplinary actions and were forced to sign green forms. Ask anybody that has ever stood up to get work done by going against the administration, who the real admin's puppet is. They will tell you the truth."
    ]
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
                        {Array.isArray(faq.answer) ? (
                          faq.answer.map((paragraph, paragraphIndex) => (
                            <p key={paragraphIndex} className="mb-4 last:mb-0">
                              {paragraph}
                            </p>
                          ))
                        ) : (
                          <p>{faq.answer}</p>
                        )}
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

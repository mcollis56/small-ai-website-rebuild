"use client";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Calendar, Mail, MessageSquare, Clock } from "lucide-react";
import { useCal } from "@/hooks/use-cal";

export default function ContactPage() {
  const { openCalPopup } = useCal();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-semibold font-serif leading-tight tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground mb-12 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's start with a conversation about your specific needs and goals.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-20 px-4">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Discovery Call */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl mb-2">Free Discovery Call</CardTitle>
                <CardDescription>
                  30-minute consultation to discuss your business needs and AI opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                  <li>• Understand your current processes</li>
                  <li>• Identify AI opportunities</li>
                  <li>• Get personalized recommendations</li>
                  <li>• No sales pressure</li>
                </ul>
                <Button
                  onClick={() => openCalPopup('https://cal.com/mark-s28jyk/discovery-call')}
                  className="btn-primary w-full"
                >
                  Book Discovery Call
                </Button>
              </CardContent>
            </Card>

            {/* Quick Questions */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-xl mb-2">Quick Questions</CardTitle>
                <CardDescription>
                  Have a specific question? Send us a message and we'll get back to you quickly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground mb-6 space-y-2">
                  <p>Perfect for:</p>
                  <ul className="space-y-1">
                    <li>• Pricing questions</li>
                    <li>• Service clarifications</li>
                    <li>• Timeline inquiries</li>
                    <li>• General AI questions</li>
                  </ul>
                </div>
                <Button
                  onClick={() => window.location.href = 'mailto:hello@small-ai.com?subject=Question about AI services'}
                  className="btn-secondary w-full"
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>

            {/* Response Times */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl mb-2">Response Times</CardTitle>
                <CardDescription>
                  We're committed to getting back to you quickly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Discovery Calls:</span>
                    <span className="font-medium">Same day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Email inquiries:</span>
                    <span className="font-medium">Within 4 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Project proposals:</span>
                    <span className="font-medium">Within 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold font-serif leading-tight mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "How long does implementation take?",
                  answer: "Most projects are completed within 2-4 weeks, depending on complexity. We focus on quick wins and immediate value."
                },
                {
                  question: "Do I need technical knowledge?",
                  answer: "Not at all! We specialize in making AI accessible to non-technical business owners. We handle the complexity so you don't have to."
                },
                {
                  question: "What's included in the free consultation?",
                  answer: "We'll review your business processes, identify AI opportunities, recommend the best approach, and answer all your questions - no sales pressure."
                },
                {
                  question: "How much does AI implementation cost?",
                  answer: "Our services range from $99 for self-guided tutorials to $499 for comprehensive audits. We'll recommend the best option for your budget and needs."
                }
              ].map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-semibold font-serif leading-tight mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            The best way to start is with a conversation. Book your free discovery call today.
          </p>
          <Button
            onClick={() => openCalPopup('https://cal.com/mark-s28jyk/discovery-call')}
            className="btn-primary"
            size="lg"
          >
            Book Your Free Call Now
          </Button>
        </div>
      </section>
    </div>
  );
}
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Target, Zap } from "lucide-react";
import { useCal } from "@/hooks/use-cal";

export default function AboutPage() {
  const { openCalPopup } = useCal();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-semibold font-serif leading-tight tracking-tight mb-6">
            About small-ai
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground mb-12 max-w-3xl mx-auto">
            We believe AI should be accessible and profitable for every small business,
            without the complexity or massive investment typically required.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pb-20 px-4 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold font-serif leading-tight mb-6">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To make AI implementation simple, practical, and immediately valuable for small businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Small Business Focus",
                  description: "We understand the unique challenges and constraints of small businesses."
                },
                {
                  icon: Target,
                  title: "Practical Solutions",
                  description: "No fluff or complexity - just AI tools that deliver real, measurable results."
                },
                {
                  icon: Zap,
                  title: "Quick Implementation",
                  description: "Get up and running with AI in days, not months, with our proven approach."
                }
              ].map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={value.title} className="text-center p-6">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold font-serif leading-tight mb-6">
                Why We Started small-ai
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                After seeing countless small businesses struggle with overly complex AI solutions
                that promised the world but delivered headaches, we knew there had to be a better way.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Most AI consultants focus on enterprise clients with massive budgets and technical teams.
                We decided to do the opposite - to create AI solutions that any small business owner
                can understand, implement, and benefit from immediately.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Every tool we create, every service we offer, and every recommendation we make
                is designed with one goal: to help small businesses leverage AI for real,
                measurable growth without the complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-semibold font-serif leading-tight mb-4">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's have a conversation about how AI can work for your specific business needs.
          </p>
          <Button
            onClick={() => openCalPopup('https://cal.com/mark-s28jyk/discovery-call')}
            className="btn-primary"
            size="lg"
          >
            Book a Free Discovery Call
          </Button>
        </div>
      </section>
    </div>
  );
}
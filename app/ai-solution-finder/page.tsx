"use client";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useCal } from "@/hooks/use-cal";

export default function AISolutionFinderPage() {
  const { openCalPopup } = useCal();

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-semibold font-serif leading-tight tracking-tight mb-6">
            Find Your Perfect AI Solution
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground mb-12 max-w-2xl mx-auto">
            Not sure where to start with AI? Let's have a conversation about your specific business needs
            and find the perfect solution together.
          </p>

          <Card className="max-w-2xl mx-auto mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">
                Book a Free Discovery Call
              </CardTitle>
              <CardDescription className="text-base leading-relaxed">
                In just 30 minutes, we'll discuss your business challenges and recommend the best AI approach for your specific situation.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-left space-y-3" style={{ marginBottom: '32px' }}>
                {[
                  "Understand your current business processes",
                  "Identify high-impact AI opportunities",
                  "Recommend the right service or approach",
                  "Answer all your questions about AI implementation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-primary-foreground">✓</span>
                    </div>
                    <span className="text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => openCalPopup('mark-s28jyk/discovery-call')}
                className="btn-primary shadow-lg text-lg px-8 py-4"
              >
                Book Your Free Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold font-serif leading-tight mb-6">
              Already Know What You Need?
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-8">
              Browse our services to find the perfect AI solution for your business.
            </p>
            <Button
              onClick={() => window.location.href = '/services'}
              className="btn-secondary px-6 py-3"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
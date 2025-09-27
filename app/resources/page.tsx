"use client";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { CheckCircle, Zap, Target, Bot, ArrowRight } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-semibold font-serif leading-tight tracking-tight mb-6">
            Free AI Resources
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground mb-12 max-w-3xl mx-auto">
            Essential tools and guides to kickstart your AI journey. Download these resources to get started with AI implementation in your business.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="pb-20 px-4">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                icon: CheckCircle,
                title: "AI Readiness Checklist",
                format: "PDF",
                link: "https://gamma-static.s3.amazonaws.com/downloads/ai-readiness-checklist.pdf",
                gtm: "ai_readiness_checklist"
              },
              {
                icon: Zap,
                title: "Quick-Start Prompt Library",
                format: "PDF",
                link: "https://gamma-static.s3.amazonaws.com/downloads/quick-start-prompt-library.pdf",
                gtm: "prompt_library"
              },
              {
                icon: Target,
                title: "30-Day AI Experiment Planner",
                format: "XLSX",
                link: "https://gamma-static.s3.amazonaws.com/downloads/30-day-ai-experiment-planner.xlsx",
                gtm: "experiment_planner"
              },
              {
                icon: Bot,
                title: "Case-Study Slide Pack",
                format: "PPTX",
                link: "https://gamma-static.s3.amazonaws.com/downloads/ai-case-study-pack.pptx",
                gtm: "case_study_pack"
              },
              {
                icon: ArrowRight,
                title: "ROI Calculator",
                format: "Google Sheet",
                link: "https://docs.google.com/spreadsheets/d/1vAIXiT9wYIU4lq_/copy",
                gtm: "roi_calculator"
              }
            ].map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <Card key={resource.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg mb-2">{resource.title}</CardTitle>
                    <CardDescription className="opacity-70">{resource.format}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <a
                      href="/contact"
                      rel="noopener noreferrer"
                      data-gtm-download={resource.gtm}
                      className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      Contact for Download
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-semibold font-serif leading-tight mb-4">
            Need More Help?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to take the next step? Book a consultation to discuss your specific AI needs.
          </p>
          <Button
            onClick={() => window.location.href = '/contact'}
            className="btn-primary"
            size="lg"
          >
            Get Personal AI Guidance
          </Button>
        </div>
      </section>
    </div>
  );
}
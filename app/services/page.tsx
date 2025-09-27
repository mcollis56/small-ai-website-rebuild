"use client";

import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { CheckCircle, Star } from "lucide-react";
import { useCal } from "@/hooks/use-cal";

const services = [
  {
    title: "Online AI Tutorial",
    description: "Complete step-by-step video course covering AI fundamentals, practical tools, and implementation strategies for small businesses.",
    features: ["8+ hours of video content", "Downloadable resources", "Implementation templates", "30-day money-back guarantee"],
    price: "$99",
    link: "/course-purchase",
    popular: false,
  },
  {
    title: "AI Basics Workshop",
    description: "A 2-hour hands-on workshop to get you and your team up to speed with essential AI tools and strategies.",
    features: ["Live 2-hour session", "Team training for up to 5 people", "Q&A session", "Follow-up resources"],
    price: "$299",
    link: "https://cal.com/mark-s28jyk/ai-basics-workshop",
    popular: true,
  },
  {
    title: "Purpose Built Agent",
    description: "A custom AI agent built specifically for your business needs, from customer service to data analysis.",
    features: ["Custom AI development", "Integration support", "Training & documentation", "30-day support"],
    price: "$299",
    link: "https://cal.com/mark-s28jyk/purpose-built-agent",
    popular: false,
  },
  {
    title: "AI Audit & Consultation",
    description: "A comprehensive audit of your business processes to identify the best opportunities for AI integration.",
    features: ["Full business analysis", "AI opportunity mapping", "Implementation roadmap", "ROI projections"],
    price: "$499",
    link: "https://cal.com/mark-s28jyk/ai-audit-consultation",
    popular: false,
  },
];

export default function ServicesPage() {
  const { openCalPopup } = useCal();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container text-center">
          <h1 className="mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect AI solution for your business needs. From tutorials to custom implementations,
            we help you leverage AI for immediate impact.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4">
        <div className="container">
          <div className="service-grid">
            {services.map((service) => (
              <div key={service.title} className="relative">
                <Card className={`h-full p-8 text-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <CardHeader className="text-center">
                    <div className="mb-4">
                      <div className="text-4xl font-bold mb-2">
                        {service.price}
                      </div>
                      <CardTitle className="text-xl mb-3">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-center">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button
                      onClick={() => {
                        if (service.title === "Online AI Tutorial") {
                          window.location.href = service.link;
                        } else {
                          openCalPopup(service.link);
                        }
                      }}
                      className={`w-full ${service.popular ? 'btn-primary' : 'btn-secondary'}`}
                      size="lg"
                    >
                      {service.title === "Online AI Tutorial" ? "Purchase Course" : "Book Now"}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/50">
        <div className="container text-center">
          <h2 className="mb-4">
            Not Sure Which Option Is Right for You?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free discovery call and we'll help you choose the perfect AI solution for your business.
          </p>
          <Button
            onClick={() => window.location.href = '/contact'}
            className="btn-primary"
            size="lg"
          >
            Contact for Free Discovery Call
          </Button>
        </div>
      </section>
    </div>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useCal } from "@/hooks/use-cal";

export default function AISolutionFinderPage() {
  const { openCalPopup } = useCal();

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Decorative AI Solution Icon - top right */}
      <div className="absolute -right-12 top-8 opacity-15 pointer-events-none hidden lg:block">
        <div className="relative w-[374px] h-[374px]">
          <Image
            src="/images/icon_ai_solution.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 374px"
            className="object-contain"
            style={{ background: 'transparent' }}
          />
        </div>
      </div>

      {/* Decorative AI Solution Icon - bottom left */}
      <div className="absolute -left-8 bottom-12 opacity-10 pointer-events-none hidden lg:block">
        <div className="relative w-[290px] h-[290px]">
          <Image
            src="/images/icon_ai_solution.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 290px"
            className="object-contain"
            style={{ background: 'transparent' }}
          />
        </div>
      </div>

      <section className="relative z-10 py-20 px-4">
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
            <Link href="/services">
              <Button className="btn-secondary px-6 py-3">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
'use client';

import Link from 'next/link';

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] py-20">
      <div className="container-custom max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          AI Readiness <span className="text-[#FFE36E]">Quiz</span>
        </h1>
        <p className="text-xl text-[#BDBDBD] mb-8">
          Discover which AI solutions are perfect for your business needs.
        </p>
        <p className="text-[#BDBDBD] mb-8">
          This quiz is coming soon! In the meantime, book a free consultation to get personalized AI recommendations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary">
            Book Free Consultation
          </Link>
          <Link href="/resources" className="btn-outline">
            View Free Resources
          </Link>
        </div>
      </div>
    </div>
  );
}

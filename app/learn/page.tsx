import { auth, currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import { BookOpen, Play, CheckCircle, Lock } from 'lucide-react';
import Header from '@/app/components/header';

export const metadata = {
  title: 'Learn | small-ai',
  description: 'Access your AI tutorials and learning resources.',
};

export default async function LearnPage() {
  const user = await currentUser();

  const modules = [
    {
      id: 1,
      title: 'Module 1: Introduction to AI for Small Business',
      description: 'Learn the fundamentals of AI and how it can transform your business operations.',
      duration: '30 min',
      status: 'available',
      href: '/preview/module-1',
    },
    {
      id: 2,
      title: 'Module 2: ChatGPT Essentials',
      description: 'Master the basics of using ChatGPT for content creation, customer service, and more.',
      duration: '45 min',
      status: 'coming-soon',
      href: '#',
    },
    {
      id: 3,
      title: 'Module 3: Automating Your Workflow',
      description: 'Discover how to automate repetitive tasks and save hours every week.',
      duration: '40 min',
      status: 'coming-soon',
      href: '#',
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#0D0D0D] py-20 pt-32">
        <div className="container-custom">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome back, <span className="text-[#FFE36E]">{user?.firstName || 'Learner'}</span>
            </h1>
            <p className="text-xl text-[#BDBDBD]">
              Continue your AI learning journey with our step-by-step tutorials.
            </p>
          </div>

          <div className="grid gap-6">
            {modules.map((module) => (
              <div
                key={module.id}
                className={`bg-[#1A1A1A] rounded-lg p-6 border ${
                  module.status === 'available'
                    ? 'border-[#FFE36E]/20 hover:border-[#FFE36E]/50'
                    : 'border-white/10'
                } transition-colors`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-full ${
                        module.status === 'available' ? 'bg-[#FFE36E]' : 'bg-white/10'
                      }`}>
                        {module.status === 'available' ? (
                          <BookOpen className="text-[#0D0D0D]" size={20} />
                        ) : (
                          <Lock className="text-[#BDBDBD]" size={20} />
                        )}
                      </div>
                      <h2 className="text-xl font-semibold text-white">{module.title}</h2>
                    </div>
                    <p className="text-[#BDBDBD] mb-4 ml-11">{module.description}</p>
                    <div className="flex items-center gap-4 ml-11">
                      <span className="text-sm text-[#BDBDBD]">{module.duration}</span>
                      {module.status === 'coming-soon' && (
                        <span className="text-xs bg-white/10 text-[#BDBDBD] px-2 py-1 rounded">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                  {module.status === 'available' && (
                    <Link
                      href={module.href}
                      className="btn-primary flex items-center gap-2"
                    >
                      <Play size={16} />
                      Start
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#FFE36E]/10 to-[#c96a3b]/10 rounded-lg p-8 border border-[#FFE36E]/20">
            <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
            <p className="text-[#BDBDBD] mb-6">
              Have questions about the tutorials or want personalized guidance? Book a free consultation with Mark.
            </p>
            <Link href="/contact" className="btn-primary">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

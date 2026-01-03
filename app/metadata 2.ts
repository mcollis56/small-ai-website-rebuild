import type { Metadata } from 'next';

export const siteConfig: Metadata = {
  title: {
    default: 'Small AI - AI Solutions for Your Business',
    template: '%s | Small AI',
  },
  description:
    'We help you leverage the power of AI to automate tasks, gain insights, and drive growth.',
  keywords: [
    'AI',
    'Artificial Intelligence',
    'Business Solutions',
    'Automation',
    'Data Analytics',
    'Machine Learning',
  ],
  authors: [
    {
      'name': 'Small AI',
      'url': 'https://small-ai.com',
    },
  ],
  creator: 'Small AI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://small-ai.com',
    title: 'Small AI - AI Solutions for Your Business',
    description:
      'We help you leverage the power of AI to automate tasks, gain insights, and drive growth.',
    siteName: 'Small AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small AI - AI Solutions for Your Business',
    description:
      'We help you leverage the power of AI to automate tasks, gain insights, and drive growth.',
    creator: '@smallai',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};
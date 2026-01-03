'use client';

import Script from 'next/script';

declare global {
  interface Window {
    Cal?: any;
  }
}

export default function CalProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="cal-embed-script"
        src="https://app.cal.com/embed/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Initialize Cal.com after script loads
          if (typeof window !== 'undefined' && window.Cal) {
            window.Cal('init', { origin: 'https://app.cal.com' });
            window.Cal('ui', {
              styles: { branding: { brandColor: '#c96a3b' } },
              hideEventTypeDetails: false,
            });
          }
        }}
        onError={() => {
          console.warn('Cal.com embed script failed to load');
        }}
      />
      {children}
    </>
  );
}

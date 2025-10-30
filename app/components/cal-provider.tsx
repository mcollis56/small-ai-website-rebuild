
'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function CalProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Cal.com when the script is ready
    if (typeof window !== 'undefined' && (window as any).Cal) {
      (window as any).Cal('init', { origin: 'https://cal.com' });
      console.log('Cal.com initialized');
    }
  }, []);

  return (
    <>
      <Script
        id="cal-embed-script"
        src="https://app.cal.com/embed/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Cal.com script loaded successfully');
          // Initialize Cal.com after script loads
          if (typeof window !== 'undefined' && (window as any).Cal) {
            (window as any).Cal('init', { origin: 'https://cal.com' });
            console.log('Cal object available and initialized');
          }
        }}
        onError={(e) => {
          console.error('Cal.com script failed to load:', e);
        }}
      />
      {children}
    </>
  );
}

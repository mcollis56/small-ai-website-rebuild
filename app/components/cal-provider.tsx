
'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function CalProvider({ children }: { children: React.ReactNode }) {
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
            console.log('Cal object available');
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

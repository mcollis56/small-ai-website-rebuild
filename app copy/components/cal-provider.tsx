
'use client';

import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

export default function CalProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view'
      });
    })();
  }, []);

  return <>{children}</>;
}

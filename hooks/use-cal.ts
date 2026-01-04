"use client";

import { useCallback } from 'react';

declare global {
  interface Window {
    Cal?: (action: string, ...args: unknown[]) => void;
  }
}

export function useCal() {
  const openCalPopup = useCallback((calLink: string) => {
    if (typeof window !== 'undefined' && window.Cal) {
      window.Cal('openModal', {
        calLink,
        config: { layout: 'month_view' }
      });
    } else if (typeof window !== 'undefined') {
      // Fallback: open in new window if Cal.com not loaded
      window.open(`https://cal.com/${calLink}`, '_blank');
    }
  }, []);

  return {
    isLoaded: typeof window !== 'undefined' && !!window.Cal,
    isLoading: false,
    error: null,
    openCalPopup,
  };
}
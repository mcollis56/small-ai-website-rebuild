"use client";

import { useCallback } from 'react';

declare global {
  interface Window {
    Cal?: {
      (action: string, options: { calLink: string }): void;
    };
  }
}

export function useCal() {
  const openCalPopup = useCallback((calLink: string) => {
    if (typeof window !== 'undefined' && window.Cal) {
      window.Cal("init", { calLink });
      window.Cal("ui", { calLink });
    }
  }, []);

  return {
    isLoaded: typeof window !== 'undefined' && !!window.Cal,
    isLoading: false,
    error: null,
    openCalPopup,
  };
}
"use client";

import { useCallback } from 'react';

export function useCal() {
  const openCalPopup = useCallback((url: string) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }, []);

  return {
    isLoaded: true,
    isLoading: false,
    error: null,
    openCalPopup,
  };
}
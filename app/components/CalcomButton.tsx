'use client';

import { useEffect } from 'react';

export default function CalcomButton({
  buttonText,
  buttonClass,
  calLink,
  calConfig
}: {
  buttonText: string,
  buttonClass?: string,
  calLink?: string,
  calConfig?: string
}) {
  const defaultClass = "inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500";

  useEffect(() => {
    // Initialize Cal.com when component mounts
    if (typeof window !== 'undefined' && (window as any).Cal) {
      (window as any).Cal('init', { origin: 'https://cal.com' });
    }
  }, []);

  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).Cal) {
      const link = calLink || "mcollis/30min";
      const config = calConfig ? JSON.parse(calConfig) : { layout: "month_view" };

      (window as any).Cal('openModal', {
        calLink: link,
        config: config
      });
    } else {
      // Fallback: open in new window if Cal.com not loaded
      const link = calLink || "mcollis/30min";
      window.open(`https://cal.com/${link}`, '_blank');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={buttonClass || defaultClass}
      type="button"
    >
      {buttonText}
    </button>
  );
}
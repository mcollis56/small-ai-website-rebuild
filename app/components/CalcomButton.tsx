'use client';

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

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const link = calLink || "mcollis/30min";

    if (typeof window !== 'undefined') {
      const Cal = (window as any).Cal;

      if (Cal) {
        try {
          const config = calConfig ? JSON.parse(calConfig) : { layout: "month_view" };

          console.log('Opening Cal.com modal with link:', link);
          Cal('ui', {
            "styles": {"branding": {"brandColor": "#c96a3b"}},
            "hideEventTypeDetails": false
          });

          Cal('openModal', {
            calLink: link,
            config: config
          });
        } catch (error) {
          console.error('Error opening Cal.com modal:', error);
          // Fallback: open in new window
          window.open(`https://cal.com/${link}`, '_blank');
        }
      } else {
        console.warn('Cal.com not loaded, opening in new tab');
        // Fallback: open in new window if Cal.com not loaded
        window.open(`https://cal.com/${link}`, '_blank');
      }
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
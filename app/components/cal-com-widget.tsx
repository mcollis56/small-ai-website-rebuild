
'use client';

import { useEffect } from 'react';
import { Calendar, X } from 'lucide-react';

interface CalComWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const CalComWidget: React.FC<CalComWidgetProps> = ({ isOpen, onClose, title }) => {
  useEffect(() => {
    if (isOpen) {
      // Load Cal.com embed script dynamically
      const script = document.createElement('script');
      script.src = 'https://app.cal.com/embed/embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Clean up script when component unmounts
        const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Calendar className="text-[#c96a3b]" size={24} />
            <h3 className="text-xl font-bold text-[#0D0D0D]">Book {title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cal.com Embed */}
        <div className="flex-1 overflow-hidden">
          <div 
            className="cal-embed rounded-b-xl h-full"
            data-cal-link="mark-s28jyk/discovery-call"
            style={{ width: '100%', height: '100%', overflow: 'scroll' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CalComWidget;

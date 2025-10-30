
"use client";

import type { FC } from "react";

export interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  calComUrl: string;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  price,
  description,
  calComUrl,
}) => {
  const handleCalComPopup = (url: string) => {
    // Open Cal.com in a new window/tab
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg text-center flex flex-col justify-between h-full">
      <div>
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-4xl font-bold mb-4 text-white">{price}</p>
        <p className="mb-6 text-gray-300">{description}</p>
      </div>
      <button
        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded self-center mt-auto"
        type="button"
        onClick={() => handleCalComPopup(calComUrl)}
        style={{ backgroundColor: '#c96a3b' }}
      >
        Book Now
      </button>
    </div>
  );
};

export default ServiceCard;

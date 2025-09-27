'use client';
import { CalcomEmbed } from "@calcom/embed-react";

export default function CalcomButton({
  buttonText,
  buttonClass
}: {
  buttonText: string,
  buttonClass?: string
}) {
  const defaultClass = "inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500";

  return (
    <CalcomEmbed
      calLink="mcollis/30min"
      config={{ layout: "month_view" }}
    >
      <button className={buttonClass || defaultClass}>
        {buttonText}
      </button>
    </CalcomEmbed>
  );
}
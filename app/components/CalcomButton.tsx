'use client';

export default function CalcomButton({
  buttonText,
  buttonClass
}: {
  buttonText: string,
  buttonClass?: string
}) {
  const defaultClass = "inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500";

  return (
    <button
      data-cal-link="mcollis/30min"
      className={buttonClass || defaultClass}
    >
      {buttonText}
    </button>
  );
}
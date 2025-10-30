'use client';

export default function CalcomButton({
  buttonText,
  buttonClass,
  calLink,
  calNamespace,
  calConfig
}: {
  buttonText: string,
  buttonClass?: string,
  calLink?: string,
  calNamespace?: string,
  calConfig?: string
}) {
  const defaultClass = "inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500";

  return (
    <button
      data-cal-link={calLink || "mcollis/30min"}
      data-cal-namespace={calNamespace || ""}
      data-cal-config={calConfig || '{"layout":"month_view"}'}
      className={buttonClass || defaultClass}
    >
      {buttonText}
    </button>
  );
}
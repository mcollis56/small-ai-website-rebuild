"use client";

interface BookButtonProps {
  variant?: "primary" | "white";
  children?: React.ReactNode;
}

export default function BookButton({ variant = "primary", children }: BookButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-colors";
  const variantClasses = variant === "white"
    ? "bg-white text-blue-600 hover:bg-blue-50"
    : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button
      data-cal-link="mark-s28jyk/book-a-discovery-call"
      className={`${baseClasses} ${variantClasses}`}
    >
      {children || "Book Free Consultation"}
    </button>
  );
}
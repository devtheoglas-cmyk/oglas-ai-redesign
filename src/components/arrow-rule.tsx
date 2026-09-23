// The thin line-and-arrow that sits under headings throughout the profile.
export function ArrowRule({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 10"
      fill="none"
      aria-hidden="true"
      className={`block h-2.5 w-48 md:w-60 ${className}`}
    >
      <path d="M0 5h237" stroke="currentColor" strokeWidth="0.9" />
      <path d="M232 1.5 238 5l-6 3.5" stroke="currentColor" strokeWidth="0.9" />
    </svg>
  );
}

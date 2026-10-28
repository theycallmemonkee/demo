export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="Local Business Media Growth — home"
      className={`flex items-center gap-2.5 text-brand ${className}`}
    >
      <svg viewBox="0 0 64 64" className="h-[46px] w-[46px] shrink-0 sm:h-[50px] sm:w-[50px]" aria-hidden>
        {/* awning */}
        <path
          d="M6 8h44l4 12c0 3.3-2.7 6-6 6s-6-2.7-6-6c0 3.3-2.7 6-6 6s-6-2.7-6-6c0 3.3-2.7 6-6 6s-6-2.7-6-6c0 3.3-2.7 6-6 6s-6-2.7-6-6L6 8z"
          fill="currentColor"
        />
        <path d="M17 8l-3 12M28 8v12M39 8l3 12" stroke="#f5f5f5" strokeWidth="3.2" />
        {/* storefront posts */}
        <rect x="6" y="30" width="7" height="28" rx="1.5" fill="currentColor" />
        <rect x="45" y="38" width="7" height="20" rx="1.5" fill="currentColor" />
        {/* growth line forming an M */}
        <path
          d="M15 56V40l10 9 9-12 11 9"
          fill="none"
          stroke="currentColor"
          strokeWidth="6.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path d="M41 34.5l12-4.5-2.5 12.5z" fill="currentColor" />
        {/* star */}
        <path
          d="M56 2l1.6 3.6 3.9.4-2.9 2.6.8 3.9L56 10.5l-3.4 2 .8-3.9-2.9-2.6 3.9-.4z"
          fill="#f2c94c"
        />
      </svg>
      <span className="label-text text-[15px] leading-[0.93] tracking-[0.005em] sm:text-[16px]" style={{ fontStretch: "100%" }}>
        Local
        <br />
        Business
        <br />
        Media
        <br />
        Growth
      </span>
    </a>
  );
}

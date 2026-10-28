import type { ComponentProps, ReactNode } from "react";

export function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`label-text inline-flex items-center gap-2.5 rounded-full border border-black/[0.06] bg-white px-5 py-2.5 text-[13px] text-[#2c3235] shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:text-[15px] ${className}`}
    >
      <span aria-hidden className="text-[15px] leading-none sm:text-[17px]">
        🚀
      </span>
      {children}
    </span>
  );
}

const buttonVariants = {
  brand:
    "bg-brand text-white hover:bg-brand-dark hover:shadow-[0_12px_30px_-12px_rgba(95,76,195,0.8)]",
  lime: "bg-lime text-ink hover:bg-lime-dark hover:shadow-[0_12px_30px_-12px_rgba(127,193,61,0.9)]",
};

export function ButtonLink({
  variant = "brand",
  className = "",
  children,
  ...props
}: ComponentProps<"a"> & { variant?: keyof typeof buttonVariants }) {
  return (
    <a
      className={`label-text inline-flex items-center justify-center rounded-[6px] text-[15px] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:translate-y-0 sm:text-[17px] ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

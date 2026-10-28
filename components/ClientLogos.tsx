import { Fragment } from "react";
import { clientLogos, type ClientLogo } from "@/lib/data";

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M12 1.5c1 0 1.8.8 1.8 1.8v6.9h6.9a1.8 1.8 0 0 1 0 3.6h-6.9v6.9a1.8 1.8 0 0 1-3.6 0v-6.9H3.3a1.8 1.8 0 0 1 0-3.6h6.9V3.3c0-1 .8-1.8 1.8-1.8z"
      />
    </svg>
  );
}

function LogoMark({ id }: { id: ClientLogo }) {
  switch (id) {
    case "emblem":
      return (
        <svg viewBox="0 0 48 48" className="h-10 w-10 text-white/45" aria-hidden>
          <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="24" cy="24" r="17" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1.5 2" />
          <circle cx="25.5" cy="13.5" r="2.6" fill="currentColor" />
          <path
            d="M22 18.5l5 1.5 3 5.5M27 20l-2.5 7 4.5 4-1 6M24.5 27l-4.5 3-2.5 5.5M20 22l-3.5 4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "florist":
      return (
        <span className="flex items-center gap-1.5 text-white">
          <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
            <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
              {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((r) => (
                <path key={r} d="M24 24c-2-5-2-10 0-14 2 4 2 9 0 14z" transform={`rotate(${r} 24 24)`} />
              ))}
              <circle cx="24" cy="24" r="3" />
              <path d="M8 40c8-3 18-3 32 0" strokeLinecap="round" />
            </g>
          </svg>
          <span className="flex flex-col leading-none">
            <span className="font-script text-[27px]">Calgary</span>
            <span className="-mt-1 pl-1 font-script text-[14px] text-white/85">Florist</span>
          </span>
        </span>
      );
    case "monogram":
      return (
        <span className="relative block font-label text-[40px] font-black leading-none tracking-[-0.12em] text-white" style={{ fontStretch: "75%" }}>
          B
          <span className="relative top-[10px] inline-block">D</span>
          <span className="absolute -bottom-[3px] left-[5px] text-[6px] tracking-[0.15em]">SEDAR</span>
        </span>
      );
    case "msg":
      return (
        <span className="flex flex-col items-center leading-none text-white/45">
          <span className="font-serif text-[34px] font-bold tracking-[-0.02em]">
            MS<span className="text-[#f08aa6]/70">G</span>
          </span>
          <span className="mt-0.5 text-[6.5px] font-semibold uppercase tracking-[0.12em]">Canada Insurance Inc</span>
        </span>
      );
  }
}

export default function ClientLogos() {
  return (
    <section aria-label="Trusted by local businesses" className="bg-brand">
      <div className="container-page grid grid-cols-2 place-items-center gap-y-8 py-10 sm:flex sm:h-[115px] sm:justify-between sm:py-0">
        {clientLogos.map((logo, i) => (
          <Fragment key={logo.id}>
            {i > 0 && <Sparkle className="hidden h-[22px] w-[22px] text-lime sm:block" />}
            <div className="flex h-12 w-[150px] items-center justify-center opacity-90 transition hover:opacity-100" title={logo.name}>
              <LogoMark id={logo.id} />
              <span className="sr-only">{logo.name}</span>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}

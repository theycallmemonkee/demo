import Image from "next/image";
import { BadgeCheck, Clock } from "lucide-react";
import { features } from "@/lib/data";
import Reveal from "./Reveal";
import { Pill } from "./ui";

const icons = { badge: BadgeCheck, clock: Clock };

function Collage() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-[33px] sm:gap-y-[27px]">
      {/* 5X card */}
      <div className="relative flex min-h-[230px] flex-col justify-end overflow-hidden rounded-[10px] bg-navy p-5 sm:aspect-[335/355] sm:min-h-0 sm:p-[42px]">
        <div aria-hidden className="plus-pattern-dark absolute right-0 top-0 h-[45%] w-[60%]" />
        <p className="relative text-[64px] font-bold leading-none tracking-[-0.06em] text-white sm:text-[100px]">
          5<span className="text-orange">X</span>
        </p>
        <p className="relative mt-3 text-[12px] font-medium leading-[1.5] tracking-[-0.02em] text-white/70 sm:mt-6 sm:text-[15px]">
          Our clients experience up to 5x more engagement through optimized content strategies and timely execution.
        </p>
      </div>

      {/* pink portrait card spans both rows */}
      <div className="group relative row-span-2 min-h-[260px] overflow-hidden rounded-[10px] bg-blush">
        <div aria-hidden className="plus-pattern-dark absolute left-0 top-0 h-[40%] w-full opacity-70" />
        <Image
          src="/images/selfie.png"
          alt="Creator filming a selfie video for social media"
          width={900}
          height={594}
          sizes="(min-width:1024px) 520px, 60vw"
          className="pointer-events-none absolute -right-[38%] bottom-0 w-[190%] max-w-none select-none transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* social apps */}
      <div className="group relative aspect-[335/221] overflow-hidden rounded-[10px]">
        <Image
          src="/images/apps.jpg"
          alt="3D social media app icons"
          fill
          sizes="(min-width:1024px) 335px, 45vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
      </div>
    </div>
  );
}

export default function ResultsSection() {
  return (
    <section id="results" className="scroll-mt-6 pb-24 sm:pb-28 lg:pb-[140px]">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_706px] lg:gap-10">
        <Reveal className="lg:max-w-[550px]">
          <Pill>What sets us apart</Pill>
          <h2 className="mt-5 text-[38px] font-bold leading-[1.1] tracking-[-0.05em] text-ink sm:text-[50px] xl:text-[56px] xl:leading-[1.12]">
            Real Strategies That Actually Drive Real Results
          </h2>
          <p className="mt-6 max-w-[470px] text-[15px] font-medium leading-[1.55] tracking-[-0.02em] text-body">
            We focus on what matters: growing your brand with clear strategy, consistent posting, and engaging
            storytelling your audience actually cares about.
          </p>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-[50px] lg:mt-[60px]">
            {features.map((f) => {
              const Icon = icons[f.icon];
              return (
                <li key={f.title}>
                  <span className="grid h-[62px] w-[62px] place-items-center rounded-[6px] bg-brand text-white">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mt-7 text-[21px] font-bold tracking-[-0.04em] text-ink">{f.title}</h3>
                  <p className="mt-2 text-[15px] font-medium leading-[1.55] tracking-[-0.02em] text-body">{f.description}</p>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <Collage />
        </Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import { BatteryFull, Camera, SignalHigh, Wifi } from "lucide-react";
import { avatars, bookingLink } from "@/lib/data";
import { ButtonLink, Pill } from "./ui";

const bars = [
  { h: "66%", color: "#c9eaa9" },
  { h: "50%", color: "#b7e290" },
  { h: "83%", color: "#a5da76" },
  { h: "100%", color: "#90d14f" },
];

export function AvatarStack({ size = "lg" }: { size?: "sm" | "lg" }) {
  const dims = size === "lg" ? "h-[52px] w-[52px] -ml-3.5 first:ml-0" : "h-[36px] w-[36px] -ml-2.5 first:ml-0";
  return (
    <div className="flex">
      {avatars.map((a) => (
        <span
          key={a.src}
          className={`relative overflow-hidden rounded-full ring-[3px] ring-white ${dims}`}
          style={{ background: a.bg }}
        >
          <Image src={a.src} alt={a.alt} fill sizes="52px" className="object-cover" />
        </span>
      ))}
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative h-full w-full rounded-[13%/6.4%] bg-gradient-to-b from-[#7a76b4] via-[#4c4878] to-[#2a2846] p-[1.6%] shadow-[0_30px_80px_-30px_rgba(18,15,38,0.55)]">
      {/* side buttons */}
      <span className="absolute -left-[0.9%] top-[17%] h-[6%] w-[1%] rounded-l bg-[#5a5690]" />
      <span className="absolute -left-[0.9%] top-[25%] h-[9%] w-[1%] rounded-l bg-[#5a5690]" />
      <span className="absolute -right-[0.9%] top-[22%] h-[13%] w-[1%] rounded-r bg-[#5a5690]" />

      <div className="relative h-full w-full overflow-hidden rounded-[11.5%/5.6%] bg-[#1b1a2a] p-[1.4%]">
        <div className="relative h-full w-full overflow-hidden rounded-[10.5%/5.1%]">
          <Image
            src="/images/hero-phone.jpg"
            alt="Business owner reviewing a Reel on her phone"
            fill
            priority
            sizes="(min-width: 1024px) 504px, 80vw"
            className="object-cover object-[50%_10%]"
          />
          <div className="absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-black/45 to-transparent" />

          {/* status bar */}
          <div className="absolute inset-x-[9%] top-[3.6%] flex items-center justify-between text-white">
            <span className="text-[clamp(13px,1.55vw,22px)] font-semibold tracking-tight">09:41</span>
            <span className="flex items-center gap-1">
              <SignalHigh className="h-[clamp(14px,1.5vw,22px)] w-auto" strokeWidth={3} />
              <Wifi className="h-[clamp(14px,1.5vw,22px)] w-auto" strokeWidth={3} />
              <BatteryFull className="h-[clamp(16px,1.7vw,26px)] w-auto" fill="white" strokeWidth={1.5} />
            </span>
          </div>
          {/* dynamic island */}
          <div className="absolute left-1/2 top-[2.4%] flex h-[4.3%] w-[30%] -translate-x-1/2 items-center justify-end rounded-full bg-black pr-[4%]">
            <span className="h-[30%] w-auto aspect-square rounded-full bg-[#1d2a55] ring-2 ring-[#0d1124]" />
          </div>

          {/* reels header */}
          <div className="absolute inset-x-[8%] top-[11%] flex items-center justify-between text-white">
            <span className="text-[clamp(18px,2.2vw,32px)] font-bold tracking-[-0.01em]">Reels</span>
            <Camera className="h-[clamp(22px,2.4vw,34px)] w-auto" strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function EngagementCard() {
  return (
    <div className="flex h-full flex-col rounded-[10px] bg-white px-[11%] pb-[12%] pt-[14%] shadow-[0_24px_60px_-24px_rgba(8,20,23,0.25)]">
      <p className="text-[clamp(12px,1.15vw,16.5px)] font-medium tracking-[-0.02em] text-ink">Engagement Rate</p>
      <p className="mt-1 flex items-start text-[clamp(28px,3.1vw,44px)] font-bold leading-none tracking-[-0.05em] text-ink">
        12.8 %<span className="ml-1 text-[0.4em] font-bold text-orange">+</span>
      </p>
      <div className="mt-auto flex h-[48%] items-end gap-[3%]">
        {bars.map((b, i) => (
          <span
            key={i}
            className="animate-bar block flex-1"
            style={{ height: b.h, background: b.color, animationDelay: `${300 + i * 120}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard() {
  return (
    <figure className="rounded-[10px] bg-white px-[10%] pb-[7%] pt-[10%] shadow-[0_24px_60px_-24px_rgba(8,20,23,0.25)]">
      <blockquote className="text-[clamp(13px,1.2vw,17.5px)] font-medium leading-[1.55] tracking-[-0.03em] text-ink">
        &ldquo;Thanks team! Our Reels hit 100K views in 2 days 😍🔥&rdquo;
      </blockquote>
      <figcaption className="mt-2 flex items-end justify-between">
        <a
          href="#case-studies"
          className="text-[clamp(13px,1.2vw,17.5px)] font-medium tracking-[-0.02em] text-brand underline underline-offset-2"
        >
          — @plantbox.co
        </a>
        <svg viewBox="0 0 32 24" className="h-[18px] w-6 text-lime" aria-hidden>
          <path
            fill="currentColor"
            d="M3 0h9v10.5C12 17.4 8.8 22.2 2.8 24L1.4 21c3-1.3 4.4-3.8 4.6-7.4H3V0zm17 0h9v10.5c0 6.9-3.2 11.7-9.2 13.5L18.4 21c3-1.3 4.4-3.8 4.6-7.4h-3V0z"
          />
        </svg>
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-14 lg:h-[716px] lg:pb-0">
      {/* "+" patterns */}
      <div
        aria-hidden
        className="plus-pattern absolute bottom-0 left-0 hidden h-[150px] w-[46%] [mask-image:linear-gradient(to_bottom,transparent,black_35%)] lg:block"
      />
      <div aria-hidden className="plus-pattern absolute right-0 top-[50px] hidden h-[560px] w-[128px] xl:block" />

      <div className="container-page relative lg:h-full">
        {/* copy */}
        <div className="relative z-10 pt-4 lg:max-w-[620px] lg:pt-[10px] xl:max-w-[660px]">
          <Pill>Built for America&rsquo;s Local Businesses</Pill>

          <h1 className="mt-7 text-[40px] font-bold leading-[1.04] min-[400px]:text-[44px] tracking-[-0.05em] text-ink sm:text-[60px] lg:mt-[30px] lg:text-[58px] lg:leading-[1.06] xl:text-[65px] xl:leading-[70px]">
            Helping
            <br />
            <span className="text-brand">Local Businesses</span> to
            <br />
            Win Online
          </h1>

          <p className="mt-6 max-w-[552px] text-[17px] font-medium leading-[1.6] tracking-[-0.035em] text-body sm:text-[19px] lg:mt-[38px] lg:leading-[1.53]">
            Whether you&rsquo;re too busy to post, unsure what to share, or frustrated that bigger brands are drowning
            you out online we fix that. Local Business Media Growth is your dedicated social media partner, built
            specifically for small business owners across the U.S.
          </p>

          <ButtonLink {...bookingLink} className="mt-8 h-[55px] w-full px-7 sm:w-auto lg:mt-[37px]">
            Book a Free Consultation
          </ButtonLink>

          <div className="mt-10 flex items-center gap-4 lg:absolute lg:top-[608px] lg:mt-0">
            <AvatarStack />
            <div>
              <p className="label-text text-[16px] text-ink sm:text-[17px]">12+ In-House Experts</p>
              <p className="text-[14px] font-medium tracking-[-0.03em] text-body sm:text-[15px]">
                Designers, strategists, and storytellers.
              </p>
            </div>
          </div>
        </div>

        {/* visual */}
        <div className="relative mx-auto mt-12 aspect-[670/700] w-full max-w-[560px] lg:absolute lg:right-6 lg:top-0 lg:mt-0 lg:w-[48%] lg:max-w-[670px] max-lg:overflow-hidden xl:w-[670px]">
          <div className="absolute left-[12.2%] top-0 aspect-[504/1030] w-[75.2%]">
            <PhoneMockup />
          </div>
          {/* fade phone out on small screens where section height is flexible */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-canvas to-transparent lg:hidden" />
          <div className="animate-float absolute left-0 top-[23.8%] aspect-[245/261] w-[36.6%] min-w-[150px]">
            <EngagementCard />
          </div>
          <div className="absolute left-[55.8%] top-[72%] w-[43.7%] min-w-[200px] max-sm:left-auto max-sm:right-0 lg:top-[80.4%]">
            <TestimonialCard />
          </div>
        </div>
      </div>
    </section>
  );
}

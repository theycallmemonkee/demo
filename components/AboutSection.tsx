import Image from "next/image";
import { aboutImages } from "@/lib/data";
import Reveal from "./Reveal";
import Stats from "./Stats";
import { ButtonLink, Pill } from "./ui";

function AgencyBadge() {
  const text = "SOCIAL MEDIA MANAGEMENT AGENCY • ";
  return (
    <div className="grid h-[118px] w-[118px] place-items-center rounded-full bg-canvas p-[9px] sm:h-[170px] sm:w-[170px] sm:p-[12px]">
      <div className="relative grid h-full w-full place-items-center rounded-full bg-orange text-white">
        <svg viewBox="0 0 200 200" className="animate-spin-slow absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <path id="badge-circle" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
          </defs>
          <text className="fill-ink font-label text-[19px] font-bold tracking-[0.12em]" style={{ fontStretch: "100%" }}>
            <textPath href="#badge-circle" textLength="448" lengthAdjust="spacing">{text}</textPath>
          </text>
        </svg>
        <svg viewBox="0 0 24 24" className="h-[36%] w-[36%]" aria-hidden>
          <path
            fill="currentColor"
            d="M12 0c.9 0 1.5 6.3 3 7.8 1.6 1.6 9 2.6 9 4.2s-7.4 2.6-9 4.2C13.5 17.7 12.9 24 12 24s-1.5-6.3-3-7.8C7.4 14.6 0 13.6 0 12s7.4-2.6 9-4.2C10.5 6.3 11.1 0 12 0z"
          />
        </svg>
        <span className="sr-only">Social Media Management Agency</span>
      </div>
    </div>
  );
}

function Collage() {
  const [tl, tr, bl, br] = aboutImages;
  const tile = "group relative overflow-hidden rounded-[10px] bg-line";
  const img = "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]";
  return (
    <div className="relative">
      <div className="grid grid-cols-[255fr_330fr] gap-3 sm:gap-[30px]">
        <div className={`${tile} aspect-[255/341]`}>
          <Image src={tl.src} alt={tl.alt} fill sizes="(min-width:1024px) 255px, 42vw" className={img} style={{ objectPosition: tl.position }} />
        </div>
        <div className={`${tile} aspect-[330/341]`}>
          <Image src={tr.src} alt={tr.alt} fill sizes="(min-width:1024px) 330px, 55vw" className={img} style={{ objectPosition: tr.position }} />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-[330fr_255fr] gap-3 sm:mt-[30px] sm:gap-[30px]">
        <div className={`${tile} aspect-[330/341]`}>
          <Image src={bl.src} alt={bl.alt} fill sizes="(min-width:1024px) 330px, 55vw" className={img} style={{ objectPosition: bl.position }} />
        </div>
        <div className={`${tile} aspect-[255/341]`}>
          <Image src={br.src} alt={br.alt} fill sizes="(min-width:1024px) 255px, 42vw" className={img} style={{ objectPosition: br.position }} />
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <AgencyBadge />
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-6 py-20 sm:py-28 lg:pb-[120px] lg:pt-[137px]">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[614fr_494fr] lg:gap-[152px]">
        <Reveal className="order-2 min-w-0 lg:order-1">
          <Collage />
        </Reveal>

        <div className="order-1 min-w-0 lg:order-2">
          <Reveal>
            <Pill className="max-w-full rounded-[22px] leading-[1.25] sm:rounded-full">
              Do you actually understand my type of business?
            </Pill>
            <h2 className="mt-7 text-[38px] font-bold leading-[1.08] tracking-[-0.05em] text-ink sm:text-[50px] xl:text-[56px] xl:leading-[1.09]">
              We Don&rsquo;t Work With Everyone. We Work With Businesses Like Yours.
            </h2>
            <p className="mt-7 text-[17px] font-medium leading-[1.5] tracking-[-0.035em] text-body">
              Big marketing agencies are built for big corporations. We&rsquo;re built for the shop that&rsquo;s been on
              Main Street for 20 years. If your business lives and breathes on local customers — you&rsquo;re exactly who
              we&rsquo;re here for.
            </p>
            <ButtonLink href="#services" className="mt-9 h-[55px] w-full px-7 sm:w-auto">
              Learn More About Us
            </ButtonLink>
          </Reveal>
          <div className="mt-12">
            <Stats />
          </div>
        </div>
      </div>
    </section>
  );
}

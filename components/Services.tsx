import Image from "next/image";
import { services } from "@/lib/data";
import GmbIllustration from "./GmbIllustration";
import Reveal from "./Reveal";
import { Pill } from "./ui";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-6 pb-20 pt-6 sm:pb-28 lg:pb-[160px]">
      <div className="container-page">
        <Reveal className="grid gap-6 lg:grid-cols-[1fr_300px] lg:items-end lg:gap-16">
          <div>
            <Pill>What exactly do you do for me?</Pill>
            <h2 className="mt-5 max-w-[800px] text-[36px] font-bold leading-[1.1] tracking-[-0.05em] text-ink sm:text-[46px] xl:text-[52px]">
              Everything You Need to Get Found Online — We Handle It All.
            </h2>
          </div>
          <p className="max-w-[420px] text-[15px] font-medium leading-[1.55] tracking-[-0.02em] text-body lg:mb-[52px] lg:max-w-none">
            No contracts. No confusion. Just simple marketing that works for your shop, your customers, and your budget.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-[66px] xl:grid-cols-4">
          {services.map((service, i) => (
            <Reveal as="li" key={service.title} delay={i * 90} className="h-full">
              <article className="group flex h-full flex-col rounded-[12px] bg-white p-[14px] pb-10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_50px_-28px_rgba(8,20,23,0.35)]">
                <div
                  className={`relative overflow-hidden rounded-[10px] ${service.illustration ? "aspect-[286/330]" : "aspect-[286/264]"}`}
                >
                  {service.illustration ? (
                    <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                      <GmbIllustration />
                    </div>
                  ) : (
                    <Image
                      src={service.image!}
                      alt={service.imageAlt ?? ""}
                      fill
                      sizes="(min-width:1280px) 290px, (min-width:640px) 45vw, 92vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  )}
                </div>
                <h3 className="mt-5 px-[14px] text-[26px] font-semibold leading-[1.15] tracking-[-0.04em] text-ink xl:text-[28px]">
                  {service.title}
                </h3>
                <p className="mt-3.5 px-[14px] text-[15.5px] font-medium leading-[1.6] tracking-[-0.025em] text-body">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Image from "next/image";
import { caseStudies } from "@/lib/data";
import Reveal from "./Reveal";
import { Pill } from "./ui";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-0 bg-brand py-20 sm:py-24 lg:py-[110px]">
      <div className="container-page max-w-[calc(1200px+3rem)]">
        <Reveal className="text-center">
          <Pill>What sets us apart</Pill>
          <h2 className="mt-5 text-[34px] font-bold leading-[1.1] tracking-[-0.05em] text-white sm:text-[44px] lg:mt-4 xl:text-[50px]">
            Real Brands, Real Social Results
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-[15px] font-medium leading-[1.55] tracking-[-0.02em] text-white/85">
            Explore how we&rsquo;ve helped brands boost engagement, increase followers, and build communities through
            tailored social media strategies.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-x-[30px] gap-y-14 md:grid-cols-2 lg:mt-[70px] lg:gap-y-[70px]">
          {caseStudies.map((study, i) => (
            <Reveal as="li" key={study.title} delay={(i % 2) * 120}>
              <article className="group">
                <div className="relative aspect-[585/375] overflow-hidden rounded-[10px]">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    sizes="(min-width:768px) 585px, 92vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="px-0 sm:px-[19px]">
                  <h3 className="mt-6 text-[26px] font-bold tracking-[-0.045em] text-white sm:text-[30px]">{study.title}</h3>
                  <p className="mt-2 max-w-[520px] text-[14.5px] font-medium leading-[1.6] tracking-[-0.025em] text-white/85">
                    {study.description}
                  </p>
                  <div className="mt-7 border-t border-white/30 pt-7">
                    <p className="label-text text-[12px] text-white">[ Result ]</p>
                    <p className="mt-2 text-[14.5px] font-medium tracking-[-0.025em] text-white">
                      <span className="font-bold text-lime">{study.metric}</span> {study.result}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

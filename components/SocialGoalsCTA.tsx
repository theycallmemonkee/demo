import Image from "next/image";
import { Phone } from "lucide-react";
import { bookingLink, contact } from "@/lib/data";
import { AvatarStack } from "./Hero";
import Reveal from "./Reveal";
import { ButtonLink } from "./ui";

function RatingCard() {
  return (
    <div className="relative w-full max-w-[276px] overflow-hidden rounded-[10px] bg-canvas px-[30px] pb-7 pt-[34px] sm:h-[278px]">
      <div aria-hidden className="plus-pattern absolute bottom-0 right-0 hidden h-[120px] w-[150px] sm:block" />
      <p className="flex items-start text-[38px] font-bold leading-none tracking-[-0.05em] text-ink">
        4.9/5
        <svg viewBox="0 0 24 24" className="ml-1 mt-0.5 h-4 w-4 text-orange" aria-hidden>
          <path fill="currentColor" d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21l1.6-7L2 9.2l7.1-.6z" />
        </svg>
      </p>
      <p className="mt-3 text-[15px] font-medium tracking-[-0.03em] text-ink">Average Client Rating</p>
      <p className="mt-0.5 text-[13px] font-medium tracking-[-0.02em] text-muted">Across all platforms and projects.</p>
      <div className="relative mt-8 sm:absolute sm:bottom-[30px] sm:left-[30px] sm:mt-0">
        <AvatarStack size="sm" />
      </div>
    </div>
  );
}

export default function SocialGoalsCTA() {
  return (
    <section aria-labelledby="social-goals-title" className="pb-20 sm:pb-28 lg:pb-[158px]">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[16px] bg-brand px-6 pt-10 sm:px-10 lg:grid lg:h-[438px] lg:grid-cols-[276px_1fr_400px] lg:items-center lg:gap-6 lg:px-[79px] lg:pt-0 xl:grid-cols-[276px_1fr_430px]">
            <RatingCard />

            <div className="order-last mt-10 flex justify-center self-end lg:order-none lg:mt-0">
              <Image
                src="/images/megaphone.png"
                alt="Marketer announcing through a megaphone"
                width={900}
                height={600}
                sizes="(min-width:1024px) 440px, 90vw"
                className="pointer-events-none w-full max-w-[440px] select-none [mask-image:linear-gradient(to_right,transparent,black_22%)] lg:-ml-4 lg:w-[400px] lg:max-w-none"
              />
            </div>

            <div className="mt-10 lg:mt-0">
              <h2
                id="social-goals-title"
                className="text-[36px] font-bold leading-[1.12] tracking-[-0.05em] max-w-[390px] text-white sm:text-[46px] xl:text-[48px] xl:leading-[1.2]"
              >
                Let&rsquo;s Talk About Your Social Goals
              </h2>
              <p className="mt-4 max-w-[400px] text-[15px] font-medium leading-[1.55] tracking-[-0.02em] text-white/85">
                Book a free consultation and let us help you choose the right mix of services for your business.
              </p>
              <div className="mt-7 flex gap-2">
                <ButtonLink {...bookingLink} variant="lime" className="h-[57px] px-8 max-sm:flex-1">
                  Book a Call
                </ButtonLink>
                <a
                  href={contact.phoneHref}
                  aria-label={`Call us at ${contact.phoneDisplay}`}
                  className="grid h-[57px] w-[57px] shrink-0 place-items-center rounded-[6px] bg-ink text-lime transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy"
                >
                  <Phone className="h-[18px] w-[18px]" fill="currentColor" strokeWidth={0} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Mail, PhoneCall } from "lucide-react";
import { bookingLink, contact } from "@/lib/data";
import Reveal from "./Reveal";
import { ButtonLink, Pill } from "./ui";

const channels = [
  { title: "Phone Support", value: contact.phoneDisplay, href: contact.phoneHref, Icon: PhoneCall },
  { title: "Email Support", value: contact.emailDisplay, href: contact.emailHref, Icon: Mail },
];

export default function ContactCTA() {
  return (
    <section id="contact" className="scroll-mt-0 pb-20 pt-6 sm:pb-24 lg:pb-[120px]">
      <div className="container-page max-w-[calc(1200px+3rem)]">
        <Reveal className="text-center">
          <Pill>Contact us</Pill>
          <h2 className="mt-5 text-[34px] font-bold leading-[1.1] tracking-[-0.05em] text-ink sm:text-[44px] xl:text-[48px]">
            Ready To Level Up Your Brand?
          </h2>
          <p className="mx-auto mt-5 max-w-[860px] text-[15px] font-medium leading-[1.55] tracking-[-0.02em] text-ink">
            Drop us a message and our team will respond within 24 hours. Let&rsquo;s build your online presence into a
            powerhouse of engagement.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-10">
            {channels.map(({ title, value, href, Icon }) => (
              <li key={title}>
                <a href={href} className="group flex items-center gap-4">
                  <span className="grid h-[60px] w-[60px] shrink-0 place-items-center rounded-[6px] bg-brand text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[21px] font-bold tracking-[-0.04em] text-ink">{title}</span>
                    <span className="block truncate text-[14px] font-medium tracking-[-0.02em] text-muted transition-colors group-hover:text-brand">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-center">
            <ButtonLink {...bookingLink} variant="lime" className="h-[57px] w-full px-8 sm:w-auto">
              Book a Call
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

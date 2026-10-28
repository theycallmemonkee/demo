import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-page max-w-[calc(1200px+3rem)] pb-10 pt-16 lg:pb-8 lg:pt-[100px]">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-cols-[310px_300px_1fr] lg:gap-[80px]">
          <h2 className="max-w-[320px] text-[28px] font-bold leading-[1.2] tracking-[-0.05em] lg:text-[30px]">
            Let&rsquo;s Elevate Your Local Business Presence Together
          </h2>
          <p className="max-w-[300px] text-[14px] font-medium leading-[1.65] tracking-[-0.02em] text-white/55">
            From strategic content to consistent engagement, we help you stand out on every platform. Ready to grow with
            us?
          </p>
          <div className="grid gap-8 md:col-span-2 lg:col-span-1 lg:grid-cols-[1fr_auto] lg:gap-y-10">
            <div className="lg:col-start-2">
              <p className="label-text text-[12px] text-white/50">Phone Support</p>
              <a
                href={contact.phoneHref}
                className="mt-2 block text-[22px] font-bold tracking-[-0.04em] transition-colors hover:text-lime"
              >
                {contact.phoneDisplay}
              </a>
            </div>
            <div className="lg:col-span-2">
              <p className="label-text text-[12px] text-white/50">Email</p>
              <a
                href={contact.emailHref}
                className="mt-2 block break-words text-[18px] font-bold tracking-[-0.04em] transition-colors hover:text-lime min-[400px]:text-[20px] sm:text-[22px]"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-[12px] font-medium text-white/40 lg:mt-8">
          © {new Date().getFullYear()} Local Business Media Growth. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

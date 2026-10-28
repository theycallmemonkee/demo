"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/data";
import Reveal from "./Reveal";
import { Pill } from "./ui";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-6 pb-24 lg:pb-[100px]">
      <div className="container-page max-w-[calc(1200px+3rem)]">
        <Reveal className="text-center">
          <Pill>Frequently asked questions</Pill>
          <h2 className="sr-only">Frequently Asked Questions</h2>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-10 lg:mt-[58px]">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;
              return (
                <li key={faq.question} className="border-b border-[#dcdcdc]">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className={`flex w-full items-center justify-between gap-6 py-5 text-left text-[18px] font-bold tracking-[-0.04em] transition-colors sm:py-[22px] sm:text-[22px] ${
                        isOpen ? "text-brand" : "text-ink hover:text-brand"
                      }`}
                    >
                      {faq.question}
                      {isOpen ? (
                        <Minus className="h-5 w-5 shrink-0 text-brand" strokeWidth={2.5} />
                      ) : (
                        <Plus className="h-5 w-5 shrink-0" strokeWidth={2.5} />
                      )}
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="-mt-1 pb-6 text-[15px] font-medium leading-[1.6] tracking-[-0.02em] text-ink/85">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

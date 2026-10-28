"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { bookingLink, navLinks } from "@/lib/data";
import Logo from "./Logo";
import { ButtonLink } from "./ui";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Unlock scrolling before jumping, otherwise the locked body cuts the smooth scroll short.
  const navigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector(e.currentTarget.getAttribute("href") ?? "");
    if (!target) return;
    e.preventDefault();
    document.body.style.overflow = "";
    setOpen(false);
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative z-40">
      <nav
        aria-label="Primary"
        className="flex h-[76px] items-center justify-between pl-[max(1.25rem,calc((100%-1260px)/2))] pr-5 sm:h-[86px] lg:pr-6"
      >
        <Logo />

        <ButtonLink {...bookingLink} variant="lime" className="h-[55px] px-[26px] max-sm:hidden">
          Start a Project
        </ButtonLink>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="ml-auto grid h-11 w-11 place-items-center rounded-md bg-ink text-white transition hover:bg-brand sm:ml-3 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 overflow-hidden transition-[visibility] duration-300 lg:hidden ${open ? "visible" : "invisible"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-navy/50 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[min(88vw,360px)] flex-col bg-canvas p-6 shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              tabIndex={open ? 0 : -1}
              className="grid h-11 w-11 place-items-center rounded-md bg-white text-ink shadow-sm transition hover:text-brand"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="mt-10 flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line">
                <a
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  onClick={navigate}
                  className="block py-4 text-[22px] font-bold tracking-[-0.02em] text-ink transition hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink
            {...bookingLink}
            variant="lime"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="mt-auto h-[55px] w-full"
          >
            Start a Project
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

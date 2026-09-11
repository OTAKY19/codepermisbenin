"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 flex h-14 items-center justify-between px-5 transition-[background,box-shadow,border-color] duration-300 ${
        scrolled ? "navScrolled" : "border-transparent"
      }`}
      aria-label="Navigation principale"
    >
      <Link href="/" className="flex items-center gap-2 text-fg">
        <img
          src="/logo_pastel.png"
          alt="Code Permis Bénin"
          width={28}
          height={28}
          className="h-7 w-7 rounded-[0.4rem]"
        />
        <span className="text-[.88rem] font-extrabold tracking-[0.02em] text-fg">
          CODE PERMIS <span className="text-brand">BÉNIN</span>
        </span>
      </Link>

      <div className="flex items-center gap-0.5">
        <a
          href="https://play.google.com/store/apps/details?id=com.codepermisbenin.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-8 items-center rounded-lg px-3 text-[.82rem] font-medium text-muted transition-colors hover:bg-surface hover:text-fg sm:inline-flex"
        >
          Télécharger
        </a>

        <a
          href="#fonctionnalites"
          className="hidden h-8 items-center rounded-lg px-3 text-[.82rem] font-medium text-muted transition-colors hover:bg-surface hover:text-fg sm:inline-flex"
        >
          Fonctionnalités
        </a>

        <Link
          href="/privacy"
          className="hidden h-8 items-center rounded-lg px-3 text-[.82rem] font-medium text-muted transition-colors hover:bg-surface hover:text-fg sm:inline-flex"
        >
          Confidentialité
        </Link>
        <Link
          href="/eula"
          className="hidden h-8 items-center rounded-lg px-3 text-[.82rem] font-medium text-muted transition-colors hover:bg-surface hover:text-fg sm:inline-flex"
        >
          Conditions
        </Link>
        <a
          href="mailto:privacy@btcbenin.com"
          className="hidden h-8 items-center rounded-lg px-3 text-[.82rem] font-medium text-muted transition-colors hover:bg-surface hover:text-fg sm:inline-flex"
        >
          Contact
        </a>

        <ThemeToggle />
      </div>
    </nav>
  );
}

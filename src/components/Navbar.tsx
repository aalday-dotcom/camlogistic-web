"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/empresas", label: "Empresas" },
  { href: "/transportistas", label: "Transportistas" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_0_rgba(23,51,94,0.1)]" : ""
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 h-18 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/cam-logo.png"
            alt="CAM Logistic"
            width={140}
            height={74}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          {LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  active
                    ? "text-[var(--color-blue)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-blue)]"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[var(--color-gold)] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contacto"
            className="inline-flex items-center rounded-full bg-[var(--color-gold)] text-[var(--color-blue-deep)] text-sm font-bold px-5 py-2.5 hover:bg-[var(--color-gold-soft)] transition-colors"
          >
            Cotizar operación
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg border border-[var(--color-mist-dark)]"
        >
          <span
            className={`block h-[1.5px] w-5 bg-[var(--color-blue-deep)] transition-transform ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-[var(--color-blue-deep)] transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-[var(--color-blue-deep)] transition-transform ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-mist-dark)] bg-white px-6 pb-6 pt-2">
          <div className="flex flex-col">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-base font-medium text-[var(--color-ink)] border-b border-[var(--color-mist)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contacto"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-blue-deep)] text-sm font-bold px-5 py-3"
          >
            Cotizar operación
          </Link>
        </div>
      )}
    </header>
  );
}

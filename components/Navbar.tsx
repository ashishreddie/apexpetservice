"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, PawPrint } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/branches", label: "Branches" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-blue-tint">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-blue-dark">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-blue text-white">
            <PawPrint size={18} />
          </span>
          Apex Pet Clinic
        </Link>

        <ul className="hidden md:flex items-center gap-7 font-bold text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-ink hover:text-blue transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/services"
          className="hidden md:inline-flex items-center rounded-full bg-brown px-5 py-2.5 text-sm font-bold text-white hover:bg-brown-dark transition-colors"
        >
          Book Appointment
        </Link>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden border-t border-blue-tint bg-white px-4 py-4 space-y-3 font-bold text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)} className="block text-ink">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-brown px-5 py-2.5 text-center text-white"
            >
              Book Appointment
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

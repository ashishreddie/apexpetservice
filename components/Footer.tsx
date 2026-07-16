import Link from "next/link";
import { PawPrint, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { branches } from "@/lib/branches";

export default function Footer() {
  return (
    <footer className="bg-blue-dark text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg mb-3">
            <PawPrint size={20} className="text-brown-light" />
            Apex Pet Clinic
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Compassionate, professional veterinary care in Kazipet, Warangal since 2011.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://instagram.com/apexpetclinic" aria-label="Instagram" className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-sm uppercase tracking-wide text-brown-light">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/branches" className="hover:text-white">Branches</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/reviews" className="hover:text-white">Reviews</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-sm uppercase tracking-wide text-brown-light">Branches</h3>
          <ul className="space-y-4 text-sm text-white/80">
            {branches.map((b) => (
              <li key={b.name}>
                <p className="font-semibold text-white">{b.name}</p>
                <p>{b.address}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-sm uppercase tracking-wide text-brown-light">Contact & Hours</h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Clock size={16} className="text-brown-light shrink-0" />
              9:00 AM – 8:00 PM, All Days
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-brown-light shrink-0" />
              <a href="tel:07947461557" className="hover:text-white">07947461557</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-brown-light shrink-0" />
              <a href="tel:09035046648" className="hover:text-white">09035046648</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Apex Pet Clinic, Kazipet, Warangal. All rights reserved.
      </div>
    </footer>
  );
}

import { Phone, Clock, Instagram, Facebook } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { branches } from "@/lib/branches";

export const metadata = { title: "Contact | Apex Pet Clinic" };

export default function ContactPage() {
  return (
    <div>
      <section className="bg-blue-tint py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="section-eyebrow mb-3">Contact</p>
          <h1 className="text-4xl font-bold text-blue-dark max-w-2xl">Get in touch</h1>
          <p className="mt-4 text-ink/70 max-w-xl">
            Questions about a service or need help choosing a slot? Reach out and our team
            will call you back.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-blue-dark mb-6">Reach us directly</h2>
          <ul className="space-y-5 text-ink/80">
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-brown" />
              <a href="tel:07947461557" className="font-semibold hover:text-blue">07947461557</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-brown" />
              <a href="tel:09035046648" className="font-semibold hover:text-blue">09035046648</a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={20} className="text-brown" />
              9:00 AM – 8:00 PM, All Days
            </li>
            <li className="flex items-center gap-3">
              <Instagram size={20} className="text-brown" />
              <a href="https://instagram.com/apexpetclinic" className="font-semibold hover:text-blue">@apexpetclinic</a>
            </li>
            <li className="flex items-center gap-3">
              <Facebook size={20} className="text-brown" />
              <span className="font-semibold">Apex Pet Clinic</span>
            </li>
          </ul>

          <div className="mt-10 space-y-4">
            {branches.map((b) => (
              <div key={b.name} className="rounded-card overflow-hidden shadow-card aspect-video relative">
                <iframe
                  title={b.name}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(b.mapQuery)}&z=15&output=embed`}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-dark mb-6">Send us a message</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

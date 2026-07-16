import { MapPin, Phone, Clock, Accessibility } from "lucide-react";
import { branches } from "@/lib/branches";

export const metadata = { title: "Branches | Apex Pet Clinic" };

export default function BranchesPage() {
  return (
    <div>
      <section className="bg-blue-tint py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="section-eyebrow mb-3">Branches</p>
          <h1 className="text-4xl font-bold text-blue-dark max-w-2xl">Find us in Kazipet</h1>
          <p className="mt-4 text-ink/70 max-w-xl">
            Two convenient locations in Kazipet, Warangal — both open 9 AM to 8 PM, every day of the week.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-8">
        {branches.map((b) => (
          <div key={b.name} className="rounded-card border border-blue-tint shadow-card overflow-hidden">
            <div className="relative aspect-video">
              <iframe
                title={b.name}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(b.mapQuery)}&z=15&output=embed`}
              />
            </div>
            <div className="p-7">
              <h2 className="text-xl font-bold text-blue-dark">{b.name}</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink/80">
                <li className="flex gap-2">
                  <MapPin size={18} className="text-brown shrink-0 mt-0.5" />
                  {b.address}
                </li>
                <li className="flex gap-2">
                  <Clock size={18} className="text-brown shrink-0 mt-0.5" />
                  {b.hours}
                </li>
                {b.phones.map((p) => (
                  <li key={p} className="flex gap-2">
                    <Phone size={18} className="text-brown shrink-0 mt-0.5" />
                    <a href={`tel:${p}`} className="hover:text-blue">{p}</a>
                  </li>
                ))}
                <li className="flex gap-2">
                  <Accessibility size={18} className="text-brown shrink-0 mt-0.5" />
                  Wheelchair accessible parking, entrance & exit
                </li>
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

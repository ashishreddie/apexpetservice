import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import ServiceIconsRow from "@/components/ServiceIconsRow";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { reviews, ratingSummary } from "@/lib/reviews";
import { Star, ShieldCheck, MapPin } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceIconsRow />

      {/* About teaser */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-card overflow-hidden shadow-card relative aspect-[4/3]">
          <Image
            src="https://placedog.net/900/700?id=19"
            alt="Doctor examining a dog at Apex Pet Clinic"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="section-eyebrow mb-3">About Apex Pet Clinic</p>
          <h2 className="text-3xl font-bold text-blue-dark">
            Friendly doctors your pets will actually be happy to see.
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            For over a decade, our team of experienced and professional doctors has cared
            for pets across Kazipet and Warangal — from routine check-ups to major surgery.
            Both branches are wheelchair accessible, with dedicated parking for every visit.
          </p>
          <div className="paw-divider my-6" />
          <ul className="space-y-3 text-sm font-semibold text-ink/80">
            <li className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-blue" /> Established in 2011
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-blue" /> Wheelchair accessible entrance & parking
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-blue" /> Wide variety of pet food at reasonable prices
            </li>
          </ul>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center rounded-full bg-blue-dark px-6 py-3 font-bold text-white hover:bg-blue transition-colors"
          >
            Learn more about us
          </Link>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-brown-tint/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="section-eyebrow mb-3">What we offer</p>
            <h2 className="text-3xl font-bold text-blue-dark">Care for every stage of your pet's life</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border-2 border-blue px-7 py-3 font-bold text-blue hover:bg-blue hover:text-white transition-colors"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="section-eyebrow mb-3">Loved by pet parents</p>
            <h2 className="text-3xl font-bold text-blue-dark">What our clients say</h2>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-blue-tint px-5 py-3 font-bold text-blue-dark">
            <Star size={20} className="fill-brown text-brown" />
            {ratingSummary.average}★ · {ratingSummary.count}+ reviews on {ratingSummary.source}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-card border border-blue-tint p-6 shadow-card">
              <div className="flex gap-1 text-brown mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-brown text-brown" />
                ))}
              </div>
              <p className="text-sm text-ink/80 leading-relaxed">"{r.text}"</p>
              <p className="mt-4 text-sm font-bold text-blue-dark">{r.name}</p>
              <p className="text-xs text-ink/60">{r.pet}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-dark">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Ready to book a slot for your pet?
            </h2>
            <p className="mt-3 text-white/70 flex items-center gap-2">
              <MapPin size={18} className="text-brown-light" />
              Kazipet, Warangal — two branches, open 9 AM – 8 PM every day.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link
              href="/services"
              className="inline-flex items-center rounded-full bg-brown px-7 py-3.5 font-bold text-white hover:bg-brown-dark transition-colors"
            >
              Book Appointment
            </Link>
            <a
              href="tel:07947461557"
              className="inline-flex items-center rounded-full border-2 border-white px-7 py-3.5 font-bold text-white hover:bg-white hover:text-blue-dark transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

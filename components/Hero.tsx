import Link from "next/link";
import Image from "next/image";
import { Clock, Star, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-tint">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-eyebrow mb-4">Kazipet · Warangal · Since 2011</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-dark leading-tight">
            Compassionate care for your pets, day and night.
          </h1>
          <p className="mt-5 text-ink/70 text-lg max-w-md">
            Apex Pet Clinic brings experienced doctors, gentle grooming, and full pharmacy
            support to Kazipet — with online slot booking so you never have to wait.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center rounded-full bg-blue px-7 py-3.5 font-bold text-white hover:bg-blue-dark transition-colors shadow-soft"
            >
              Book Appointment
            </Link>
            <a
              href="tel:07947461557"
              className="inline-flex items-center rounded-full border-2 border-brown px-7 py-3.5 font-bold text-brown hover:bg-brown hover:text-white transition-colors"
            >
              Call Now
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm font-semibold text-ink/80">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-blue" />
              Open 9 AM – 8 PM, All Days
            </div>
            <div className="flex items-center gap-2">
              <Star size={18} className="fill-brown text-brown" />
              4.5★ on Justdial (290+ reviews)
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-blue" />
              Serving pets since 2011
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-card overflow-hidden shadow-card aspect-[4/3] relative">
            <Image
              src="https://placedog.net/900/700?id=7"
              alt="A happy dog cared for at Apex Pet Clinic"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-40 h-32 rounded-card overflow-hidden shadow-card border-4 border-white hidden sm:block">
            <Image
              src="https://placekitten.com/400/320"
              alt="A cat cared for at Apex Pet Clinic"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

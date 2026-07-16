import Image from "next/image";
import { Accessibility, Award, HeartHandshake, ShieldCheck } from "lucide-react";

export const metadata = { title: "About Us | Apex Pet Clinic" };

const values = [
  {
    icon: Award,
    title: "Experienced doctors",
    text: "Our professional veterinarians bring years of hands-on experience across grooming, surgery, and general medicine.",
  },
  {
    icon: HeartHandshake,
    title: "Friendly staff",
    text: "Every pet is greeted like family, and every owner gets clear, patient explanations at each step.",
  },
  {
    icon: Accessibility,
    title: "Accessible by design",
    text: "Wheelchair accessible parking, entrance, and exit at our Kazipet branch, so every visitor is welcome.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted since 2011",
    text: "Over a decade of care in Warangal, backed by a 4.5★ rating from 290+ reviews.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-blue-tint py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="section-eyebrow mb-3">About Us</p>
          <h1 className="text-4xl font-bold text-blue-dark max-w-2xl">
            Fourteen years of caring for Warangal's pets
          </h1>
          <p className="mt-4 text-ink/70 max-w-xl">
            Apex Pet Clinic has been a fixture in Kazipet since 2011 — grown from a single
            consulting room into a full-service clinic with grooming, boarding, surgery,
            and a well-stocked pharmacy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-card overflow-hidden shadow-card relative aspect-square">
            <Image src="https://placedog.net/500/500?id=61" alt="Dog patient" fill className="object-cover" />
          </div>
          <div className="rounded-card overflow-hidden shadow-card relative aspect-square mt-8">
            <Image src="https://placekitten.com/501/501" alt="Cat patient" fill className="object-cover" />
          </div>
          <div className="rounded-card overflow-hidden shadow-card relative aspect-square -mt-8">
            <Image src="https://placedog.net/502/502?id=63" alt="Puppy at the clinic" fill className="object-cover" />
          </div>
          <div className="rounded-card overflow-hidden shadow-card relative aspect-square">
            <Image src="https://placekitten.com/503/503" alt="Kitten at the clinic" fill className="object-cover" />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-blue-dark">Our story</h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            What started as a small veterinary practice near Waddepally Church has grown into
            two branches serving Kazipet and the wider Warangal area. We built Apex around a
            simple idea: pet care should be thorough, honest, and available whenever it's needed
            — which is why we stay open every single day.
          </p>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Today, our clinic offers grooming, boarding, consultations, vaccinations, surgery,
            training, pet walking, and an in-house pharmacy stocked with a wide variety of pet
            food at reasonable prices.
          </p>
        </div>
      </section>

      <section className="bg-brown-tint/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-blue-dark text-center mb-12">Why pet parents choose us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-card p-6 shadow-card">
                <span className="w-11 h-11 grid place-items-center rounded-full bg-blue-tint text-blue mb-4">
                  <Icon size={20} />
                </span>
                <h3 className="font-bold text-blue-dark">{title}</h3>
                <p className="text-sm text-ink/70 mt-2 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

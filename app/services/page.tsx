import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";

export const metadata = { title: "Services | Apex Pet Clinic" };

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-blue-tint py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="section-eyebrow mb-3">Services</p>
          <h1 className="text-4xl font-bold text-blue-dark max-w-2xl">
            Everything your pet needs, under one roof
          </h1>
          <p className="mt-4 text-ink/70 max-w-xl">
            Pick a service below to see open slots and book a time that works for you.
            We'll confirm your booking and our team will be ready when you arrive.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
    </div>
  );
}

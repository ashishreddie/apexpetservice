import { notFound } from "next/navigation";
import Image from "next/image";
import { services, getServiceBySlug } from "@/lib/services";
import { iconMap } from "@/lib/iconMap";
import BookingForm from "@/components/BookingForm";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  return { title: service ? `${service.name} | Apex Pet Clinic` : "Service | Apex Pet Clinic" };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  const Icon = iconMap[service.icon];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-12">
      <div>
        <span className="w-14 h-14 grid place-items-center rounded-full bg-brown-tint text-brown mb-5">
          <Icon size={26} />
        </span>
        <p className="section-eyebrow mb-2">{service.tagline}</p>
        <h1 className="text-4xl font-bold text-blue-dark">{service.name}</h1>
        <p className="mt-4 text-ink/70 leading-relaxed max-w-md">{service.description}</p>

        <div className="rounded-card overflow-hidden shadow-card relative aspect-[4/3] mt-8">
          <Image src={service.image} alt={service.name} fill className="object-cover" />
        </div>

        <div className="mt-8 rounded-card bg-blue-tint p-6 text-sm text-ink/80">
          <p className="font-bold text-blue-dark mb-1">Good to know</p>
          <p>
            {service.petNameOptional
              ? "Pet's name is optional for this booking — feel free to leave it blank if it's not decided yet."
              : "Please share your pet's name so our doctors can prepare before your visit."}
          </p>
        </div>
      </div>

      <div>
        <BookingForm service={service} />
      </div>
    </div>
  );
}

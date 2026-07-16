import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/lib/services";
import { iconMap } from "@/lib/iconMap";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];

  return (
    <div className="group rounded-card border border-blue-tint bg-white p-7 shadow-card hover:-translate-y-1 hover:shadow-soft transition-all">
      <span className="w-12 h-12 grid place-items-center rounded-full bg-brown-tint text-brown mb-5">
        <Icon size={22} />
      </span>
      <h3 className="text-lg font-bold text-blue-dark">{service.name}</h3>
      <p className="text-sm text-brown font-semibold mt-1">{service.tagline}</p>
      <p className="text-sm text-ink/70 mt-3 leading-relaxed">{service.description}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-blue group-hover:gap-2.5 transition-all"
      >
        Book a slot <ArrowRight size={16} />
      </Link>
    </div>
  );
}

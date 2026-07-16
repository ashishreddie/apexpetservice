import Link from "next/link";
import { Scissors, Home, Syringe, Activity, Pill } from "lucide-react";

const items = [
  { icon: Scissors, label: "Grooming", href: "/services/grooming" },
  { icon: Home, label: "Boarding", href: "/services/boarding" },
  { icon: Syringe, label: "Vaccination", href: "/services/vaccination" },
  { icon: Activity, label: "Surgery", href: "/services/surgery" },
  { icon: Pill, label: "Pharmacy", href: "/services/pharmacy" },
];

export default function ServiceIconsRow() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 -mt-8 relative z-10">
      <div className="bg-white rounded-card shadow-card grid grid-cols-2 sm:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-blue-tint">
        {items.map(({ icon: Icon, label, href }) => (
          <Link
            key={label}
            href={href}
            className="flex flex-col items-center justify-center gap-2 py-6 px-3 hover:bg-blue-tint/50 transition-colors"
          >
            <span className="w-11 h-11 grid place-items-center rounded-full bg-blue-tint text-blue">
              <Icon size={20} />
            </span>
            <span className="text-sm font-bold text-ink">{label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

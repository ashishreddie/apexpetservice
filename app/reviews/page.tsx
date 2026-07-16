import { Star } from "lucide-react";
import { reviews, ratingSummary } from "@/lib/reviews";

export const metadata = { title: "Reviews | Apex Pet Clinic" };

export default function ReviewsPage() {
  return (
    <div>
      <section className="bg-blue-tint py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="section-eyebrow mb-3">Reviews</p>
          <h1 className="text-4xl font-bold text-blue-dark max-w-2xl">What pet parents say</h1>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-blue-dark shadow-card">
            <Star size={20} className="fill-brown text-brown" />
            {ratingSummary.average}★ average · {ratingSummary.count}+ reviews on {ratingSummary.source}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid sm:grid-cols-2 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="rounded-card border border-blue-tint p-7 shadow-card">
            <div className="flex gap-1 text-brown mb-3">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} size={18} className="fill-brown text-brown" />
              ))}
            </div>
            <p className="text-ink/80 leading-relaxed">"{r.text}"</p>
            <p className="mt-4 font-bold text-blue-dark">{r.name}</p>
            <p className="text-sm text-ink/60">{r.pet}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

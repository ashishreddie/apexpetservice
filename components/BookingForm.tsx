"use client";

import { useState } from "react";
import { CalendarDays, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { Service, timeSlots } from "@/lib/services";

export default function BookingForm({ service }: { service: Service }) {
  const [name, setName] = useState("");
  const [petName, setPetName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [notes, setNotes] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const today = new Date().toISOString().split("T")[0];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!name || !phone || !date || !slot) {
      setErrorMsg("Please fill in your name, phone number, date, and a time slot.");
      return;
    }
    if (!service.petNameOptional && !petName) {
      setErrorMsg("Please enter your pet's name for this service.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: service.name,
          name,
          petName: petName || "Not provided",
          phone,
          date,
          slot,
          notes,
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong sending your booking. Please call us instead.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-card border-2 border-blue bg-blue-tint p-8 text-center">
        <CheckCircle2 size={40} className="mx-auto text-blue mb-3" />
        <h3 className="text-xl font-bold text-blue-dark">Slot requested!</h3>
        <p className="text-ink/70 mt-2 text-sm">
          We've sent your booking details to our team. We'll confirm your{" "}
          <span className="font-semibold">{service.name}</span> slot on{" "}
          <span className="font-semibold">{date}</span> at{" "}
          <span className="font-semibold">{slot}</span> shortly. If it's urgent, call us at{" "}
          <a href="tel:07947461557" className="text-blue font-bold">07947461557</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-card border border-blue-tint bg-white p-7 shadow-card space-y-5">
      <div className="paw-divider">
        <span className="text-xs font-bold uppercase tracking-wide">Book {service.name}</span>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-bold text-ink mb-1.5" htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-blue-tint px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue"
            placeholder="e.g. Ramesh Reddy"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-ink mb-1.5" htmlFor="petName">
            Pet's name{" "}
            <span className="text-ink/50 font-medium">
              {service.petNameOptional ? "(optional)" : ""}
            </span>
          </label>
          <input
            id="petName"
            type="text"
            required={!service.petNameOptional}
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            className="w-full rounded-lg border border-blue-tint px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue"
            placeholder="e.g. Bruno"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-ink mb-1.5" htmlFor="phone">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg border border-blue-tint px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue"
            placeholder="10-digit mobile number"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-ink mb-1.5" htmlFor="date">
            <span className="inline-flex items-center gap-1.5"><CalendarDays size={15} /> Preferred date</span>
          </label>
          <input
            id="date"
            type="date"
            required
            min={today}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-lg border border-blue-tint px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-ink mb-2">
          <span className="inline-flex items-center gap-1.5"><Clock size={15} /> Preferred time slot (9 AM – 8 PM)</span>
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
          {timeSlots.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setSlot(t)}
              className={`rounded-lg border px-3 py-2.5 text-sm font-semibold transition-colors ${
                slot === t
                  ? "bg-blue text-white border-blue"
                  : "border-blue-tint text-ink hover:border-blue"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-ink mb-1.5" htmlFor="notes">
          Notes for the doctor <span className="text-ink/50 font-medium">(optional)</span>
        </label>
        <textarea
          id="notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full rounded-lg border border-blue-tint px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue"
          placeholder="Anything we should know before your visit"
        />
      </div>

      {errorMsg && (
        <p className="text-sm font-semibold text-red-600 bg-red-50 rounded-lg px-4 py-2.5">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 rounded-full bg-brown text-white font-bold py-3.5 hover:bg-brown-dark transition-colors disabled:opacity-60"
      >
        {status === "submitting" && <Loader2 size={18} className="animate-spin" />}
        {status === "submitting" ? "Sending..." : "Confirm booking"}
      </button>
    </form>
  );
}

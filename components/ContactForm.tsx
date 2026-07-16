"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !phone || !message) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-card border-2 border-blue bg-blue-tint p-8 text-center">
        <CheckCircle2 size={40} className="mx-auto text-blue mb-3" />
        <h3 className="text-xl font-bold text-blue-dark">Message sent!</h3>
        <p className="text-ink/70 mt-2 text-sm">We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-card border border-blue-tint bg-white p-7 shadow-card space-y-5">
      <div>
        <label className="block text-sm font-bold text-ink mb-1.5">Name</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-blue-tint px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-ink mb-1.5">Phone</label>
        <input
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-lg border border-blue-tint px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-ink mb-1.5">
          Email <span className="text-ink/50 font-medium">(optional)</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-blue-tint px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-ink mb-1.5">Message</label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-blue-tint px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue"
        />
      </div>
      {status === "error" && (
        <p className="text-sm font-semibold text-red-600 bg-red-50 rounded-lg px-4 py-2.5">
          Something went wrong. Please call us instead.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 rounded-full bg-blue text-white font-bold py-3.5 hover:bg-blue-dark transition-colors disabled:opacity-60"
      >
        {status === "submitting" && <Loader2 size={18} className="animate-spin" />}
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

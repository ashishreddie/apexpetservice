import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:07947461557"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-brown text-white pl-4 pr-5 py-3 shadow-soft hover:bg-brown-dark transition-colors font-bold text-sm"
      aria-label="Call Apex Pet Clinic now"
    >
      <Phone size={18} />
      <span className="hidden sm:inline">Call Now</span>
    </a>
  );
}

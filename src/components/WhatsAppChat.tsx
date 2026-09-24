import { MessageCircle } from "lucide-react";
import { contact } from "../data/site";

export function WhatsAppChat() {
    const phone = contact.phone.replace(/\D/g, "").replace(/^0/, "33");
    const message = encodeURIComponent(
        "Bonjour MLC Head Spa, je souhaite obtenir des informations et réserver un rituel."
    );

    return (
        <a
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Discuter et réserver sur WhatsApp"
            className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <span className="absolute inset-0 animate-ping rounded-full bg-white/25" />
                <MessageCircle size={21} strokeWidth={2.5} aria-hidden="true" />
            </span>
            <span className="hidden sm:inline">Réserver sur WhatsApp</span>
        </a>
    );
}

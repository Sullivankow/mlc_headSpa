import { Star } from "lucide-react";

export function GiftTopBar() {
    const announcement =
        "En attendant notre ouverture en janvier 2027, anticipez les fêtes de Noël : offrez une carte cadeau à vos proches. Réservez dès maintenant !";

    return (
        <a
            className="gift-top-bar"
            href="#contact"
            aria-label={`${announcement} Aller aux coordonnées`}
        >
            <span className="gift-top-bar__track" aria-hidden="true">
                {[0, 1].map((copy) => (
                    <span className="gift-top-bar__message" key={copy}>
                        <Star size={14} className="text-[#d9bd75]" fill="currentColor" />
                        <span>{announcement}</span>
                        <Star size={14} className="text-[#d9bd75]" fill="currentColor" />
                    </span>
                ))}
            </span>
            <span className="sr-only">{announcement}</span>
        </a>
    );
}
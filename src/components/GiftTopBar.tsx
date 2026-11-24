import { ArrowRight, Gift, Star } from "lucide-react";

export function GiftTopBar() {
    const announcement =
        "En attendant notre ouverture en janvier 2027, anticipez les fêtes de Noël : offrez une carte cadeau à vos proches. Réservez dès maintenant !";

    return (
        <a className="gift-top-bar" href="#contact">
            <Gift size={15} aria-hidden="true" />
            <span className="gift-top-marquee">
                <span className="gift-top-track">
                    <span>{announcement}</span>
                    <span aria-hidden="true">{announcement}</span>
                </span>
            </span>
            <Star size={13} className="gift-top-star" fill="currentColor" aria-hidden="true" />
            <span className="gift-top-cta">En savoir plus <ArrowRight size={14} /></span>
        </a>
    );
}
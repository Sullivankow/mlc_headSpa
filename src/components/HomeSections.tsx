import {
    ArrowDown,
    ChevronDown,
    Gift,
    Heart,
    Leaf,
    Mail,
    MapPin,
    Phone,
    Sparkles,
} from "lucide-react";
import { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { contact, faqs, rituals } from "../data/site";

const heroImage =
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85";

export function HomeSections() {
    return (
        <>
            <HeroSection />
            <ExperienceSection />
            <RitualsSection />
            <FaqSection />
            <ContactSection />
        </>
    );
}

function HeroSection() {
    return (
        <section
            id="accueil"
            className="min-h-screen pt-44 flex items-center relative overflow-hidden"
        >
            <div
                className="absolute inset-0 bg-cover bg-center opacity-25"
                style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="container relative grid md:grid-cols-2 gap-12 items-center px-5 py-20">
                <div>
                    <p className="uppercase tracking-[.3em] text-xs gold font-semibold mb-5">
                        MLC Head Spa
                    </p>
                    <h1 className="serif text-5xl md:text-7xl leading-[1.05] mb-6">
                        L’art de ralentir.
                        <br />
                        <span className="gold">Le plaisir de prendre soin.</span>
                    </h1>
                    <p className="text-lg text-[#687064] max-w-lg leading-relaxed mb-8">
                        Un cocon de douceur dédié au cuir chevelu, aux massages et à
                        l’équilibre intérieur.
                    </p>
                    <div className="inline-flex items-center gap-3 rounded-full bg-[#68764f] text-white px-6 py-3 text-sm">
                        Ouverture prochaine en janvier 2027 <Sparkles size={17} />
                    </div>
                </div>
                <div className="rounded-[12rem_12rem_1rem_1rem] overflow-hidden shadow-2xl">
                    <img
                        src={heroImage}
                        alt="Ambiance relaxante de spa"
                        className="w-full h-[520px] object-cover"
                    />
                </div>
            </div>
            <a href="#experience" className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <ArrowDown className="gold" />
            </a>
        </section>
    );
}

function ExperienceSection() {
    return (
        <section id="experience" className="section">
            <div className="container">
                <SectionTitle
                    eyebrow="Une expérience sensorielle"
                    title="Un instant rien qu’à vous"
                    text="Chez MLC Head Spa, chaque détail est pensé pour vous offrir une pause précieuse, loin du rythme quotidien."
                />
                <div className="grid md:grid-cols-3 gap-6">
                    <Feature
                        icon={<Leaf />}
                        title="Nature & douceur"
                        text="Une atmosphère apaisante, des textures délicates et une approche respectueuse."
                    />
                    <Feature
                        icon={<Heart />}
                        title="Soin personnalisé"
                        text="Des rituels imaginés pour répondre à vos envies de détente et de lâcher-prise."
                    />
                    <Feature
                        icon={<Sparkles />}
                        title="Déconnexion profonde"
                        text="Un moment pour relâcher les tensions et retrouver une sensation d’harmonie."
                    />
                </div>
            </div>
        </section>
    );
}

function RitualsSection() {
    return (
        <section id="rituels" className="section bg-[#edf0e5]">
            <div className="container">
                <SectionTitle
                    eyebrow="Nos rituels"
                    title="Des parenthèses sur mesure"
                    text="Découvrez prochainement nos expériences Head Spa, pensées comme de véritables invitations à ralentir."
                />
                <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
                    {rituals.map((ritual, index) => (
                        <article
                            key={ritual.name}
                            className="bg-[#f8f7f0] p-8 rounded-[2rem] border border-[#c7cfb8]/50"
                        >
                            <p className="gold text-sm mb-4">0{index + 1}</p>
                            <h3 className="serif text-3xl mb-3">{ritual.name}</h3>
                            <p className="text-[#687064] min-h-20 leading-relaxed">
                                {ritual.desc}
                            </p>
                            <div className="border-t border-[#c7cfb8]/50 mt-6 pt-5 flex justify-between text-sm">
                                <span>{ritual.duration}</span>
                                <strong>{ritual.price}</strong>
                            </div>
                        </article>
                    ))}
                    <article className="grid w-full overflow-hidden rounded-[2rem] border border-[#c7cfb8]/50 bg-[#f8f7f0] md:col-span-2 md:grid-cols-[0.9fr_1.1fr]">
                        <img
                            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1200&q=85"
                            alt="Cadeau de Noël emballé avec un ruban"
                            className="h-56 w-full object-cover md:h-full md:min-h-72"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="p-7 md:p-8">
                            <p className="gold mb-3 text-sm">Pour les fêtes de Noël</p>
                            <h3 className="serif mb-3 text-3xl">Offrez une carte cadeau</h3>
                            <p className="mb-6 leading-relaxed text-[#687064]">
                                Faites plaisir à vos proches avec une parenthèse Head Spa. Anticipez dès maintenant une réservation avant notre ouverture en janvier 2027.
                            </p>
                            <GiftCardContactButton />
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

function GiftCardContactButton() {
    const [phoneVisible, setPhoneVisible] = useState(false);

    return (
        <>
            <button
                className="inline-flex items-center gap-2 rounded-full bg-[#68764f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#566342] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#68764f]"
                type="button"
                aria-expanded={phoneVisible}
                aria-controls="gift-card-phone"
                onClick={() => setPhoneVisible(!phoneVisible)}
            >
                <Gift size={17} aria-hidden="true" />
                {phoneVisible ? "Masquer le numéro" : "Demander une carte cadeau"}
            </button>
            {phoneVisible && (
                <div id="gift-card-phone" className="mt-5" aria-live="polite">
                    <p className="mb-1 text-sm text-[#687064]">
                        Appelez-nous pour votre carte cadeau et anticiper une réservation :
                    </p>
                    <a
                        className="inline-flex items-center gap-2 font-semibold text-[#344238] hover:text-[#68764f]"
                        href={`tel:${contact.phone.replaceAll(" ", "")}`}
                    >
                        <Phone size={17} aria-hidden="true" />
                        {contact.phone}
                    </a>
                </div>
            )}
        </>
    );
}

function FaqSection() {
    return (
        <section id="faq" className="section">
            <div className="container">
                <SectionTitle
                    eyebrow="Vos questions"
                    title="Tout savoir avant votre pause"
                    text="Quelques réponses pour vous aider à préparer votre première expérience chez MLC Head Spa."
                />
                <div className="max-w-3xl mx-auto border-t border-[#c7cfb8]/60">
                    {faqs.map((faq) => (
                        <details key={faq.question} className="group border-b border-[#c7cfb8]/60">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left serif text-xl [&::-webkit-details-marker]:hidden">
                                {faq.question}
                                <ChevronDown
                                    className="gold shrink-0 transition-transform group-open:rotate-180"
                                    size={20}
                                />
                            </summary>
                            <p className="max-w-2xl pb-5 pr-10 text-[#687064] leading-relaxed">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ContactSection() {
    return (
        <section id="contact" className="section bg-[#e4e9da]/55">
            <div className="container grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
                <SectionTitle
                    eyebrow="Restons en contact"
                    title="Votre parenthèse commence ici"
                    text="MLC Head Spa ouvrira ses portes en janvier 2027. Contactez-nous pour recevoir les prochaines informations et être informé de l’ouverture des réservations."
                />
                <div className="bg-[#f8f7f0] rounded-[2rem] p-8 md:p-10 shadow-sm border border-[#c7cfb8]/50">
                    <p className="uppercase tracking-[.25em] text-xs gold font-semibold mb-6">
                        Informations pratiques
                    </p>
                    <div className="space-y-5">
                        <ContactDetail
                            href={`tel:${contact.phone.replaceAll(" ", "")}`}
                            icon={<Phone size={18} />}
                            label="Par téléphone"
                            value={contact.phone}
                        />
                        <ContactDetail
                            href={`mailto:${contact.email}`}
                            icon={<Mail size={18} />}
                            label="Par e-mail"
                            value={contact.email}
                        />
                        <ContactDetail
                            icon={<MapPin size={18} />}
                            label="Notre adresse"
                            value={contact.address}
                        />
                    </div>
                    <div className="border-t border-[#c7cfb8]/60 mt-8 pt-6 text-sm text-[#687064]">
                        Ouverture prévue en <strong className="text-[#344238]">{contact.opening}</strong>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactDetail({
    href,
    icon,
    label,
    value,
}: {
    readonly href?: string;
    readonly icon: React.ReactNode;
    readonly label: string;
    readonly value: string;
}) {
    const content = (
        <>
            <span className="contact-icon">{icon}</span>
            <span>
                <strong className="block mb-1">{label}</strong>
                <span className="text-[#687064] group-hover:text-[#68764f] transition">
                    {value}
                </span>
            </span>
        </>
    );

    return href ? (
        <a className="flex items-start gap-4 group" href={href}>
            {content}
        </a>
    ) : (
        <div className="flex items-start gap-4">{content}</div>
    );
}

function Feature({
    icon,
    title,
    text,
}: {
    readonly icon: React.ReactNode;
    readonly title: string;
    readonly text: string;
}) {
    return (
        <div className="text-center p-6">
            <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-[#e4e9da] flex items-center justify-center gold">
                {icon}
            </div>
            <h3 className="serif text-2xl mb-3">{title}</h3>
            <p className="text-[#687064] leading-relaxed">{text}</p>
        </div>
    );
}

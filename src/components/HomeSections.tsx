import {
    Activity,
    ArrowDown,
    ArrowRight,
    ChevronDown,
    Droplets,
    Flower2,
    Gift,
    Heart,
    Leaf,
    Mail,
    MapPin,
    Phone,
    Sparkles,
    type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { about, benefits, contact, faqs, products, rituals } from "../data/site";
import soinImage from "../assets/soin.webp";

const storyImage =
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85";

// La clé d’icône est indépendante de l’ordre des bénéfices dans les données.
const benefitIcons: Record<(typeof benefits)[number]["icon"], LucideIcon> = {
    droplets: Droplets,
    circulation: Activity,
    nourish: Sparkles,
    release: Flower2,
    relax: Heart,
};

export function HomeSections() {
    return (
        <>
            <HeroSection />
            <ExperienceSection />
            <BenefitsSection />
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
            className="hero-section relative flex min-h-[calc(100svh-2.5rem)] items-center overflow-hidden px-5 pb-16 pt-36 md:pb-20 md:pt-40"
        >
            <div className="hero-leaf hero-leaf--one" aria-hidden="true"><Leaf /></div>
            <div className="hero-leaf hero-leaf--two" aria-hidden="true"><Leaf /></div>
            <div className="container relative grid items-center gap-12 md:grid-cols-[1.02fr_0.98fr] md:gap-16">
                <div className="hero-copy relative z-10 py-8 md:py-12">
                    <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-[var(--color-olive)]">
                        <span className="h-px w-8 bg-[var(--color-gold)]" /> MLC Head Spa
                    </p>
                    <h1 className="display-serif mb-6 max-w-2xl text-[clamp(3.2rem,7vw,6.1rem)] leading-[.94]">
                        Votre nouvelle escale <em className="text-[var(--color-olive)]">bien-être.</em>
                    </h1>
                    <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--color-muted)] md:text-xl">
                        Un moment unique pour prendre soin de vous et lâcher prise.
                        Découvrez le Head Spa, un rituel de détente profonde dédié au cuir chevelu.
                    </p>
                    <div className="mb-8 flex flex-wrap gap-3 text-sm text-[var(--color-ink)]">
                        <span className="hero-benefit"><Flower2 size={17} /> Détente profonde</span>
                        <span className="hero-benefit"><Sparkles size={17} /> Équilibre mental</span>
                        <span className="hero-benefit"><Heart size={17} /> Bien-être global</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a className="button-primary" href="#rituels">
                            Découvrir les rituels <ArrowRight size={17} />
                        </a>
                        <a className="button-secondary" href={`tel:${contact.phone.replaceAll(" ", "")}`}>
                            Nous contacter
                        </a>
                    </div>
                    <p className="mt-5 text-xs font-medium uppercase tracking-[.16em] text-[var(--color-olive)]">
                        Ouverture prévue en janvier 2027
                    </p>
                </div>
                <div className="hero-visual relative mx-auto w-full max-w-[540px]">
                    <div className="hero-image-frame relative overflow-hidden">
                        <img
                            src={soinImage}
                            alt="Soin Head Spa avec rinçage relaxant du cuir chevelu"
                            className="h-[420px] w-full object-cover sm:h-[520px] md:h-[600px]"
                            fetchPriority="high"
                        />
                        <div className="hero-image-wash" aria-hidden="true" />
                    </div>
                    <div className="hero-image-caption">
                        <span className="hero-caption-mark"><Sparkles size={18} /></span>
                        <span><strong>Un instant rien qu’à vous</strong><small>Détente · Beauté · Équilibre</small></span>
                    </div>
                    <span className="hero-seal" aria-hidden="true">Adulte<br /><small>et enfant</small></span>
                </div>
            </div>
            <a href="#experience" aria-label="Découvrir le Head Spa" className="hero-scroll absolute bottom-5 left-1/2 -translate-x-1/2 md:bottom-7">
                <ArrowDown size={18} />
            </a>
        </section>
    );
}

function ExperienceSection() {
    return (
        <section id="experience" className="section about-section">
            <div className="container relative">
                <span className="botanical-mark" aria-hidden="true"><Leaf /><Leaf /><Leaf /></span>
                <div className="about-intro">
                    <figure className="about-image">
                        <img
                            src={storyImage}
                            alt="Un espace de spa chaleureux dédié à la détente"
                            loading="lazy"
                            decoding="async"
                        />
                        <figcaption>Détente · Beauté · Équilibre</figcaption>
                    </figure>
                    <SectionTitle
                        eyebrow="À propos"
                        title="L’histoire du Head Spa"
                        text={about}
                    />
                </div>
            </div>
        </section>
    );
}

function BenefitsSection() {
    return (
        <section id="bienfaits" className="section benefits-section">
            <span className="benefits-leaves benefits-leaves--left" aria-hidden="true">
                <Leaf /><Leaf /><Leaf />
            </span>
            <span className="benefits-leaves benefits-leaves--right" aria-hidden="true">
                <Leaf /><Leaf /><Leaf />
            </span>
            <div className="container relative z-10">
                <SectionTitle
                    eyebrow="Une parenthèse de bien-être"
                    title="Les bienfaits du Head Spa"
                    text="Bien plus qu’un simple soin, le Head Spa associe massages relaxants et soins nourrissants pour prendre soin du cuir chevelu."
                />
                <ul className="benefit-list">
                    {benefits.map((benefit) => {
                        const Icon = benefitIcons[benefit.icon];

                        return (
                            <li className="benefit-item" key={benefit.title}>
                                <span className="benefit-icon" aria-hidden="true">
                                    <Icon size={27} strokeWidth={1.6} />
                                </span>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </li>
                        );
                    })}
                </ul>
                <p className="benefits-signoff">
                    Chez MLC Head Spa, chaque séance est une invitation à ralentir,
                    à se ressourcer et à prendre soin de soi. Offrez-vous une pause,
                    vous la méritez !
                </p>
            </div>
        </section>
    );
}

function RitualsSection() {
    return (
        <section id="rituels" className="section rituals-section">
            <div className="container">
                <SectionTitle
                    eyebrow="Nos rituels"
                    title="Des parenthèses de douceur"
                    text="Chaque rituel est pensé comme une invitation à ralentir et à profiter d’un moment rien qu’à vous."
                />
                <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {rituals.map((ritual, index) => (
                        <article
                            key={ritual.name}
                            className="ritual-card flex flex-col p-6 md:p-8"
                        >
                            <p className="gold mb-3 text-sm">0{index + 1}</p>
                            <h3 className="serif mb-3 text-3xl">{ritual.name}</h3>
                            <p className="mb-5 leading-relaxed text-[#687064]">
                                {ritual.description}
                            </p>
                            {ritual.ageGuidance && (
                                <p className="mb-5 rounded-lg bg-[var(--color-sage)] px-4 py-3 text-sm text-[var(--color-ink)]">
                                    {ritual.ageGuidance}
                                </p>
                            )}
                            <ol className="space-y-5">
                                {ritual.phases.map((phase, phaseIndex) => (
                                    <li key={phase.title} className="border-t border-[#c7cfb8]/50 pt-4">
                                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                                            <h4 className="font-semibold text-[#344238]">
                                                {phaseIndex + 1}. {phase.title}
                                            </h4>
                                            {phase.duration && (
                                                <span className="text-sm text-[#687064]">
                                                    {phase.duration}
                                                </span>
                                            )}
                                        </div>
                                        {phase.description && (
                                            <p className="mt-2 text-sm leading-relaxed text-[#687064]">
                                                {phase.description}
                                            </p>
                                        )}
                                        {phase.details && (
                                            <ul className="mt-3 space-y-2 pl-4 text-sm leading-relaxed text-[#687064]">
                                                {phase.details.map((detail) => (
                                                    <li key={detail} className="list-disc">{detail}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ol>
                            <p className="mt-5 leading-relaxed text-[#687064]">
                                {ritual.closing}
                            </p>
                            <dl className="mt-auto grid grid-cols-2 overflow-hidden rounded-lg border border-[#c7cfb8]/70 bg-[#f0f3e9]">
                                <div className="p-4">
                                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#687064]">
                                        Durée
                                    </dt>
                                    <dd className="serif mt-1 text-2xl font-semibold leading-none text-[#344238]">
                                        {ritual.duration}
                                    </dd>
                                </div>
                                <div className="border-l border-[#c7cfb8]/70 p-4">
                                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#687064]">
                                        Tarif
                                    </dt>
                                    <dd className="mt-1 text-2xl font-bold leading-none text-[#526946]">
                                        {ritual.price}
                                    </dd>
                                </div>
                            </dl>
                        </article>
                    ))}
                    <article className="gift-card grid w-full overflow-hidden md:col-span-2 md:grid-cols-[0.9fr_1.1fr] lg:col-span-3">
                        <img
                            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1200&q=85"
                            alt="Cadeau de Noël emballé avec un ruban"
                            className="h-56 w-full object-cover md:h-full md:min-h-72"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="p-7 md:p-8">
                            <p className="gold mb-3 text-sm">Une attention qui fait du bien</p>
                            <h3 className="serif mb-3 text-3xl">Offrez une carte cadeau</h3>
                            <p className="mb-6 leading-relaxed text-[#687064]">
                                Faites plaisir à vos proches avec une parenthèse Head Spa. Les cartes cadeaux sont disponibles avant notre ouverture en janvier 2027.
                            </p>
                            <GiftCardContactButton />
                        </div>
                    </article>
                </div>
                <div className="products-panel mx-auto mt-16 max-w-6xl pt-10">
                    <div className="mx-auto mb-8 max-w-2xl text-center">
                        <p className="gold mb-2 text-sm font-semibold uppercase tracking-[0.16em]">
                            Les essentiels du rituel
                        </p>
                        <h3 className="serif mb-3 text-3xl text-[#203b2c]">
                            Les produits utilisés pendant le soin
                        </h3>
                        <p className="leading-relaxed text-[#687064]">
                            Chaque produit est sélectionné avec attention afin de respecter les
                            besoins du cuir chevelu.
                        </p>
                    </div>
                    {/* Les textes et les visuels restent regroupés dans les données products. */}
                    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <li
                                key={product.name}
                                className="overflow-hidden rounded-lg border border-[#c7cfb8]/60 bg-[#fffdf8] shadow-[0_8px_24px_rgba(32,59,44,0.06)]"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="aspect-[16/9] w-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                />
                                <div className="p-5">
                                    <h4 className="serif mb-2 text-2xl text-[#344238]">
                                        {product.name}
                                    </h4>
                                    <p className="text-sm leading-relaxed text-[#687064]">
                                        {product.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
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
        <section id="faq" className="section faq-section">
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
        <section id="contact" className="section contact-section">
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


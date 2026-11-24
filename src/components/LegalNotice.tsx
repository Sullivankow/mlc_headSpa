import { ArrowLeft } from "lucide-react";
import { contact } from "../data/site";
import { SectionTitle } from "./SectionTitle";

export function LegalNotice() {
    return (
        <main className="pt-20">
            <section className="section">
                <div className="container max-w-3xl">
                    <a
                        href="#accueil"
                        className="inline-flex items-center gap-2 text-sm gold mb-10 hover:underline"
                    >
                        <ArrowLeft size={16} /> Retour à l’accueil
                    </a>
                    <SectionTitle
                        eyebrow="Informations légales"
                        title="Mentions légales"
                        text="Informations relatives à l’activité et à l’édition du site MLC Head Spa."
                    />
                    <div className="space-y-8 text-[#687064] leading-relaxed">
                        <LegalBlock title="Éditeur du site">
                            <p><strong className="text-[#344238]">MLC Head Spa</strong></p>
                            <p>SIRET : 79107636700022</p>
                            <p>Responsable de la publication : Marie Laurent</p>
                            <p>Adresse : {contact.address}</p>
                            <p>Téléphone : {contact.phone}</p>
                            <p>E-mail : {contact.email}</p>
                        </LegalBlock>
                        <LegalBlock title="Hébergement">
                            <p><strong className="text-[#344238]">Vercel Inc.</strong></p>
                            <p>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                            <p>Ces informations d’hébergement sont provisoires.</p>
                        </LegalBlock>
                        <LegalBlock title="Propriété intellectuelle">
                            <p>
                                L’ensemble des contenus présents sur ce site, notamment les textes,
                                images, éléments graphiques et logo, est réservé à MLC Head Spa,
                                sauf mention contraire. Toute reproduction ou représentation non
                                autorisée est interdite.
                            </p>
                        </LegalBlock>
                        <LegalBlock title="Données personnelles">
                            <p>
                                Les coordonnées transmises par e-mail ou téléphone sont utilisées
                                uniquement pour répondre aux demandes de contact. Aucune donnée
                                n’est vendue ou cédée à des tiers. Les informations définitives
                                relatives à la protection des données seront précisées avant
                                l’ouverture.
                            </p>
                        </LegalBlock>
                    </div>
                    <p className="mt-12 text-xs text-[#687064] border-t border-[#c7cfb8]/60 pt-5">
                        Dernière mise à jour : septembre 2026 · Document provisoire
                    </p>
                </div>
            </section>
        </main>
    );
}

function LegalBlock({
    title,
    children,
}: {
    readonly title: string;
    readonly children: React.ReactNode;
}) {
    return (
        <section>
            <h2 className="serif text-2xl text-[#344238] mb-3">{title}</h2>
            {children}
        </section>
    );
}

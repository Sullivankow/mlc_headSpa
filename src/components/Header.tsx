import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo3.webp";
import { contact } from "../data/site";
import { GiftTopBar } from "./GiftTopBar";

const navigationLinks = [
    ["Accueil", "#accueil"],
    ["À propos", "#experience"],
    ["Les rituels", "#rituels"],
    ["Contact", "#contact"],
] as const;

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <GiftTopBar />
            <header className="site-header">
                {/* Colonnes latérales égales : le logo reste centré malgré les liens. */}
                <div className="site-header__layout">
                    <div className="site-header__side site-header__left">
                        <nav className="site-header__nav" aria-label="Navigation principale, première partie">
                            {navigationLinks.slice(0, 2).map(([label, href]) => (
                                <a className="site-nav-link" href={href} key={href}>
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <a className="site-header__logo" href="#accueil" aria-label="MLC Head Spa, accueil">
                        <img
                            src={logo}
                            className="h-16 w-16 object-contain md:h-[4.5rem] md:w-[4.5rem]"
                            alt="Logo MLC Head Spa"
                        />
                    </a>

                    <div className="site-header__side site-header__right">
                        <nav className="site-header__nav" aria-label="Navigation principale, deuxième partie">
                            {navigationLinks.slice(2).map(([label, href]) => (
                                <a className="site-nav-link" href={href} key={href}>
                                    {label}
                                </a>
                            ))}
                        </nav>
                        <button
                            className="menu-toggle"
                            type="button"
                            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-navigation"
                        >
                            {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <nav id="mobile-navigation" aria-label="Navigation mobile" className="mobile-navigation">
                        {navigationLinks.map(([label, href]) => (
                            <a
                                className="site-nav-link"
                                href={href}
                                key={href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {label}
                            </a>
                        ))}
                        <a className="header-contact" href={`tel:${contact.phone.replaceAll(" ", "")}`}>
                            <Phone size={15} aria-hidden="true" /> Nous appeler
                        </a>
                    </nav>
                )}
            </header>
        </>
    );
}
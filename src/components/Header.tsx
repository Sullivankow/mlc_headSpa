import { useState } from "react";
import logo from "../assets/logo3.png";
export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Accueil", "#accueil"],
    ["L’expérience", "#experience"],
    ["Les rituels", "#rituels"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed top-0 w-full z-50 bg-[#f8f7f0]/90 backdrop-blur border-b border-[#c7cfb8]/30">
      <div className="container grid h-28 grid-cols-[1fr_auto_1fr] items-center px-5">
        <div className="flex items-center justify-end">
          <div className="w-10 md:hidden" aria-hidden="true" />
          <nav className="hidden md:flex gap-8 text-sm tracking-wide">
            {links.slice(0, 2).map(([label, href]) => (
              <a className="hover:text-[#68764f]" href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>
        <button
          className="justify-self-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          <img
            src={logo}
            className="h-24 w-24 object-cover rounded-full"
            alt="Logo MLC Head Spa"
          />
        </button>
        <a href="#accueil" className="hidden justify-self-center md:block">
          <img
            src={logo}
            className="h-24 w-24 object-cover rounded-full"
            alt="Logo MLC Head Spa"
          />
        </a>
        <div className="flex items-center justify-start">
          <nav className="hidden md:flex gap-8 text-sm tracking-wide">
            {links.slice(2).map(([label, href]) => (
              <a className="hover:text-[#68764f]" href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      {open && (
        <nav aria-label="Navigation mobile" className="absolute right-5 top-full flex flex-col gap-4 border border-[#c7cfb8]/30 bg-[#f8f7f0] px-5 py-4 shadow-lg md:hidden">
          {links.map(([label, href]) => (
            <a onClick={() => setOpen(false)} href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

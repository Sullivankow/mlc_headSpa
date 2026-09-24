import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";
export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Accueil", "#accueil"],
    ["L’expérience", "#experience"],
    ["Les rituels", "#rituels"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed top-0 w-full z-50 bg-[#fbf6ef]/90 backdrop-blur border-b border-[#cbb79e]/30">
      <div className="container flex items-center justify-between h-20 px-5">
        <a href="#accueil">
          <img
            src={logo}
            className="h-14 w-14 object-cover rounded-full"
            alt="Logo MLC Head Spa"
          />
        </a>
        <nav className="hidden md:flex gap-8 text-sm tracking-wide">
          {links.map(([l, h]) => (
            <a className="hover:text-[#a77b43]" href={h} key={h}>
              {l}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden px-5 pb-5 flex flex-col gap-4 bg-[#fbf6ef]">
          {links.map(([l, h]) => (
            <a onClick={() => setOpen(false)} href={h} key={h}>
              {l}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

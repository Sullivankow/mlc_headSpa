import { Camera, Heart, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "../data/site";
export function Footer() {
  return (
    <footer id="contact" className="bg-[#344238] text-[#f5f5ec] section !pb-6">
      <div className="container grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="serif text-3xl mb-3">MLC Head Spa</h3>
          <p className="text-[#d8dfd0]">Détente · Soin · Bien-être</p>
          <p className="mt-5 text-sm text-[#d8dfd0]">
            Ouverture prochaine en janvier 2027.
          </p>
        </div>
        <div>
          <h4 className="uppercase tracking-widest text-xs mb-4 text-[#d9b78a]">
            Nous contacter
          </h4>
          <div className="space-y-3 text-sm">
            <p className="flex gap-2">
              <Phone size={17} />
              <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>
                {contact.phone}
              </a>
            </p>
            <p className="flex gap-2">
              <Mail size={17} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p className="flex gap-2">
              <MapPin size={17} />
              {contact.address}
            </p>
          </div>
        </div>
        <div>
          <h4 className="uppercase tracking-widest text-xs mb-4 text-[#d9b78a]">
            Suivez l’aventure
          </h4>
          <div className="flex flex-col items-start gap-3">
            <a className="inline-flex gap-2 items-center" href="/">
              <Camera size={20} /> Instagram
            </a>
            <a
              className="inline-flex gap-2 items-center"
              href="/"
              aria-label="Facebook MLC Head Spa"
            >
              <FacebookIcon /> Facebook
            </a>
          </div>
          <p className="mt-5 text-sm text-[#d9c9b7]">
            Les informations pratiques et les disponibilités seront annoncées
            prochainement.
          </p>
        </div>
      </div>
      <div className="container border-t border-[#71806a] mt-10 pt-5 text-xs text-[#cbd3c2]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} MLC Head Spa · Tous droits réservés</span>
          <span className="text-[#d8dfd0]">
            Fait avec <Heart className="inline text-red-400 mx-1" size={13} fill="currentColor" /> par{" "}
            <a
              href="https://www.facebook.com/AvenWebSully"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#f5f5ec] transition"
            >
              Aven Web
            </a>
          </span>
          <a href="#mentions-legales" className="hover:text-[#f5f5ec] transition">
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.1c0-.87.24-1.46 1.5-1.46h1.78V3.96c-.31-.04-1.38-.14-2.63-.14-2.61 0-4.4 1.59-4.4 4.51V10H7v3h2.75v8h3.75Z" />
    </svg>
  );
}

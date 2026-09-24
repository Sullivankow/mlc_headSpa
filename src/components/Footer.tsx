import { Camera, Heart, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "../data/site";
export function Footer() {
  return (
    <footer id="contact" className="bg-[#3f3026] text-[#f8f1e8] section !pb-6">
      <div className="container grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="serif text-3xl mb-3">MLC Head Spa</h3>
          <p className="text-[#d9c9b7]">Détente · Soin · Bien-être</p>
          <p className="mt-5 text-sm text-[#d9c9b7]">
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
          <a className="inline-flex gap-2 items-center" href="/">
            {" "}
            <Camera size={20} /> Instagram
          </a>
          <p className="mt-5 text-sm text-[#d9c9b7]">
            Les informations pratiques et les disponibilités seront annoncées
            prochainement.
          </p>
        </div>
      </div>
      <div className="container border-t border-[#806b59] mt-10 pt-5 text-xs text-[#cbbbaa]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} MLC Head Spa · Tous droits réservés</span>
          <span className="text-[#d9c9b7]">
            Fait avec <Heart className="inline text-red-400 mx-1" size={13} fill="currentColor" /> par Aven Web
          </span>
          <a href="#mentions-legales" className="hover:text-[#f8f1e8] transition">
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}

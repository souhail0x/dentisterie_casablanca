import { Logo } from "./Logo";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
              <Logo />
            </a>
            <p className="text-white/60 font-light text-sm leading-relaxed mb-6">
              Cabinet dentaire premium à Casablanca, dirigé par le Dr. Zaineb Zioud. L'excellence au service de votre sourire.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/drzaineb_zioud/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="uppercase tracking-widest text-sm font-medium mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Accueil</a>
              </li>
              <li>
                <a href="#about" className="text-white/60 hover:text-white transition-colors text-sm">À Propos</a>
              </li>
              <li>
                <a href="#services" className="text-white/60 hover:text-white transition-colors text-sm">Services</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/60 hover:text-white transition-colors text-sm">Témoignages</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="uppercase tracking-widest text-sm font-medium mb-6">Expertises</h4>
            <ul className="space-y-4">
              <li className="text-white/60 text-sm">Esthétique Dentaire</li>
              <li className="text-white/60 text-sm">Orthodontie</li>
              <li className="text-white/60 text-sm">Implantologie</li>
              <li className="text-white/60 text-sm">Blanchiment au Laser</li>
              <li className="text-white/60 text-sm">Parodontologie</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="uppercase tracking-widest text-sm font-medium mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>211 Boulevard la résistance, 5eme étage Casablanca, Morocco</span>
              </li>
              <li className="flex gap-3 text-white/60 text-sm">
                <Phone className="w-4 h-4 shrink-0 mt-0.5" />
                <span>+212 520 41 83 27</span>
              </li>
              <li className="flex gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 shrink-0 mt-0.5" />
                <span>contact@ladentisterie.ma</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} La Dentisterie Casablanca. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white text-xs tracking-wider">Mentions Légales</a>
            <a href="#" className="text-white/40 hover:text-white text-xs tracking-wider">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

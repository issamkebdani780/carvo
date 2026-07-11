import React from 'react';
import { Truck, ShieldCheck, CreditCard, HeadphonesIcon, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-gray-400 pt-16 border-t border-[#262626]">
      <div className="container mx-auto px-4">
        
        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-[#262626]">
          {[
            { icon: <Truck className="text-[#F05A28]" size={32} strokeWidth={1.5} />, title: "LIVRAISON RAPIDE", desc: "Partout en Algérie" },
            { icon: <ShieldCheck className="text-[#F05A28]" size={32} strokeWidth={1.5} />, title: "PIÈCES GARANTIES", desc: "Jusqu'à 2 ans" },
            { icon: <CreditCard className="text-[#F05A28]" size={32} strokeWidth={1.5} />, title: "PAIEMENT SÉCURISÉ", desc: "À la livraison" },
            { icon: <HeadphonesIcon className="text-[#F05A28]" size={32} strokeWidth={1.5} />, title: "SERVICE CLIENT", desc: "Conseils d'experts" }
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              {feature.icon}
              <div>
                <h4 className="text-white font-bold text-sm tracking-wider">{feature.title}</h4>
                <p className="text-xs mt-1">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold tracking-tighter text-white flex items-center">
                <span className="text-[#F05A28] mr-1">C</span>CAREVO
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Carevo est votre spécialiste en pièces auto de qualité premium, sélectionnées pour votre sécurité et les performances de votre véhicule.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#F05A28] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#F05A28] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Catégories</h4>
            <ul className="space-y-3 text-sm">
              {['Huiles & Fluides', 'Freinage', 'Filtration', 'Suspension & Direction', 'Moteur', 'Électricité', 'Accessoires'].map((item, i) => (
                <li key={i}><a href="#" className="hover:text-[#F05A28] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Informations</h4>
            <ul className="space-y-3 text-sm">
              {['À propos de nous', 'Livraison', 'Paiement', 'Retours & Remboursements', 'Garantie', 'FAQ', 'Contact'].map((item, i) => (
                <li key={i}><a href="#" className="hover:text-[#F05A28] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#F05A28] mt-0.5 shrink-0" />
                <span>0555 123 456<br/><span className="text-xs text-gray-500">contact@carevo.dz</span></span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#F05A28] mt-0.5 shrink-0" />
                <span>Zone Industrielle,<br/>Alger, Algérie</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0A0A0A] py-6 border-t border-[#1A1A1A] mt-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-xs">
          <p>© 2024 CAREVO. Tous droits réservés.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { User, MapPin, Truck, CreditCard, ChevronDown, Check, ShieldCheck, ArrowRight, Lock } from 'lucide-react';

const Checkout = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('domicile');
  const [paymentMethod, setPaymentMethod] = useState('livraison');

  return (
    <div className="bg-[#0D0D0D] py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Stepper */}
        <div className="flex items-center justify-between border-b border-[#262626] pb-8 mb-10 overflow-x-auto hide-scrollbar">
          {[
            { num: 1, title: 'INFORMATIONS', desc: 'Vos coordonnées', active: true },
            { num: 2, title: 'LIVRAISON', desc: 'Adresse & mode', active: false },
            { num: 3, title: 'PAIEMENT', desc: 'Mode de paiement', active: false },
            { num: 4, title: 'CONFIRMATION', desc: 'Vérifiez votre commande', active: false },
            { num: 5, title: 'TERMINÉE', desc: 'Merci !', active: false },
          ].map((step, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-3 shrink-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${
                  step.active 
                    ? 'border-[#F05A28] text-[#F05A28] bg-[#F05A28]/10' 
                    : 'border-[#262626] text-gray-500 bg-[#141414]'
                }`}>
                  {step.num}
                </div>
                <div>
                  <div className={`text-xs font-bold uppercase tracking-wider ${step.active ? 'text-white' : 'text-gray-500'}`}>{step.title}</div>
                  <div className="text-[10px] text-gray-500">{step.desc}</div>
                </div>
              </div>
              {i < 4 && <div className="h-[1px] bg-[#262626] flex-1 mx-4 min-w-[30px]"></div>}
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Forms */}
          <div className="lg:w-2/3 space-y-8">
            
            {/* Informations Personnelles */}
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
              <h2 className="flex items-center gap-3 text-lg font-bold text-white uppercase tracking-wider mb-6">
                <User className="text-[#F05A28]" /> 1. INFORMATIONS PERSONNELLES
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#0D0D0D] border border-[#262626] rounded px-4 py-3 focus-within:border-[#F05A28] transition-colors">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Nom complet *</label>
                  <input type="text" defaultValue="Amine Belkacem" className="w-full bg-transparent text-sm text-white focus:outline-none" />
                </div>
                <div className="bg-[#0D0D0D] border border-[#262626] rounded px-4 py-3 focus-within:border-[#F05A28] transition-colors">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Téléphone *</label>
                  <input type="tel" defaultValue="0555 123 456" className="w-full bg-transparent text-sm text-white focus:outline-none" />
                </div>
                <div className="bg-[#0D0D0D] border border-[#262626] rounded px-4 py-3 focus-within:border-[#F05A28] transition-colors">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Email (optionnel)</label>
                  <input type="email" defaultValue="amine.belkacem@email.com" className="w-full bg-transparent text-sm text-white focus:outline-none" />
                </div>
              </div>
            </div>

            {/* Adresse de Livraison */}
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
              <h2 className="flex items-center gap-3 text-lg font-bold text-white uppercase tracking-wider mb-6">
                <MapPin className="text-[#F05A28]" /> ADRESSE DE LIVRAISON
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-[#0D0D0D] border border-[#262626] rounded px-4 py-3 relative cursor-pointer">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Wilaya *</label>
                  <select className="w-full bg-transparent text-sm text-white focus:outline-none appearance-none cursor-pointer">
                    <option>Alger</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
                <div className="bg-[#0D0D0D] border border-[#262626] rounded px-4 py-3 relative cursor-pointer">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Commune / Daïra *</label>
                  <select className="w-full bg-transparent text-sm text-white focus:outline-none appearance-none cursor-pointer">
                    <option>Bab Ezzouar</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
              </div>
              <div className="bg-[#0D0D0D] border border-[#262626] rounded px-4 py-3 focus-within:border-[#F05A28] transition-colors mb-4">
                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Adresse complète *</label>
                <input type="text" defaultValue="Cité 1234, Bâtiment 5, Appartement 12, Bab Ezzouar" className="w-full bg-transparent text-sm text-white focus:outline-none" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0D0D0D] border border-[#262626] rounded px-4 py-3 focus-within:border-[#F05A28] transition-colors">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Code postal</label>
                  <input type="text" defaultValue="16000" className="w-full bg-transparent text-sm text-white focus:outline-none" />
                </div>
                <div className="bg-[#0D0D0D] border border-[#262626] rounded px-4 py-3 focus-within:border-[#F05A28] transition-colors">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Instructions de livraison (optionnel)</label>
                  <input type="text" placeholder="Ex: Appeler avant la livraison..." className="w-full bg-transparent text-sm text-white focus:outline-none" />
                </div>
              </div>
            </div>

            {/* Mode de Livraison */}
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
              <h2 className="flex items-center gap-3 text-lg font-bold text-white uppercase tracking-wider mb-6">
                <Truck className="text-[#F05A28]" /> MODE DE LIVRAISON
              </h2>
              <div className="space-y-3">
                <div 
                  onClick={() => setDeliveryMethod('domicile')}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors flex items-center justify-between ${
                    deliveryMethod === 'domicile' ? 'border-[#F05A28] bg-[#F05A28]/5' : 'border-[#262626] bg-[#0D0D0D] hover:border-gray-500'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      deliveryMethod === 'domicile' ? 'border-[#F05A28]' : 'border-gray-500'
                    }`}>
                      {deliveryMethod === 'domicile' && <div className="w-2.5 h-2.5 rounded-full bg-[#F05A28]" />}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Livraison à domicile</div>
                      <div className="text-xs text-gray-500">Livraison partout en Algérie</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-sm">350 DA</div>
                    <div className="text-xs text-gray-500">2 - 3 jours</div>
                  </div>
                </div>

                <div 
                  onClick={() => setDeliveryMethod('relais')}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors flex items-center justify-between ${
                    deliveryMethod === 'relais' ? 'border-[#F05A28] bg-[#F05A28]/5' : 'border-[#262626] bg-[#0D0D0D] hover:border-gray-500'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      deliveryMethod === 'relais' ? 'border-[#F05A28]' : 'border-gray-500'
                    }`}>
                      {deliveryMethod === 'relais' && <div className="w-2.5 h-2.5 rounded-full bg-[#F05A28]" />}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Livraison en point relais</div>
                      <div className="text-xs text-gray-500">Retirez votre commande au point relais le plus proche</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-sm">250 DA</div>
                    <div className="text-xs text-gray-500">2 - 3 jours</div>
                  </div>
                </div>

                <div 
                  onClick={() => setDeliveryMethod('bureau')}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors flex items-center justify-between ${
                    deliveryMethod === 'bureau' ? 'border-[#F05A28] bg-[#F05A28]/5' : 'border-[#262626] bg-[#0D0D0D] hover:border-gray-500'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      deliveryMethod === 'bureau' ? 'border-[#F05A28]' : 'border-gray-500'
                    }`}>
                      {deliveryMethod === 'bureau' && <div className="w-2.5 h-2.5 rounded-full bg-[#F05A28]" />}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Retrait en bureau</div>
                      <div className="text-xs text-gray-500">Retrait de votre commande dans nos bureaux</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-sm">Gratuit</div>
                    <div className="text-xs text-gray-500">24 - 48h</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mode de Paiement */}
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-6">
              <h2 className="flex items-center gap-3 text-lg font-bold text-white uppercase tracking-wider mb-6">
                <CreditCard className="text-[#F05A28]" /> MODE DE PAIEMENT
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                <div 
                  onClick={() => setPaymentMethod('livraison')}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors flex items-center gap-3 ${
                    paymentMethod === 'livraison' ? 'border-[#F05A28] bg-[#F05A28]/5' : 'border-[#262626] bg-[#0D0D0D] hover:border-gray-500'
                  }`}
                >
                  <div className={`w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === 'livraison' ? 'border-[#F05A28]' : 'border-gray-500'
                  }`}>
                    {paymentMethod === 'livraison' && <div className="w-2.5 h-2.5 rounded-full bg-[#F05A28]" />}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm leading-tight">Paiement à la livraison</div>
                    <div className="text-[10px] text-gray-500 mt-1">Payez en espèces à la réception</div>
                  </div>
                </div>

                <div 
                  onClick={() => setPaymentMethod('carte')}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors flex items-center gap-3 ${
                    paymentMethod === 'carte' ? 'border-[#F05A28] bg-[#F05A28]/5' : 'border-[#262626] bg-[#0D0D0D] hover:border-gray-500'
                  }`}
                >
                  <div className={`w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === 'carte' ? 'border-[#F05A28]' : 'border-gray-500'
                  }`}>
                    {paymentMethod === 'carte' && <div className="w-2.5 h-2.5 rounded-full bg-[#F05A28]" />}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm leading-tight">Paiement par carte</div>
                    <div className="text-[10px] text-gray-500 mt-1">Visa, MasterCard</div>
                  </div>
                </div>

                <div 
                  onClick={() => setPaymentMethod('virement')}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors flex items-center gap-3 ${
                    paymentMethod === 'virement' ? 'border-[#F05A28] bg-[#F05A28]/5' : 'border-[#262626] bg-[#0D0D0D] hover:border-gray-500'
                  }`}
                >
                  <div className={`w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === 'virement' ? 'border-[#F05A28]' : 'border-gray-500'
                  }`}>
                    {paymentMethod === 'virement' && <div className="w-2.5 h-2.5 rounded-full bg-[#F05A28]" />}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm leading-tight">Virement bancaire</div>
                    <div className="text-[10px] text-gray-500 mt-1">Paiement sécurisé</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#F05A28] hover:bg-[#E04818] text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg">
              CONTINUER VERS LA CONFIRMATION <ArrowRight size={20} />
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
              <Lock size={14} /> Vos données sont sécurisées et chiffrées
            </div>

          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 sticky top-6">
              <h2 className="text-lg font-bold text-white uppercase tracking-wider mb-1">RÉCAPITULATIF DE COMMANDE</h2>
              <div className="text-xs text-gray-500 mb-6">3 articles</div>

              {/* Items */}
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-white rounded flex items-center justify-center shrink-0">
                    <img src="/assets/images/product_bosch_filter.png" className="w-12 h-12 object-contain mix-blend-multiply" alt="" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium leading-tight mb-1">Huile moteur 5W-30 CAREVO Fully Synthetic 5L</div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">x 1</span>
                      <span className="text-sm font-bold text-white">2 200 DA</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-white rounded flex items-center justify-center shrink-0 border-2 border-[#F05A28]">
                    <img src="/assets/images/product_bosch_filter.png" className="w-12 h-12 object-contain mix-blend-multiply" alt="" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium leading-tight mb-1">Filtre à huile BOSCH<br/>F 026 407 203</div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">x 1</span>
                      <span className="text-sm font-bold text-white">850 DA</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-white rounded flex items-center justify-center shrink-0">
                    <img src="/assets/images/product_bosch_filter.png" className="w-12 h-12 object-contain mix-blend-multiply" alt="" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium leading-tight mb-1">Disques de frein avant BOSCH 0986479D21</div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">x 1</span>
                      <span className="text-sm font-bold text-white">4 900 DA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="flex gap-2 mb-6 border-b border-[#262626] pb-6">
                <input type="text" placeholder="Code promo" className="flex-1 bg-[#0D0D0D] border border-[#262626] rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-[#F05A28]" />
                <button className="bg-transparent border border-[#262626] text-white hover:text-[#F05A28] hover:border-[#F05A28] text-sm font-bold px-4 py-2 rounded transition-colors uppercase">
                  APPLIQUER
                </button>
              </div>

              {/* Totals */}
              <div className="space-y-3 mb-6 border-b border-[#262626] pb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Sous-total</span>
                  <span className="text-white font-medium">7 950 DA</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Livraison</span>
                  <span className="text-white font-medium">350 DA</span>
                </div>
              </div>
              <div className="flex justify-between items-end mb-8">
                <span className="text-lg font-bold text-[#F05A28] uppercase tracking-wider">TOTAL</span>
                <span className="text-2xl font-bold text-[#F05A28]">8 300 DA</span>
              </div>

              {/* Assurances mini */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-[#F05A28] shrink-0" size={20} />
                  <div>
                    <div className="text-white text-xs font-bold">Pièces garanties 2 ans</div>
                    <div className="text-[10px] text-gray-500">Toutes nos pièces sont garanties</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="text-[#F05A28] shrink-0" size={20} />
                  <div>
                    <div className="text-white text-xs font-bold">Livraison rapide</div>
                    <div className="text-[10px] text-gray-500">Partout en Algérie</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="text-[#F05A28] shrink-0" size={20} />
                  <div>
                    <div className="text-white text-xs font-bold">Paiement à la livraison</div>
                    <div className="text-[10px] text-gray-500">Payez à la réception de votre commande</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#262626] flex items-center justify-between text-gray-500">
                <div className="flex items-center gap-2">
                  <Lock size={16} />
                  <div className="text-[10px] leading-tight">
                    <span className="font-bold text-white block">PAIEMENT SÉCURISÉ</span>
                    Vos informations sont protégées
                  </div>
                </div>
                <div className="flex gap-2">
                  {/* Fake badges */}
                  <div className="bg-[#0D0D0D] border border-[#262626] px-2 py-1 rounded text-[8px] font-bold">SSL SECURE</div>
                  <div className="bg-[#0D0D0D] border border-[#262626] px-2 py-1 rounded text-[8px] font-bold">PCI DSS</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;

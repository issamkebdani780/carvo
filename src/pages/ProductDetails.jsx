import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { ShoppingCart, Heart, Share2, RefreshCcw, Check, Star, ShieldCheck, HeadphonesIcon } from 'lucide-react';
import filterImg from '../assets/images/product_bosch_filter.png';

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-[#0D0D0D] py-8">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumb & Vehicle Selector */}
        <div className="flex flex-col gap-4 mb-8 pb-4 border-b border-[#262626]">
          <div className="text-xs text-gray-400">
            <span className="hover:text-white cursor-pointer transition-colors">Accueil</span> &gt; 
            <span className="hover:text-white cursor-pointer transition-colors mx-1">Filtration</span> &gt; 
            <span className="hover:text-white cursor-pointer transition-colors mx-1">Filtres à huile</span> &gt; 
            <span className="text-[#F05A28] mx-1">Filtre à huile BOSCH F 026 407 203</span>
          </div>
          
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex items-center gap-3 bg-[#141414] border border-[#262626] px-4 py-2.5 rounded text-sm whitespace-nowrap w-max min-w-full">
              <span className="text-gray-400 text-xs uppercase tracking-wider font-bold">VÉHICULE :</span>
              <span className="font-bold text-white">TOYOTA <span className="text-gray-500 mx-1">▼</span></span>
              <span className="text-[#262626]">|</span>
              <span className="font-bold text-white">YARIS <span className="text-gray-500 mx-1">▼</span></span>
              <span className="text-[#262626]">|</span>
              <span className="font-bold text-white">2021 <span className="text-gray-500 mx-1">▼</span></span>
              <span className="text-[#262626]">|</span>
              <span className="font-bold text-white">1.5 VVT-i <span className="text-gray-500 mx-1">▼</span></span>
              <button className="text-[#F05A28] font-bold ml-2 hover:underline text-xs">MODIFIER</button>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          
          {/* Images */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg p-8 mb-4 relative aspect-[4/3] flex items-center justify-center">
              <div className="absolute top-4 left-4 bg-[#F05A28] text-white text-xs font-bold px-2 py-1 rounded">-15%</div>
              <button className="absolute bottom-4 right-4 text-gray-400 hover:text-white bg-[#0D0D0D]/50 p-2 rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M8 11h6"/><path d="M11 8v6"/></svg>
              </button>
              <img src={filterImg} alt="BOSCH Filter" className="max-w-full max-h-full object-contain mix-blend-multiply" />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white rounded aspect-square p-2 border-2 border-[#F05A28] cursor-pointer flex items-center justify-center">
                <img src={filterImg} className="w-full h-full object-contain mix-blend-multiply" alt="Thumb" />
              </div>
              <div className="bg-[#141414] rounded aspect-square p-2 border border-[#262626] cursor-pointer flex items-center justify-center">
                <div className="w-full h-full bg-[#1A1A1A] rounded flex items-center justify-center text-gray-500">Img 2</div>
              </div>
              <div className="bg-[#141414] rounded aspect-square p-2 border border-[#262626] cursor-pointer flex items-center justify-center">
                <div className="w-full h-full bg-[#1A1A1A] rounded flex items-center justify-center text-gray-500">Img 3</div>
              </div>
              <div className="bg-[#141414] rounded aspect-square p-2 border border-[#262626] cursor-pointer flex items-center justify-center relative">
                <div className="w-full h-full bg-[#1A1A1A] rounded flex items-center justify-center text-gray-500">Img 4</div>
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-xl rounded cursor-pointer">+2</div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:w-1/2">
            <div className="text-[#F05A28] font-bold tracking-wider mb-2 uppercase text-sm">BOSCH</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Filtre à huile BOSCH<br />F 026 407 203
            </h1>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-[#F05A28]">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
              </div>
              <span className="text-gray-400 text-sm">(42 avis clients)</span>
            </div>

            <div className="flex items-end gap-4 mb-6">
              <div className="text-4xl font-bold text-[#F05A28]">850 DA</div>
              <div className="text-xl text-gray-500 line-through mb-1">1 000 DA</div>
              <div className="bg-[#F05A28] text-white text-xs font-bold px-2 py-1 rounded mb-1.5">-15%</div>
            </div>

            <div className="flex items-center gap-2 text-[#22c55e] font-medium text-sm mb-2">
              <Check size={16} /> En stock
            </div>
            <div className="text-gray-400 text-sm mb-8">
              Livraison disponible <span className="text-white">24h - 48h</span>
            </div>

            {/* Compatibility Box */}
            <div className="bg-[#141414] border border-[#262626] rounded-lg p-5 mb-8">
              <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">COMPATIBLE AVEC :</div>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                <li className="flex items-center gap-2"><Check size={14} className="text-[#22c55e]" /> Toyota Yaris (2020 - 2023) 1.5 VVT-i</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#22c55e]" /> Toyota Corolla (2019 - 2023) 1.6i</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-[#22c55e]" /> Toyota Auris (2018 - 2022) 1.6i</li>
              </ul>
              <button className="w-full py-2 border border-[#262626] text-gray-400 text-xs font-bold uppercase tracking-wider rounded hover:border-[#F05A28] hover:text-[#F05A28] transition-colors">
                VOIR PLUS DE VÉHICULES (12)
              </button>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border border-[#262626] rounded bg-[#141414] h-12 w-full sm:w-32">
                <button 
                  className="px-4 text-gray-400 hover:text-white h-full transition-colors"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >-</button>
                <div className="flex-1 text-center text-white font-bold">{quantity}</div>
                <button 
                  className="px-4 text-gray-400 hover:text-white h-full transition-colors"
                  onClick={() => setQuantity(q => q + 1)}
                >+</button>
              </div>
              <button className="flex-1 bg-[#F05A28] hover:bg-[#E04818] text-white font-bold h-12 rounded flex items-center justify-center gap-2 transition-colors">
                <ShoppingCart size={20} /> AJOUTER AU PANIER
              </button>
            </div>

            {/* Secondary Actions */}
            <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-400 border-b border-[#262626] pb-8">
              <button className="flex items-center gap-2 hover:text-white transition-colors"><Heart size={18} /> Ajouter aux favoris</button>
              <button className="flex items-center gap-2 hover:text-white transition-colors"><RefreshCcw size={18} /> Comparer</button>
              <button className="flex items-center gap-2 hover:text-white transition-colors"><Share2 size={18} /> Partager</button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="text-[#F05A28]"><ShoppingCart size={24} /></div>
                <div className="text-white text-xs font-bold uppercase">LIVRAISON RAPIDE</div>
                <div className="text-gray-500 text-[10px]">Partout en Algérie</div>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="text-[#F05A28]"><ShieldCheck size={24} /></div>
                <div className="text-white text-xs font-bold uppercase">PIÈCE GARANTIE</div>
                <div className="text-gray-500 text-[10px]">2 ans</div>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="text-[#F05A28]"><RefreshCcw size={24} /></div>
                <div className="text-white text-xs font-bold uppercase">RETOUR FACILE</div>
                <div className="text-gray-500 text-[10px]">Sous 7 jours</div>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="text-[#F05A28]"><HeadphonesIcon size={24} /></div>
                <div className="text-white text-xs font-bold uppercase">SUPPORT EXPERT</div>
                <div className="text-gray-500 text-[10px]">Conseils 7j/7</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-12 md:mb-20">
          <div className="flex overflow-x-auto border-b border-[#262626] mb-8 hide-scrollbar">
            {['DESCRIPTION', 'CARACTÉRISTIQUES', 'COMPATIBILITÉ', 'AVIS CLIENTS (42)', 'QUESTIONS / RÉPONSES'].map((tab, i) => (
              <button 
                key={i}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`py-4 px-6 text-sm font-bold tracking-wider whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.toLowerCase() ? 'text-[#F05A28] border-[#F05A28]' : 'text-gray-500 border-transparent hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 text-gray-300 text-sm leading-relaxed space-y-6">
              <p>Le filtre à huile BOSCH F 026 407 203 assure une filtration optimale de l'huile moteur et protège efficacement votre moteur contre l'usure prématurée.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check size={18} className="text-[#F05A28] shrink-0 mt-0.5" /> Excellente capacité de rétention des impuretés</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#F05A28] shrink-0 mt-0.5" /> Résistant à la pression et à la température</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#F05A28] shrink-0 mt-0.5" /> Haute qualité BOSCH pour une performance durable</li>
                <li className="flex items-start gap-3"><Check size={18} className="text-[#F05A28] shrink-0 mt-0.5" /> Installation facile - Remplacement identique à l'origine</li>
              </ul>
            </div>
            
            <div className="bg-[#141414] border border-[#262626] rounded-lg p-6 h-fit">
              <div className="mb-6">
                <div className="text-xs text-gray-500 font-bold uppercase mb-1">RÉFÉRENCE CONSTRUCTEUR (OEM)</div>
                <div className="text-sm text-white">90915-YZZE1, 90915-10003, 90915-03005</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-bold uppercase mb-1">CODE BOSCH</div>
                <div className="text-sm text-white">F 026 407 203</div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider mb-8">Produits Similaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
             {/* Using dummy similar products based on design */}
             <ProductCard 
              id={10} brand="MANN-FILTER" title="Filtre à huile W 610/3" 
              price="800" oldPrice="" discount="" rating={4.5} 
            />
            <ProductCard 
              id={11} brand="KNECHT" title="Filtre à huile OC 203" 
              price="750" oldPrice="" discount="" rating={4.8} 
            />
            <ProductCard 
              id={12} brand="PURFLUX" title="Filtre à huile LS932" 
              price="780" oldPrice="" discount="" rating={4.2} 
            />
            <ProductCard 
              id={13} brand="FRAM" title="Filtre à huile CH10060" 
              price="730" oldPrice="" discount="" rating={4.6} 
            />
            <ProductCard 
              id={14} brand="BLUE PRINT" title="Filtre à huile ADT32150" 
              price="770" oldPrice="" discount="" rating={4.1} 
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;

import React from 'react';
import ProductCard from '../components/ProductCard';
import { ArrowRight, CheckCircle2, ShieldCheck, ThumbsUp, Wrench } from 'lucide-react';
import heroImg from '../assets/images/hero_banner.png';

const Home = () => {
  return (
    <div className="bg-[#0D0D0D]">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#262626]">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/90 to-transparent z-10" />
          <img src={heroImg} alt="Auto Parts" className="w-full h-full object-cover object-right opacity-60" />
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              LA BONNE PIÈCE,<br />
              <span className="text-[#F05A28]">AU BON MOMENT.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
              Des pièces auto de qualité premium, sélectionnées pour votre sécurité et les performances de votre véhicule.
            </p>
            
            {/* Quick Benefits */}
            <div className="flex flex-wrap gap-5 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#F05A28]/30 flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#F05A28]" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">HUILES</div>
                  <div className="text-xs text-gray-400">Haute performance</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#F05A28]/30 flex items-center justify-center text-[#F05A28] flex-shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">FILTRES</div>
                  <div className="text-xs text-gray-400">Qualité premium</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#F05A28]/30 flex items-center justify-center text-[#F05A28] flex-shrink-0">
                  <Wrench size={18} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">FREINAGE</div>
                  <div className="text-xs text-gray-400">Sécurité assurée</div>
                </div>
              </div>
            </div>

            <button className="bg-[#F05A28] hover:bg-[#E04818] text-white px-8 py-3.5 rounded font-bold transition-all flex items-center gap-3">
              VOIR NOS PRODUITS <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Search Widget */}
      <section className="container mx-auto px-4 md:-mt-10 relative z-30 mb-16 md:mb-20">
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">Trouvez la pièce compatible</h2>
          <p className="text-sm text-gray-400 mb-6">Sélectionnez votre véhicule pour voir les pièces compatibles</p>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="flex flex-col">
              <label className="text-xs text-gray-400 mb-1.5 uppercase font-semibold">Marque</label>
              <select className="bg-[#0D0D0D] border border-[#262626] text-white text-sm rounded px-3 py-2.5 focus:outline-none focus:border-[#F05A28] appearance-none">
                <option>Choisir la marque</option>
                <option>Toyota</option>
                <option>Renault</option>
                <option>Peugeot</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-gray-400 mb-1.5 uppercase font-semibold">Modèle</label>
              <select className="bg-[#0D0D0D] border border-[#262626] text-gray-500 text-sm rounded px-3 py-2.5 focus:outline-none focus:border-[#F05A28] appearance-none" disabled>
                <option>Choisir le modèle</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-gray-400 mb-1.5 uppercase font-semibold">Année</label>
              <select className="bg-[#0D0D0D] border border-[#262626] text-gray-500 text-sm rounded px-3 py-2.5 focus:outline-none focus:border-[#F05A28] appearance-none" disabled>
                <option>Choisir l'année</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-gray-400 mb-1.5 uppercase font-semibold">Motorisation</label>
              <select className="bg-[#0D0D0D] border border-[#262626] text-gray-500 text-sm rounded px-3 py-2.5 focus:outline-none focus:border-[#F05A28] appearance-none" disabled>
                <option>Choisir la motorisation</option>
              </select>
            </div>
            <div className="flex flex-col justify-end">
              <button className="bg-[#F05A28] hover:bg-[#E04818] text-white font-bold py-2.5 rounded transition-colors w-full uppercase text-sm">
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 mb-16 md:mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Nos Catégories</h2>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded border border-[#262626] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#F05A28] transition-colors">&lt;</button>
            <button className="w-8 h-8 rounded border border-[#262626] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#F05A28] transition-colors">&gt;</button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {['Huiles & Fluides', 'Filtres', 'Freinage', 'Suspension & Direction', 'Moteur', 'Électricité'].map((cat, i) => (
            <div key={i} className="bg-[#141414] border border-[#262626] rounded-lg p-4 group cursor-pointer hover:border-[#F05A28] transition-colors flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#0D0D0D] rounded-full mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform">
                <img src={heroImg} className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-50" alt="" />
              </div>
              <h3 className="text-white font-bold text-sm uppercase">{cat}</h3>
              <p className="text-[#F05A28] text-xs mt-1">Voir les produits &gt;</p>
            </div>
          ))}
        </div>
      </section>

      {/* Current Offers */}
      <section className="container mx-auto px-4 mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row items-end md:items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Nos Offres Du Moment</h2>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Offre valable jusqu'au</span>
            <div className="flex gap-2">
              <div className="bg-[#1A1A1A] border border-[#262626] rounded px-3 py-2 text-center min-w-[50px]">
                <div className="text-xl font-bold text-white">02</div>
                <div className="text-[9px] text-gray-500 uppercase">Jours</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#262626] rounded px-3 py-2 text-center min-w-[50px]">
                <div className="text-xl font-bold text-white">14</div>
                <div className="text-[9px] text-gray-500 uppercase">Heures</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#262626] rounded px-3 py-2 text-center min-w-[50px]">
                <div className="text-xl font-bold text-white">37</div>
                <div className="text-[9px] text-gray-500 uppercase">Min</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#262626] rounded px-3 py-2 text-center min-w-[50px]">
                <div className="text-xl font-bold text-[#F05A28]">48</div>
                <div className="text-[9px] text-[#F05A28] uppercase">Sec</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-6">
          <ProductCard 
            id={1}
            brand="CAREVO" 
            title="Huile moteur 5W-30 Fully Synthetic 5L" 
            price="4 200" 
            oldPrice="4 950" 
            discount="15"
            rating={4.8}
          />
          <ProductCard 
            id={2}
            brand="BOSCH" 
            title="Kit disques + plaquettes de frein avant" 
            price="8 900" 
            oldPrice="11 100" 
            discount="20"
            rating={4.9}
          />
          <ProductCard 
            id={3}
            brand="PURFLUX" 
            title="Filtre à air premium Haute performance" 
            price="1 250" 
            oldPrice="1 390" 
            discount="10"
            rating={4.5}
          />
          <ProductCard 
            id={4}
            brand="VARTA" 
            title="Batterie 60Ah 12V - Garantie 2 ans" 
            price="11 900" 
            oldPrice="13 990" 
            discount="15"
            rating={4.7}
          />
          <ProductCard 
            id={5}
            brand="BOSCH" 
            title="Filtre à huile Qualité premium" 
            price="590" 
            oldPrice="790" 
            discount="25"
            rating={4.6}
            image="/assets/images/product_bosch_filter.png"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#141414] py-20 border-y border-[#262626]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                <img src={heroImg} className="w-full h-full object-cover grayscale opacity-60 mix-blend-screen" alt="Mechanic" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F05A28]/20 to-transparent mix-blend-overlay"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#0D0D0D] border border-[#262626] rounded-xl p-6 flex flex-col justify-center items-center shadow-2xl hidden md:flex">
                <div className="text-4xl font-extrabold text-[#F05A28] mb-1">10 000</div>
                <div className="text-sm text-white font-bold text-center uppercase tracking-wider mb-2">Clients Satisfaits</div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-[#F05A28]">★</span>)}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider">Pourquoi Choisir Carevo ?</h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Nous sélectionnons les meilleures pièces auto pour garantir votre sécurité et les performances de votre véhicule.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="text-[#F05A28]" size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Pièces de qualité premium</h4>
                    <p className="text-sm text-gray-500">Sélectionnées auprès des plus grandes marques mondiales.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="text-[#F05A28]" size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Compatibilité garantie</h4>
                    <p className="text-sm text-gray-500">Des pièces 100% compatibles avec votre véhicule.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="text-[#F05A28]" size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Conseils d'experts</h4>
                    <p className="text-sm text-gray-500">Une équipe à votre écoute pour vous accompagner.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="text-[#F05A28]" size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Prix compétitifs</h4>
                    <p className="text-sm text-gray-500">Le meilleur rapport qualité/prix sur le marché algérien.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0D0D0D] border border-[#262626] rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 uppercase tracking-wider">Restez Informé</h3>
            <p className="text-gray-400 text-sm sm:text-base">Recevez nos offres et conseils entretien directement par email.</p>
          </div>
          <div className="flex w-full md:w-auto md:min-w-[360px]">
            <input 
              type="email" 
              placeholder="Votre adresse e-mail" 
              className="flex-1 min-w-0 bg-[#0D0D0D] border border-[#262626] text-white rounded-l px-4 py-3 focus:outline-none focus:border-[#F05A28] text-sm transition-colors"
            />
            <button className="bg-[#F05A28] hover:bg-[#E04818] text-white font-bold px-4 sm:px-6 py-3 rounded-r transition-colors whitespace-nowrap text-sm flex-shrink-0">
              S'ABONNER
            </button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;

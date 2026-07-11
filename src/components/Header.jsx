import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-[#0D0D0D] border-b border-[#262626] text-[#F2F2F2]">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="text-3xl font-bold tracking-tighter text-white flex items-center">
            <span className="text-[#F05A28] mr-1">C</span>CAREVO
          </div>
          <div className="hidden md:block flex-col leading-none text-[10px] text-gray-400 font-medium tracking-widest uppercase">
            <span>L'entretien intelligent</span>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
          <input 
            type="text" 
            placeholder="Rechercher une pièce, une marque, une référence..." 
            className="w-full bg-[#1A1A1A] border border-[#262626] rounded-l-md px-4 py-2.5 focus:outline-none focus:border-[#F05A28] text-sm transition-colors"
          />
          <button className="bg-[#F05A28] hover:bg-[#E04818] text-white px-5 rounded-r-md transition-colors flex items-center justify-center">
            <Search size={18} />
          </button>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 cursor-pointer hover:text-[#F05A28] transition-colors">
            <User size={24} strokeWidth={1.5} />
            <div className="text-sm leading-tight hidden sm:block">
              <span className="block text-gray-400 text-xs">Mon compte</span>
              <span className="font-medium">Se connecter</span>
            </div>
          </div>
          
          <Link to="/checkout" className="flex items-center gap-3 cursor-pointer hover:text-[#F05A28] transition-colors relative">
            <div className="relative">
              <ShoppingCart size={24} strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-2 bg-[#F05A28] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                3
              </span>
            </div>
            <div className="text-sm leading-tight hidden sm:block">
              <span className="block text-gray-400 text-xs">Mon panier</span>
              <span className="font-bold text-[#F05A28]">3 250 DA</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#141414] border-t border-[#262626]">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-between text-xs font-semibold tracking-wider uppercase overflow-x-auto whitespace-nowrap hide-scrollbar">
            {['PIÈCES AUTO', 'HUILES & FLUIDES', 'FREINAGE', 'FILTRATION', 'BATTERIES', 'ACCESSOIRES', 'PROMOTIONS', 'CONTACT'].map((item, index) => (
              <li key={index}>
                <Link 
                  to={item === 'FILTRATION' ? '/product/1' : '/'} 
                  className={`flex items-center gap-1 py-4 px-2 hover:text-[#F05A28] border-b-2 transition-colors ${index === 0 ? 'border-[#F05A28] text-[#F05A28]' : 'border-transparent text-gray-300'}`}
                >
                  {item}
                  {(item === 'PIÈCES AUTO' || item === 'ACCESSOIRES') && <ChevronDown size={14} className="opacity-50" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

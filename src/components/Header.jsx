import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'PIÈCES AUTO', path: '/', hasDropdown: true },
  { label: 'HUILES & FLUIDES', path: '/' },
  { label: 'FREINAGE', path: '/' },
  { label: 'FILTRATION', path: '/product/1' },
  { label: 'BATTERIES', path: '/' },
  { label: 'ACCESSOIRES', path: '/', hasDropdown: true },
  { label: 'PROMOTIONS', path: '/' },
  { label: 'CONTACT', path: '/' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className="bg-[#0D0D0D] border-b border-[#262626] text-[#F2F2F2] sticky top-0 z-50">

      {/* ── Top Bar ── */}
      <div className="container mx-auto px-4 py-3 flex items-center gap-3 justify-between">

        {/* Hamburger — mobile only */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMenuOpen(m => !m)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded text-gray-400 hover:text-white hover:bg-[#1A1A1A] transition-colors flex-shrink-0"
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="text-2xl sm:text-3xl font-bold tracking-tighter text-white flex items-center">
            <span className="text-[#F05A28] mr-1">C</span>CAREVO
          </div>
        </Link>

        {/* Search Bar — desktop */}
        <div className="hidden lg:flex flex-1 max-w-xl mx-6 relative">
          <input
            type="text"
            placeholder="Rechercher une pièce, une marque, une référence..."
            className="w-full bg-[#1A1A1A] border border-[#262626] rounded-l-md px-4 py-2.5 focus:outline-none focus:border-[#F05A28] text-sm transition-colors"
          />
          <button className="bg-[#F05A28] hover:bg-[#E04818] text-white px-5 rounded-r-md transition-colors flex items-center justify-center">
            <Search size={18} />
          </button>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          {/* Mobile search toggle */}
          <button
            onClick={() => setSearchOpen(s => !s)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded text-gray-400 hover:text-[#F05A28] hover:bg-[#1A1A1A] transition-colors"
            aria-label="Rechercher"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          {/* Account — hidden on very small */}
          <div className="hidden sm:flex items-center gap-2 cursor-pointer hover:text-[#F05A28] transition-colors">
            <User size={22} strokeWidth={1.5} />
            <div className="text-sm leading-tight hidden md:block">
              <span className="block text-gray-400 text-xs">Mon compte</span>
              <span className="font-medium">Se connecter</span>
            </div>
          </div>

          {/* Cart */}
          <Link to="/checkout" className="flex items-center gap-2 hover:text-[#F05A28] transition-colors relative">
            <div className="relative">
              <ShoppingCart size={22} strokeWidth={1.5} />
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

      {/* ── Mobile Search Bar (toggleable) ── */}
      {searchOpen && (
        <div className="lg:hidden px-4 pb-3 flex animate-fadeIn">
          <input
            type="text"
            placeholder="Rechercher une pièce..."
            autoFocus
            className="flex-1 bg-[#1A1A1A] border border-[#262626] rounded-l-md px-4 py-2.5 focus:outline-none focus:border-[#F05A28] text-sm transition-colors"
          />
          <button className="bg-[#F05A28] hover:bg-[#E04818] text-white px-4 rounded-r-md transition-colors flex items-center justify-center flex-shrink-0">
            <Search size={16} />
          </button>
        </div>
      )}

      {/* ── Desktop Navigation Bar ── */}
      <nav className="hidden lg:block bg-[#141414] border-t border-[#262626]">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-between text-xs font-semibold tracking-wider uppercase overflow-x-auto whitespace-nowrap hide-scrollbar">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 py-4 px-2 hover:text-[#F05A28] border-b-2 transition-colors ${
                    index === 0 ? 'border-[#F05A28] text-[#F05A28]' : 'border-transparent text-gray-300'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={13} className="opacity-50" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay & Drawer ── */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          />
          {/* Drawer */}
          <nav className="lg:hidden fixed top-0 left-0 h-full w-72 bg-[#141414] border-r border-[#262626] z-50 overflow-y-auto flex flex-col shadow-2xl">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#262626]">
              <span className="text-2xl font-bold tracking-tighter text-white">
                <span className="text-[#F05A28]">C</span>CAREVO
              </span>
              <button onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <ul className="flex-1 py-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center justify-between px-5 py-4 text-sm font-bold tracking-wider uppercase border-b border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F05A28] transition-colors ${
                      index === 0 ? 'text-[#F05A28]' : 'text-gray-300'
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={15} className="opacity-50" />}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Drawer footer */}
            <div className="border-t border-[#262626] px-5 py-5">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer transition-colors">
                <User size={20} strokeWidth={1.5} />
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Mon compte</div>
                  <div className="font-bold text-sm text-white">Se connecter</div>
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;

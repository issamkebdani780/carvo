import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, brand, title, price, oldPrice, discount, image, rating }) => {
  return (
    <div className="bg-[#141414] rounded-lg p-4 border border-[#262626] hover:border-[#F05A28] transition-colors group relative flex flex-col h-full">
      
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-4 left-4 bg-[#F05A28] text-white text-xs font-bold px-2 py-1 rounded z-10">
          -{discount}%
        </div>
      )}

      {/* Favorite Button */}
      <button className="absolute top-4 right-4 text-gray-400 hover:text-[#F05A28] z-10 transition-colors">
        <Heart size={20} strokeWidth={1.5} />
      </button>

      {/* Product Image */}
      <Link to={`/product/${id}`} className="block relative aspect-square mb-4 bg-white/5 rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={image || "/assets/images/product_bosch_filter.png"} 
          alt={title} 
          className="w-full h-full object-cover mix-blend-lighten group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Product Info */}
      <div className="flex flex-col flex-grow">
        <div className="text-xs text-[#F05A28] font-bold tracking-wider mb-1 uppercase">{brand}</div>
        <Link to={`/product/${id}`} className="text-sm text-white font-medium hover:text-[#F05A28] transition-colors mb-2 line-clamp-2 leading-snug">
          {title}
        </Link>
        
        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-1 mb-3 mt-auto">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-[#F05A28]' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-[10px] text-gray-400 ml-1">({Math.floor(Math.random() * 50) + 5})</span>
          </div>
        )}

        {/* Price & Action */}
        <div className="flex items-end justify-between mt-auto pt-4">
          <div>
            <div className="text-lg font-bold text-[#F05A28] leading-none">{price} DA</div>
            {oldPrice && <div className="text-xs text-gray-500 line-through mt-1">{oldPrice} DA</div>}
          </div>
          <button className="bg-[#1A1A1A] hover:bg-[#F05A28] text-white p-2.5 rounded transition-colors" title="Ajouter au panier">
            <ShoppingCart size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { AnimatePresence, motion } from 'framer-motion';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { SiStorybook } from "react-icons/si";

const products = [
  { id: 1, name: 'Fütüristik Kulaklık', price: 250, image: 'https://images.unsplash.com/photo-1644938369713-8827e218a2ec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Mekanik Klavye', price: 180, image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, name: 'Akıllı Saat', price: 320, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop' },
  { id: 4, name: 'Oyun Faresi', price: 90, image: 'https://images.unsplash.com/photo-1628832306751-ec751454119c?q=80&w=1245&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const storybookUrl = `${import.meta.env.VITE_STORYBOOK_URL}/?path=/story/sayfalar-dinamik-alışveriş-sepeti--docs`;
// --- COMPONENT'LER ---

// Navbar Component'i
const Navbar = ({ onCartClick }) => {
  const { items } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-sm p-4 flex justify-between items-center z-40">
      <Link to="/" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
        ← Ana Sayfa
      </Link>
      <a 
      href={storybookUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors" 
      title="Bu Component'in Storybook'unu Aç"
    >
        <SiStorybook className="text-pink-500 text-xl" />
        <span className="hidden sm:inline">Storybook</span>
    </a>
      <button onClick={onCartClick} className="relative text-white text-2xl">
        <FaShoppingCart />
        <AnimatePresence>
          {totalItems > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
            >
              {totalItems}
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </nav>
  );
};

// Ürün Kartı Component'i
const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <motion.div 
      layout
      className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700"
    >
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-white font-bold text-lg">{product.name}</h3>
        <p className="text-teal-400 font-semibold mt-1">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full mt-4 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors"
        >
          Sepete Ekle
        </button>
      </div>
    </motion.div>
  );
};

// Sepet Kenar Çubuğu Component'i
const CartSidebar = ({ isOpen, onClose }) => {
    const { items, removeFromCart, updateQuantity } = useCart();
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-full max-w-md h-full bg-gray-900 border-l border-gray-700 shadow-lg z-50 flex flex-col"
            >
              <div className="p-4 flex justify-between items-center border-b border-gray-700">
                <h2 className="text-white text-xl font-bold">Sepetim</h2>
                <button onClick={onClose} className="text-white text-2xl"><FaTimes /></button>
              </div>
              
              <div className="flex-grow p-4 overflow-y-auto">
                <AnimatePresence>
                  {items.length === 0 ? (
                    <motion.p layout className="text-gray-400 text-center mt-8">Sepetiniz boş.</motion.p>
                  ) : (
                    <ul className="space-y-4">
                      {items.map(item => (
                        <motion.li 
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          key={item.id} 
                          className="flex items-center gap-4 bg-gray-800 p-2 rounded-lg"
                        >
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                          <div className="flex-grow">
                            <h4 className="text-white font-semibold">{item.name}</h4>
                            <p className="text-gray-400 text-sm">${item.price}</p>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 bg-gray-700 rounded">-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 bg-gray-700 rounded">+</button>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-lg ml-2">
                            <FaTimes />
                          </button>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </AnimatePresence>
              </div>

              <div className="p-4 border-t border-gray-700">
                <div className="flex justify-between items-center text-white font-bold text-lg">
                  <span>Toplam:</span>
                  <span>${totalPrice}</span>
                </div>
                <button className="w-full mt-4 bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors">
                  Ödemeye Geç
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };
  

// ANA SAYFA EXPORT'U
export function ShoppingCartPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);

   

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
         

      <main className="pt-24 p-8">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Ürünler
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
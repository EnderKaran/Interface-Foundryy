import React, { useEffect, useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import { useCommandPalette } from '../../context/CommandPaletteContext';
import { FaSearch, FaHome, FaCube, FaRobot, FaShoppingCart } from 'react-icons/fa';

export const CommandPalette = () => {
  const { isOpen, closePalette } = useCommandPalette();

  const allActions = useMemo(() => [
    { title: 'Ana Sayfa', href: '/', icon: <FaHome /> },
    { title: '3D Kart Bileşeni', href: '/component/3d-card', icon: <FaCube /> },
    { title: 'AI Destekli Arama', href: '/component/ai-search', icon: <FaRobot /> },
    { title: 'Ürün Yapılandırıcı', href: '/component/product-configurator', icon: <FaCube /> },
    { title: 'Alışveriş Sepeti', href: '/component/shopping-cart', icon: <FaShoppingCart /> },
  ], []);

  const [query, setQuery] = useState('');
  
  const [filteredActions, setFilteredActions] = useState(allActions);

  // Arama/filtreleme mantığı
  const handleQueryChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (newQuery.trim() === '') {
      // Arama kutusu boşsa, tüm listeyi göster
      setFilteredActions(allActions);
    } else {
      const searchWords = newQuery.toLowerCase().split(' ').filter(Boolean);

      
      const results = allActions.filter(action => {
        const lowerCaseTitle = action.title.toLowerCase();
        
        return searchWords.every(word => lowerCaseTitle.includes(word));
      });

      setFilteredActions(results);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      
      const timer = setTimeout(() => {
        setQuery('');
        setFilteredActions(allActions);
      }, 200); 
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, allActions]); 

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closePalette} 
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-50 w-full max-w-lg rounded-xl bg-gray-900 border border-gray-700 shadow-2xl"
          >
            <div className="flex items-center p-4 border-b border-gray-700">
              <FaSearch className="mr-3 text-gray-400" />
              <input
                type="text"
                placeholder="Arayın veya komut yazın..."
                value={query}
                onChange={handleQueryChange} //  Filtreleme fonksiyonu
                className="w-full text-white bg-transparent placeholder:text-gray-500 focus:outline-none"
                autoFocus
              />
            </div>

            <ul className="p-2 max-h-[300px] overflow-y-auto">
              {filteredActions.length === 0 ? (
                <li className="p-3 text-center text-gray-400">Sonuç bulunamadı.</li>
              ) : (
                filteredActions.map((action, index) => (
                  <li key={index}>
                    <Link
                      to={action.href}
                      onClick={closePalette}
                      className="flex items-center gap-3 p-3 text-gray-200 transition-colors rounded-lg hover:bg-gray-800"
                    >
                      <span className="text-gray-400">{action.icon}</span>
                      {action.title}
                    </Link>
                  </li>
                ))
              )}
            </ul>
            
            <div className="p-2 text-xs text-center text-gray-500 border-t border-gray-700">
              Interface Foundry Hızlı Gezgin
            </div>
            
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
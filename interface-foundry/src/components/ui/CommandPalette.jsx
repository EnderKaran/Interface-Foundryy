import React, { useEffect, useState, useMemo, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useCommandPalette } from '../../context/CommandPaletteContext.jsx';
import { FaSearch, FaHome, FaCube, FaRobot, FaShoppingCart } from 'react-icons/fa';

export const CommandPalette = () => {
  const { isOpen, closePalette } = useCommandPalette();
  const navigate = useNavigate();

  const allActions = useMemo(() => [
    { title: 'Ana Sayfa', href: '/', icon: <FaHome /> },
    { title: '3D Kart Bileşeni', href: '/component/3d-card', icon: <FaCube /> },
    { title: 'AI Destekli Arama', href: '/component/ai-search', icon: <FaRobot /> },
    { title: 'Ürün Yapılandırıcı', href: '/component/product-configurator', icon: <FaCube /> },
    { title: 'Alışveriş Sepeti', href: '/component/shopping-cart', icon: <FaShoppingCart /> },
  ], []);

  const [query, setQuery] = useState('');
  const [filteredActions, setFilteredActions] = useState(allActions);
  
  // Klavye ile gezinme için aktif indeksi tutan state
  const [activeIndex, setActiveIndex] = useState(0);

  const listRef = useRef(null);
  const activeItemRef = useRef(null);

  const handleQueryChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setActiveIndex(0);

    if (newQuery.trim() === '') {
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
        setActiveIndex(0); 
      }, 200); 
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, allActions]); 

  
  useEffect(() => {
    if (activeItemRef.current) {
      
      activeItemRef.current.scrollIntoView({
        block: 'nearest', 
      });
    }
  }, [activeIndex]); 

  const handleInputKeyDown = (e) => {
    if (filteredActions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault(); 
      
      setActiveIndex((prev) => (prev + 1) % filteredActions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault(); 
      setActiveIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
    } else if (e.key === 'Enter') {
      e.preventDefault(); 
      const activeAction = filteredActions[activeIndex];
      if (activeAction) {
        navigate(activeAction.href); 
        closePalette();
      }
    }
  };

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
                onChange={handleQueryChange}
                onKeyDown={handleInputKeyDown} // Klavye olay dinleyicisi
                className="w-full text-white bg-transparent placeholder:text-gray-500 focus:outline-none"
                autoFocus
              />
            </div>

            <ul ref={listRef} className="p-2 max-h-[300px] overflow-y-auto">
              {filteredActions.length === 0 ? (
                <li className="p-3 text-center text-gray-400">Sonuç bulunamadı.</li>
              ) : (
                filteredActions.map((action, index) => (
                  <li 
                    key={action.href} 
                    ref={index === activeIndex ? activeItemRef : null} 
                    className={`rounded-lg
                      ${index === activeIndex ? 'bg-gray-800' : 'hover:bg-gray-800'}
                    `}
                    onMouseEnter={() => setActiveIndex(index)} 
                  >
                    <Link
                      to={action.href}
                      onClick={closePalette}
                      className="flex items-center w-full h-full gap-3 p-3 text-gray-200"
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
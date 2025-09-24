import React, { createContext, useState, useContext, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((message) => {
    const id = Date.now(); // Basit bir unique ID
    setNotifications(prev => [...prev, { id, message }]);

    // Bildirimi 3 saniye sonra otomatik olarak kaldır
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  }, []);

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <NotificationContainer notifications={notifications} />
    </NotificationContext.Provider>
  );
};

// Ekranda bildirimleri gösterecek olan component
const NotificationContainer = ({ notifications }) => {
  return (
    <div className="fixed top-4 right-4 z-[100] space-y-2">
      <AnimatePresence>
        {notifications.map(n => (
          <motion.div
            key={n.id}
            layout
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-green-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg"
          >
            {n.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
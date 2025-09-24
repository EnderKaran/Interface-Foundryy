import React, { createContext, useState, useContext } from 'react';
import { useNotification } from './NotificationContext'; // useNotification hook'unu import et

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const { addNotification } = useNotification(); // Bildirim fonksiyonunu context'ten al

  const addToCart = (product) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    addNotification(`${product.name} sepete eklendi!`);
  };

  const removeFromCart = (productId) => {
   
    const removedItem = items.find(item => item.id === productId);
    if(removedItem) {
        addNotification(`${removedItem.name} sepetten çıkarıldı.`);
    }
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };
  
  
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const value = { items, addToCart, removeFromCart, updateQuantity };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
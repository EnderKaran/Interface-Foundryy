import React, { createContext, useState, useContext, useCallback } from 'react';

// 1. Context
const CommandPaletteContext = createContext(undefined);

// 2. Provider
export const CommandPaletteProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPalette = useCallback(() => setIsOpen(true), []);
  const closePalette = useCallback(() => setIsOpen(false), []);
  const togglePalette = useCallback(() => setIsOpen((prev) => !prev), []);

  const value = {
    isOpen,
    openPalette,
    closePalette,
    togglePalette,
  };

  return (
    <CommandPaletteContext.Provider value={value}>
      {children}
    </CommandPaletteContext.Provider>
  );
};

// 3. Kolay kullanım için bir hook
export const useCommandPalette = () => {
  const context = useContext(CommandPaletteContext);
  if (context === undefined) {
    throw new Error('useCommandPalette, CommandPaletteProvider içinde kullanılmalıdır');
  }
  return context;
};
import React, { createContext, useState, useContext, useCallback } from 'react';


const CommandPaletteContext = createContext(undefined);


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

export const useCommandPalette = () => {
  const context = useContext(CommandPaletteContext);
  if (context === undefined) {
    throw new Error('useCommandPalette, CommandPaletteProvider içinde kullanılmalıdır');
  }
  return context;
};
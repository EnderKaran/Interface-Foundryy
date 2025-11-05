import { useEffect, useCallback } from 'react';
import { useCommandPalette } from '../context/CommandPaletteContext.jsx';

export const useGlobalHotKey = () => {
  const { togglePalette, closePalette, isOpen } = useCommandPalette();

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      togglePalette();
    }

    
    if (event.key === 'Escape' && isOpen) {
      event.preventDefault();
      closePalette();
    }
  }, [togglePalette, closePalette, isOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
};
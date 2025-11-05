import { useEffect, useCallback } from 'react';
import { useCommandPalette } from '../context/CommandPaletteContext'; 

export const useGlobalHotKey = () => {
  
  const { togglePalette } = useCommandPalette();

  
  const handleKeyDown = useCallback((event) => {
    
    if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
      
      
      event.preventDefault();
      
      
      togglePalette();
    }
  }, [togglePalette]); 
  
  useEffect(() => {
    
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
};
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Sayfa importları
import { HomePage } from './pages/HomePage';
import { ComponentDetailPage } from './pages/ComponentDetailPage';
import { ProductConfiguratorPage } from './pages/ProductConfiguratorPage';
import { ShoppingCartPage } from './pages/ShoppingCartPage';
import { AISearchPage } from './pages/AISearchPage';
import { KanbanPage } from './pages/KanbanPage'; 
// Context importları
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './context/NotificationContext';
import { CommandPaletteProvider, useCommandPalette } from './context/CommandPaletteContext';
import { KanbanProvider } from './context/KanbanContext'; 

// UI ve Hook importları
import { CommandPalette } from './components/ui/CommandPalette';
import { useGlobalHotKey } from './hooks/useGlobalHotKey';
import { FaSearch } from 'react-icons/fa'; //Arama ikonu
import AudioVisualizerPage from './pages/AudioVisualizerPage';
import MultiStepFormPage from './pages/MultiStepFormPage';

import './App.css';

const MobilePaletteTrigger = () => {
  const { openPalette } = useCommandPalette();

  return (
    <button
      onClick={openPalette}
      className="fixed z-40 p-4 text-white bg-gray-800 border border-gray-700 rounded-full shadow-lg md:hidden bottom-6 right-6 active:bg-gray-700"
      aria-label="Aramayı (Komut Paletini) Aç" // Erişilebilirlik için
    >
      <FaSearch className="w-5 h-5" />
    </button>
  );
};

const AppContent = () => {
  useGlobalHotKey(); // Masaüstü için (Cmd+K)

  return (
    <BrowserRouter basename="/Interface-Foundryy/">
      {/* Global Bileşenler */}
      <CommandPalette />
      <MobilePaletteTrigger /> {/* Mobil için dokunmatik buton */}
      
      {/* Sayfa Rotaları */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/component/3d-card" element={<ComponentDetailPage />} />
        <Route path="/component/product-configurator" element={<ProductConfiguratorPage />} />
        <Route path="/component/ai-search" element={<AISearchPage />} />
        <Route path="/component/shopping-cart" element={<ShoppingCartPage />} /> 
        <Route path="/component/kanban-board" element={<KanbanPage />} /> 
        <Route path="/component/audio-visualizer" element={<AudioVisualizerPage />} />
        <Route path="/component/multi-step-form" element={<MultiStepFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// Ana App (Provider'ları saran)
function App() {
  return (
    <NotificationProvider>
      <CartProvider>
        <CommandPaletteProvider>
          <KanbanProvider>
            <AppContent /> 
          </KanbanProvider>
        </CommandPaletteProvider>
      </CartProvider>
    </NotificationProvider>
  );
}

export default App;
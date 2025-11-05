import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { ComponentDetailPage } from './pages/ComponentDetailPage';
import { ProductConfiguratorPage } from './pages/ProductConfiguratorPage';
import { ShoppingCartPage } from './pages/ShoppingCartPage';
import { AISearchPage } from './pages/AISearchPage';
//Context importları
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './context/NotificationContext';
import { CommandPaletteProvider } from './context/CommandPaletteContext';
import { CommandPalette } from './components/ui/CommandPalette';
import { useGlobalHotKey } from './hooks/useGlobalHotKey';

import './App.css';

const AppContent = () => {
  
  useGlobalHotKey(); 

  return (
    <BrowserRouter basename="/Interface-Foundryy/">
      <CommandPalette />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/component/3d-card" element={<ComponentDetailPage />} />
        <Route path="/component/product-configurator" element={<ProductConfiguratorPage />} />
        <Route path="/component/ai-search" element={<AISearchPage />} />
        <Route path="/component/shopping-cart" element={<ShoppingCartPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}



function App() {
  return (
    <NotificationProvider>
      <CartProvider>
        <CommandPaletteProvider>
          <AppContent />
        </CommandPaletteProvider>
      </CartProvider>
    </NotificationProvider>
  );
}

export default App;
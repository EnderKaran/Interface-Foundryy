import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage.jsx';
import { ComponentDetailPage } from './pages/ComponentDetailPage.jsx';
import { ProductConfiguratorPage } from './pages/ProductConfiguratorPage.jsx';
import { ShoppingCartPage } from './pages/ShoppingCartPage.jsx';
import { AISearchPage } from './pages/AISearchPage.jsx';
import { KanbanPage } from './pages/KanbanPage';
//Context importları
import { CartProvider } from './context/CartContext.jsx';
import { NotificationProvider } from './context/NotificationContext.jsx';
import { CommandPaletteProvider } from './context/CommandPaletteContext.jsx';
import { KanbanProvider } from './context/KanbanContext';
import { CommandPalette } from './components/ui/CommandPalette.jsx';
import { useGlobalHotKey } from './hooks/useGlobalHotKey.js';

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
        <Route path="/component/kanban-board" element={<KanbanPage />} />
      </Routes>
    </BrowserRouter>
  );
}



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
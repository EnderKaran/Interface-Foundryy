import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { ComponentDetailPage } from './pages/ComponentDetailPage';
import { ProductConfiguratorPage } from './pages/ProductConfiguratorPage';
import { ShoppingCartPage } from './pages/ShoppingCartPage';
import { AISearchPage } from './pages/AISearchPage';
//Context importları
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './context/NotificationContext';

import './App.css';


function App() {
  return (
     <NotificationProvider>
    <CartProvider>
     
    <BrowserRouter basename="/Interface-Foundryy/">
      <Routes>
       
        <Route path="/" element={<HomePage />} />
      
        <Route path="/component/3d-card" element={<ComponentDetailPage />} />
        
        <Route path="/component/product-configurator" element={<ProductConfiguratorPage />} />

        <Route path="/component/ai-search" element={<AISearchPage />} />

        <Route path="/component/shopping-cart" element={<ShoppingCartPage />} /> 
      </Routes>
    </BrowserRouter>
      
    </CartProvider>
    </NotificationProvider>
  );
}

export default App;
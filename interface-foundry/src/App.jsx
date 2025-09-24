import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { ComponentDetailPage } from './pages/ComponentDetailPage';
import { ProductConfiguratorPage } from './pages/ProductConfiguratorPage';
import { AISearchPage } from './pages/AISearchPage';

import './App.css';


function App() {
  return (
    
    <BrowserRouter basename="/Interface-Foundryy/">
      <Routes>
       
        <Route path="/" element={<HomePage />} />
      
        <Route path="/component/3d-card" element={<ComponentDetailPage />} />
        
        <Route path="/component/product-configurator" element={<ProductConfiguratorPage />} />

        <Route path="/component/ai-search" element={<AISearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
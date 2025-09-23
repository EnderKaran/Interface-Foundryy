import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { ComponentDetailPage } from './pages/ComponentDetailPage';
import { ProductConfiguratorPage } from './pages/ProductConfiguratorPage';

import './App.css';


function App() {
  return (
    
    <BrowserRouter basename="/Interface-Foundryy/">
      <Routes>
       
        <Route path="/" element={<HomePage />} />
      
        <Route path="/component/3d-card" element={<ComponentDetailPage />} />
        
        <Route path="/component/product-configurator" element={<ProductConfiguratorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
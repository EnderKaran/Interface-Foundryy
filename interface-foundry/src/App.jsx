import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { ComponentDetailPage } from './pages/ComponentDetailPage';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
               
        <Route path="/component/3d-card" element={<ComponentDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
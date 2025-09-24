import React, { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { SiStorybook } from "react-icons/si";
import { Ayakkabi } from '../components/Ayakkabi.jsx';

const renkPaleti = ["#ffffff", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#000000"];

export function ProductConfiguratorPage() {
  const [activeColors, setActiveColors] = useState({
    ayakkabi: '#ffffff',
  });
    
  const storybookUrl = `${import.meta.env.VITE_STORYBOOK_URL}/?path=/docs/sayfalar-ürün-yapılandırıcı-sayfası--docs`;

  return (
    <div className="relative w-screen h-screen bg-gray-900">
      <div className="absolute top-0 left-0 z-10 p-4">
        <Link to="/" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
          ← Ana Sayfa
        </Link>          
      </div>
      <a href={storybookUrl} target="_blank" rel="noopener noreferrer" className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors z-20" title="Storybook'u Aç">
            <SiStorybook className="text-pink-500 text-xl" />
            <span className="hidden sm:inline">Storybook</span>
      </a> 
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 p-4 bg-gray-800/50 backdrop-blur-sm rounded-t-lg flex flex-wrap justify-center gap-4">
        {Object.keys(activeColors).map((part) => (
          <div key={part} className="flex flex-col items-center gap-2">
            <span className="text-white capitalize font-bold text-xs">{part}</span>
            <div className="flex gap-1">
              {renkPaleti.map((color) => (
                <div
                  key={color}
                  onClick={() => setActiveColors(prev => ({ ...prev, [part]: color }))}
                  className={`w-6 h-6 rounded-full cursor-pointer border-2 ${activeColors[part] === color ? 'border-white' : 'border-transparent'}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
        <Suspense fallback={null}>
          <Ayakkabi customColors={activeColors} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}
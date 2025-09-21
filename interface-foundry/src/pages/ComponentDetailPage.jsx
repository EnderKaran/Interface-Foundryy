import React from 'react';
import { Link } from 'react-router-dom';
import { Interactive3DCardShowcase } from '../components/showcase/Interactive3DCardShowcase';

export function ComponentDetailPage() {
  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center p-4 overflow-hidden">

      <Link to="/" className="absolute top-8 left-8 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors z-10">
        ← Geri Dön
      </Link>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white">3D Efektli Kart</h1>
        <p className="text-neutral-400 mt-2">Fare imlecini kartın üzerine getirerek etkileşime geçin.</p>
      </div>

      <Interactive3DCardShowcase />

    </div>
  );
}
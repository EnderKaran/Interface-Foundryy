import React from 'react';
import { Link } from 'react-router-dom';
import AudioVisualizer from '../components/AudioVisualizer';
import { SiStorybook } from "react-icons/si";

const AudioVisualizerPage = () => {
  
    const storybookUrl = `${import.meta.env.VITE_STORYBOOK_URL}/?path=/docs/sayfalar-audio-visualizer-sayfası--docs`;
  
    return (
    <div className="relative min-h-screen px-4 py-8 text-white bg-black">
      
      {/* --- Geri Dön Butonu --- */}
      <div className="mx-auto mb-8 max-w-7xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-full text-neutral-400 bg-neutral-900/50 border-neutral-800 hover:bg-neutral-800 hover:text-white hover:border-neutral-700 group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-4 h-4 transition-transform transform group-hover:-translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Anasayfaya Dön
        </Link>
          </div>
          
        <a href={storybookUrl} target="_blank" rel="noopener noreferrer" className="absolute z-20 flex items-center gap-2 px-4 py-2 text-white transition-colors bg-gray-800 rounded-lg top-6 right-6 md:top-8 md:right-8 hover:bg-gray-700" title="Storybook'u Aç">
                    <SiStorybook className="text-xl text-pink-500" />
                    <span className="hidden sm:inline">Storybook</span>
              </a>

      <div className="mx-auto space-y-12 max-w-7xl">
        
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-purple-500">
            Audio Visualizer
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            HTML5 Canvas ve Web Audio API kullanılarak oluşturulmuş gerçek zamanlı ses spektrum analizi.
          </p>
        </div>

        {/* Visualizer Component */}
        <div className="flex justify-center">
            <AudioVisualizer />
        </div>

        
        

      </div>
    </div>
  );
};

export default AudioVisualizerPage;
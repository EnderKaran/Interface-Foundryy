import React from 'react';
import { Link } from 'react-router-dom';
import MultiStepForm from '../components/MultiStepForm';
import { SiStorybook } from "react-icons/si";

const MultiStepFormPage = () => {

    const storybookUrl = `${import.meta.env.VITE_STORYBOOK_URL}/?path=/docs/sayfalar-çok-adımlı-form-sayfası--varsayilan`;
    
  return (
    <div className="relative flex flex-col min-h-screen px-4 py-8 text-white bg-black">
      
      <div className="w-full mx-auto mb-8 max-w-7xl">
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

      {/* Sayfa İçeriği */}
      <div className="flex flex-col items-center justify-center flex-1 space-y-8">
        <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                Üyelik Başvurusu
            </h1>
            <p className="max-w-lg mx-auto text-neutral-400">
                React Hook Form ve Zod kullanarak oluşturulmuş, çok adımlı ve validasyonlu kayıt sihirbazı.
            </p>
        </div>

        <MultiStepForm />
      </div>
    </div>
  );
};

export default MultiStepFormPage;
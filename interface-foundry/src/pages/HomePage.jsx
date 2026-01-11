import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'; 
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";

import efektliCardSayfasi from '../assets/3d-efektli-card-sayfasi.png';
import productConfiguratorPage from '../assets/product-configurator-page.png';
import aiPage from '../assets/ai-page.png';
import shoppingcartPage from '../assets/shopping-cart-page.png';
import kanbanPage from '../assets/kanban-sayfasi.png';

const components = [
  {
    title: "3D Efektli Kart",
    description: "Fare hareketini takip eden derinlik (parallax) etkili kartlar.",
    header: (
        <img 
            src={efektliCardSayfasi} 
            alt="3D Kart Önizleme"
            className="object-cover w-full h-full rounded-xl"
        />
    ),
    className: "md:col-span-1",
    link: "/component/3d-card", 
  },
  {
    title: "Dinamik Alışveriş Sepeti",
    description: "React Context ve Framer Motion ile akıcı bir sepet deneyimi.",
    header: (
        <img 
            src={shoppingcartPage} 
            alt="Alışveriş Sepeti Önizleme"
            className="object-cover w-full h-full rounded-xl"
        />
    ),
    className: "md:col-span-1",
    link: "/component/shopping-cart", 
  },
  {
    title: "Dinamik Kanban Panosu",
    description: "Görevleri ve kolonları sürükleyip bırakarak yeniden sıralayın.",
    header: (
        <img 
            src={kanbanPage} 
            alt="Kanban Panosu Önizleme"
            className="object-cover w-full h-full rounded-xl"
        />
    ),
    className: "md:col-span-1",
    link: "/component/kanban-board", 
  },
  {
    title: "İnteraktif Ürün Konfigüratörü",
    description: "React Three Fiber ile 3D modelin renklerini canlı değiştirin.",
    header: (
        <img 
            src={productConfiguratorPage} 
            alt="Ürün Konfigüratör Önizleme"
            className="object-cover w-full h-full rounded-xl"
        />
    ),
    className: "md:col-span-2",
    link: "/component/product-configurator", 
  },
  {
    title: "AI Destekli Arama",
    description: "Google Gemini API'si ile doğal dil anlamsal arama.",
    header: (
        <img 
            src={aiPage} 
            alt="AI Arama Önizleme"
            className="object-cover w-full h-full rounded-xl"
        />
    ),
    className: "md:col-span-1", 
    link: "/component/ai-search", 
  },
  
  {
    title: "Multi-Step Kayıt Formu",
    description: "React Hook Form, Zod ve Framer Motion ile animasyonlu sihirbaz.",
    header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border border-neutral-800 items-center justify-center relative overflow-hidden group">
             {/* Arka Plan Deseni */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
             
             <div className="relative z-10 w-3/4 p-3 space-y-2 transition-transform duration-300 border rounded-lg shadow-2xl bg-neutral-800/80 border-neutral-700 backdrop-blur-sm group-hover:-translate-y-1">
                {/* Progress Bar */}
                <div className="flex gap-1 mb-3">
                    <div className="w-1/3 h-1 rounded-full bg-cyan-500"></div>
                    <div className="w-1/3 h-1 rounded-full bg-neutral-600"></div>
                    <div className="w-1/3 h-1 rounded-full bg-neutral-600"></div>
                </div>
                {/* Input Lines */}
                <div className="w-full h-2 rounded bg-neutral-600/50"></div>
                <div className="w-2/3 h-2 rounded bg-neutral-600/50"></div>
                {/* Button */}
                <div className="w-1/2 h-6 mt-2 ml-auto rounded bg-gradient-to-r from-cyan-500 to-blue-500"></div>
             </div>
        </div>
    ),
    className: "md:col-span-1",
    link: "/component/multi-step-form",
  },

  {
    title: "Audio Visualizer",
    description: "Web Audio API ve Canvas ile müzik ritmine göre dans eden frekanslar.",
    header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-black border border-neutral-800 items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
            <div className="z-10 flex items-end h-12 gap-1.5">
                <div className="w-3 h-4 transition-all duration-300 ease-in-out rounded-t-sm bg-cyan-500 group-hover:h-12 animate-pulse"></div>
                <div className="w-3 h-8 transition-all duration-300 ease-in-out delay-75 bg-purple-500 rounded-t-sm group-hover:h-16 animate-pulse"></div>
                <div className="w-3 h-6 transition-all duration-300 ease-in-out delay-150 bg-pink-500 rounded-t-sm group-hover:h-10 animate-pulse"></div>
                <div className="w-3 h-10 transition-all duration-300 ease-in-out delay-100 bg-teal-500 rounded-t-sm group-hover:h-14 animate-pulse"></div>
                <div className="hidden w-3 h-5 transition-all duration-300 ease-in-out delay-200 bg-indigo-500 rounded-t-sm md:block group-hover:h-8 animate-pulse"></div>
            </div>
        </div>
    ),
    className: "md:col-span-2",
    link: "/component/audio-visualizer", 
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen p-4 overflow-hidden bg-black md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mb-12 text-center"
      >
        <h1 className="py-4 text-4xl font-bold text-transparent md:text-6xl bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
          Interface Foundry
        </h1>
        <p className="max-w-2xl mx-auto mt-2 text-lg text-neutral-300">
          Fikirlerin interaktif deneyimlere dönüştüğü yer. Bu benim yaşayan bileşen kütüphanem.
        </p>
      </motion.div>

      <BentoGrid>
        {components.map((item, i) => (
          <Link 
            to={item.link} 
            key={i} 
            className={item.className} 
            style={{ 
              pointerEvents: item.link === '#' ? 'none' : 'auto',
              cursor: item.link === '#' ? 'default' : 'pointer'
            }}
          >
            <BentoGridItem
              title={item.title}
              description={item.description}
              header={item.header}
              className="h-full"
            />
          </Link>
        ))}
      </BentoGrid>
    </div>
  );
}

export default HomePage;
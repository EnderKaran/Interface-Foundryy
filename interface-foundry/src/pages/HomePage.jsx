import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'; 
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";

import efektlicardsayfasi from '../assets/3d-efektli-card-sayfasi.png';

const components = [
  {
    title: "3D Efektli Kart",
    description: "Fare hareketini takip ederek derinlik hissi veren, göz alıcı bir kart bileşeni.",
    header: (
        <img 
            src={efektlicardsayfasi} 
            alt="3D Kart Önizleme"
            className="h-full w-full object-cover rounded-xl"
        />
    ),
    className: "md:col-span-2",
    link: "/component/3d-card", 
  },
  {
    title: "İnteraktif Ürün Konfigüratörü",
    description: "Kullanıcıların bir ürünü 3D olarak döndürmesine ve renklerini canlı olarak değiştirmesine olanak tanır.",
    header: <div className="bg-gray-800 rounded-xl h-full w-full flex items-center justify-center text-gray-400">Geliştiriliyor</div>,
    className: "md:col-span-1",
    link: "#", 
  },
  {
    title: "AI Destekli Arama",
    description: "Doğal dil işleme kullanarak anlamsal arama yapan akıllı bir arama çubuğu.",
    header: <div className="bg-gray-800 rounded-xl h-full w-full flex items-center justify-center text-gray-400">Geliştiriliyor</div>,
    className: "md:col-span-1",
    link: "#", 
  },
  {
    title: "Dinamik Alışveriş Sepeti",
    description: "Modern animasyonlar ve anlık durum güncellemeleri ile akıcı bir kullanıcı deneyimi sunar.",
    header: <div className="bg-gray-800 rounded-xl h-full w-full flex items-center justify-center text-gray-400">Geliştiriliyor</div>,
    className: "md:col-span-2",
    link: "#", 
  },
];

export function HomePage() {
  return (
    <div className="p-4 md:p-8 bg-black min-h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Interface Foundry
        </h1>
        <p className="mt-2 text-lg text-neutral-300 max-w-2xl mx-auto">
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
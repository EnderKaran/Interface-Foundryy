import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'; 
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";

// Tüm görseller için importlar
import efektliCardSayfasi from '../assets/3d-efektli-card-sayfasi.png';
import productConfiguratorPage from '../assets/product-configurator-page.png';
import aiPage from '../assets/ai-page.png';
import shoppingcartPage from '../assets/shopping-cart-page.png';
import kanbanPage from '../assets/kanban-sayfasi.png'; // Kanban görseli

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
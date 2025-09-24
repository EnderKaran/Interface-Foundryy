import React from 'react';
import { cn } from "../../lib/utils"; // Bu yolun doğru olduğunu varsayıyoruz

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, header }) => {
  // 1. Fare hareketlerini dinleyecek fonksiyonu ekliyoruz
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 h-full",
        // 2. Parıltı efektinin çalışması için gerekli sınıfları ekliyoruz
        "relative overflow-hidden", // 'relative' ve 'overflow-hidden' kritik
        className
      )}
      // 3. Fare hareketlerini yakalamak için onMouseMove olayını ekliyoruz
      onMouseMove={handleMouseMove}
      style={{
        // CSS değişkenlerini başlatıyoruz
        '--mouse-x': '0px',
        '--mouse-y': '0px',
      }}
    >
      {/* 4. Fareyi takip eden parıltı efektini oluşturacak gizli div'i ekliyoruz */}
      <div 
        className="
          pointer-events-none 
          absolute 
          -inset-px 
          rounded-xl 
          opacity-0 
          transition 
          duration-300 
          group-hover/bento:opacity-100
        "
        style={{
          // Tailwind'in "arbitrary properties" özelliği ile dinamik bir gradient oluşturuyoruz.
          // Bu gradient, CSS değişkenlerimizi kullanarak fareyi takip eder.
          background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(0, 224, 184, 0.15), transparent 80%)',
        }}
      />
      
      {/* Orijinal içeriğiniz burada başlıyor. Z-index ile parıltının üzerinde kalmasını sağlıyoruz. */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-full h-36 rounded-xl overflow-hidden">
          {header}
        </div>
        
        <div className="group-hover/bento:translate-x-2 transition duration-200 mt-auto">
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
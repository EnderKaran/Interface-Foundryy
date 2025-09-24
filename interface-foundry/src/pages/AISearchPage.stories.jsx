import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AISearchPage } from '../pages/AISearchPage'; 

// --- TEMEL STORYBOOK AYARLARI ---
export default {
  title: 'Sayfalar/AI Destekli Arama Sayfası',
  component: AISearchPage,
  parameters: {
    
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

// Hikaye 1: Sayfanın ilk yüklendiğindeki varsayılan hali
export const VarsayilanDurum = {
  storyName: '1. Varsayılan Durum',
  parameters: {
    docs: {
      description: {
        story: 'Kullanıcı sayfayı ilk ziyaret ettiğinde veya herhangi bir arama yapmadığında component\'in nasıl göründüğünü gösterir. Arama çubuğu aktiftir ve sonuç alanı boştur.'
      }
    }
  },
};

export const YuklenmeDurumu = {
  storyName: '2. Yüklenme Durumu',
  parameters: {
    docs: {
      description: {
        story: 'Kullanıcı bir arama yaptıktan sonra API\'den cevap beklenirken arayüzün nasıl göründüğünü gösterir. Buton ve input devre dışı bırakılır ve bir yüklenme mesajı gösterilir.'
      }
    }
  },
  render: () => {
    
    const AISearchPageLoadingMock = () => (
      <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
        </div>
        <div className="absolute top-0 left-0 z-20 p-4">
          <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">← Ana Sayfa</a>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-4">
          <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">AI Destekli Arama</h1>
          <form className="w-full mt-8">
            <input
              type="text"
              placeholder="Doğal bir dilde sorunuzu sorun..."
              className="w-full h-12 px-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-teal-500"
              disabled={true}
            />
            <button type="submit" disabled={true} className="w-full mt-4 h-12 rounded-lg bg-gray-600 text-white font-bold transition-colors">
              Aranıyor...
            </button>
          </form>
          <div className="w-full mt-8 text-white p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 min-h-[150px]">
            <p className="text-center">Lütfen bekleyin, AI düşünüyor...</p>
          </div>
        </div>
      </div>
    );
    return <AISearchPageLoadingMock />;
  },
};

// Hikaye 3: API'den başarılı bir sonuç alındığındaki durum
export const SonucGosterimi = {
    storyName: '3. Sonuç Gösterimi',
    parameters: {
      docs: {
        description: {
          story: 'API\'den başarılı bir cevap alındığında sonucun sonuç alanında nasıl görüntülendiğini gösterir.'
        }
      }
    },
    render: () => {
      
      const AISearchPageResultMock = () => (
        <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
           <div className="w-full absolute inset-0 h-screen"></div>
           <div className="absolute top-0 left-0 z-20 p-4">
            <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">← Ana Sayfa</a>
           </div>
           <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-4">
             <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">AI Destekli Arama</h1>
             <form className="w-full mt-8">
               <input type="text" value="React'in temel hookları nelerdir?" readOnly className="w-full h-12 px-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-teal-500" />
               <button type="submit" className="w-full mt-4 h-12 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 transition-colors">Ara</button>
             </form>
             <div className="w-full mt-8 text-white p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 min-h-[150px]">
               <p className="whitespace-pre-wrap font-mono">React'in temel hook'ları şunlardır:
                - useState: Bileşenlere state (durum) eklemek için kullanılır.
                - useEffect: Yan etkileri (veri çekme, abonelikler) yönetmek için kullanılır.
                - useContext: Prop'ları derinlemesine geçirme (prop drilling) sorununu çözmek için kullanılır.</p>
             </div>
           </div>
         </div>
      );
      return <AISearchPageResultMock />;
    },
  };
  
// Hikaye 4: API'den hata döndüğündeki durum
export const HataDurumu = {
  storyName: '4. Hata Durumu',
  parameters: {
    docs: {
      description: {
        story: 'API çağrısı başarısız olduğunda veya bir hata oluştuğunda kullanıcıya nasıl bir geri bildirim gösterildiğini sergiler.'
      }
    }
  },
  render: () => {
    const AISearchPageErrorMock = () => (
        <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
           <div className="w-full absolute inset-0 h-screen"></div>
           <div className="absolute top-0 left-0 z-20 p-4">
            <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">← Ana Sayfa</a>
           </div>
           <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-4">
             <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">AI Destekli Arama</h1>
             <form className="w-full mt-8">
               <input type="text" value="Bu arama hata verecek" readOnly className="w-full h-12 px-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-teal-500" />
               <button type="submit" className="w-full mt-4 h-12 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 transition-colors">Ara</button>
             </form>
             <div className="w-full mt-8 text-white p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 min-h-[150px]">
               <p className="text-red-500 text-center">API anahtarı geçersiz veya istek limiti aşıldı.</p>
             </div>
           </div>
         </div>
    );
    return <AISearchPageErrorMock />;
  },
};
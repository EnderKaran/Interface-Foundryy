import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ProductConfiguratorPage } from './ProductConfiguratorPage'; // Yolu kontrol edin

// --- TEMEL STORYBOOK AYARLARI ---
export default {
  title: 'Sayfalar/Ürün Yapılandırıcı Sayfası',
  component: ProductConfiguratorPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Kullanıcının 3D bir ayakkabı modelini inceleyebileceği, döndürebileceği ve renklerini anlık olarak değiştirebileceği tam sayfa bir arayüz.'
      }
    }
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
};


// --- HİKAYELER (STORIES) ---

// Hikaye 1: Sayfanın varsayılan görünümü
export const VarsayilanGorunum = {
  storyName: '1. Varsayılan Görünüm',
  parameters: {
    docs: {
      description: {
        story: 'Sayfanın ilk yüklendiğindeki varsayılan durumunu gösterir. Model, başlangıç rengi olan beyaz ile görüntülenir.'
      }
    }
  },

};

// Hikaye 2: Kullanıcı etkileşimlerini belgelemek için
export const EtkilesimTesti = {
  storyName: '2. Kullanıcı Etkileşimleri',
  parameters: {
    docs: {
      description: {
        story: `Bu hikaye, kullanıcı etkileşimlerini manuel olarak test etmek ve belgelemek içindir. Lütfen aşağıdaki adımları deneyin:
- **Modeli Döndürme:** Fare sol tuşuna basılı tutarak ayakkabı modelini 360 derece döndürün.
- **Yakınlaşma/Uzaklaşma:** Farenin tekerleğini kullanarak modele yakınlaşıp uzaklaşın.
- **Renk Değiştirme:** Alttaki renk paletinden farklı bir renk seçin ve modelin renginin anında değiştiğini gözlemleyin.`
      }
    }
  },
};
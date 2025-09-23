import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ProductConfiguratorPage } from '../pages/ProductConfiguratorPage';

// --- ANA STORYBOOK YAPILANDIRMASI ---
export default {
  // Storybook arayüzündeki başlık ve gruplama
  title: 'Sayfalar/Ürün Yapılandırıcı Sayfası',
  // Test edilecek ana bileşen
  component: ProductConfiguratorPage,
  // Sayfa, react-router-dom gibi kütüphaneler kullanıyorsa,
  // bu decorator'lar story'lerin doğru çalışmasını sağlar.
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
  // Bu parametre, story'nin tuvalde nasıl görüneceğini belirler.
  // Tam sayfa bileşenleri için 'fullscreen' idealdir.
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Kullanıcının 3D bir ürün modelini (ayakkabı) inceleyebileceği ve renklerini anlık olarak değiştirebileceği tam sayfa bir arayüzdür. Sayfa, 3D sahne, model ve renk seçimi için bir kontrol paneli içerir.'
      }
    }
  },
  // Otomatik dokümantasyon oluşturulmasını sağlar.
  tags: ['autodocs'],
};

// --- HİKAYE 1: Varsayılan Durum ---
// Bu hikaye, sayfanın hiçbir prop almadan, varsayılan haliyle nasıl göründüğünü gösterir.
export const VarsayilanDurum = {
  storyName: '1. Varsayılan Görünüm',
  parameters: {
    docs: {
      description: {
        story: 'Sayfanın ilk yüklendiğindeki varsayılan durumudur. Model, başlangıç renkleri ve kamera pozisyonu ile görüntülenir.'
      }
    }
  },
  // Varsayılan hikayeler için args'ı boş bırakmak yeterlidir.
  args: {},
};

// --- HİKAYE 2: Başlangıç Renkleri Belirlenmiş ---
// Bu hikaye, sayfaya dışarıdan başlangıç renkleri verildiğinde modelin nasıl görüneceğini test eder.
export const OzelBaslangicRenkleri = {
  storyName: '2. Özel Başlangıç Renkleri İle',
  parameters: {
    docs: {
      description: {
        story: '`ProductConfiguratorPage` bileşenine `initialColors` prop\'u aracılığıyla özel başlangıç renkleri atanabilir. Bu örnekte, modelin başlangıç rengi parlak bir kırmızı olarak ayarlanmıştır.'
      }
    }
  },
  args: {
    // Bileşene gönderilecek proplar burada tanımlanır.
    initialColors: {
      mesh: '#ff0000', // Kırmızı renk
    }
  },
};

// --- HİKAYE 3: Etkileşim Testi ---
// Bu hikayenin amacı kod değişikliği yapmak değil, kullanıcı etkileşimlerini belgelemektir.
export const EtkilesimVeAnimasyonlar = {
  storyName: '3. Kullanıcı Etkileşimleri',
  parameters: {
    docs: {
      description: {
        story: `Bu hikaye, kullanıcı etkileşimlerini test etmek ve belgelemek içindir. Lütfen aşağıdaki adımları deneyin:
- **Model Döndürme:** Fare sol tuşuna basılı tutarak modeli 360 derece döndürün.
- **Yakınlaşma/Uzaklaşma:** Farenin tekerleğini kullanarak modele yakınlaşıp uzaklaşın.
- **Renk Değiştirme:** Sağ taraftaki renk paletinden farklı bir renk seçin ve modelin renginin anında değiştiğini gözlemleyin.
- **Animasyonlar:** Renk geçişlerindeki yumuşak animasyona dikkat edin.`
      }
    }
  },
  args: {},
};
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { CartProvider } from '../context/CartContext';
import { NotificationProvider } from '../context/NotificationContext'; 
import { ShoppingCartPage } from './ShoppingCartPage';

export default {
  title: 'Sayfalar/Dinamik Alışveriş Sepeti',
  component: ShoppingCartPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Ürünlerin listelendiği, sepete eklenebildiği ve sepet içeriğinin animasyonlu bir kenar çubuğunda görüntülenebildiği tam sayfa bir alışveriş deneyimi.'
      }
    }
  },
  
  decorators: [
    (Story) => (
      <MemoryRouter>
        <NotificationProvider>    
          <CartProvider>
            <Story />
          </CartProvider>
        </NotificationProvider>
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
};


// --- HİKAYELER (STORIES) ---

export const VarsayilanEtkilesimliHali = {
  storyName: '1. Varsayılan ve Etkileşimli Hali',
  parameters: {
    docs: {
      description: {
        story: `Bu, component'in canlı ve tamamen etkileşimli halidir. Lütfen aşağıdaki senaryoları deneyin:
- **Sepete Ekle:** Birkaç farklı ürün için "Sepete Ekle" butonuna tıklayın. Sağ üstte "Sepete Eklendi!" bildiriminin çıktığını ve Navbar'daki sepet sayacının arttığını gözlemleyin.
- **Sepeti Aç:** Sağ üstteki sepet ikonuna tıklayarak sepet kenar çubuğunu açın.
- **Miktarı Değiştir:** Sepet içindeki ürünlerin miktarını '+' ve '-' butonları ile değiştirin. Toplam fiyatın güncellendiğini görün.
- **Ürünü Kaldır:** Ürünü 'X' butonu ile sepetten tamamen kaldırın.`
      }
    }
  },
};
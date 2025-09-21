import React from 'react';
import { CardContainer, CardBody, CardItem } from './3d-card';

export default {
  title: 'UI Bileşenleri/3D Kart', 
  component: CardContainer, 
  parameters: {
    layout: 'centered', 
  },
  tags: ['autodocs'], 
  
};


export const TemelKullanim = {
  storyName: '1. Temel Kullanım', 
  parameters: {
    docs: {
      description: {
        story: '`CardContainer`, `CardBody` ve `CardItem` bileşenlerinin en temel kullanımını gösterir. Kartın genel yapısı ve fare ile etkileşimi burada görülebilir.'
      }
    }
  },
  render: (args) => (
    <CardContainer {...args}>
      <CardBody className="bg-gray-900 w-auto h-auto p-8 rounded-xl border border-gray-700">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          Başlık Alanı
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-400 text-sm mt-2"
        >
          Bu, 3D Kart bileşeninin standart ve temel bir örneğidir.
        </CardItem>
      </CardBody>
    </CardContainer>
  ),
};

export const FarkliDerinlikler = {
  storyName: '2. Farklı Derinlikler (translateZ)',
  parameters: {
    docs: {
      description: {
        story: '`CardItem` bileşenine verilen `translateZ` prop\'u, ögelerin Z-ekseninde ne kadar "öne çıkacağını" belirler. Yüksek değerler, fare hareketinde daha belirgin bir 3D etkisi yaratır.'
      }
    }
  },
  render: (args) => (
    <CardContainer {...args}>
      <CardBody className="bg-gray-900 w-auto h-auto p-8 rounded-xl border border-gray-700">
        <CardItem
          translateZ="100" // En önde
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600"
        >
          EN ÖNDE (translateZ: 100)
        </CardItem>
        <CardItem
          translateZ="50" // Ortada
          className="text-lg font-bold text-white mt-4"
        >
          ORTADA (translateZ: 50)
        </CardItem>
        <CardItem
          translateZ="0" // En arkada (hareketsiz)
          className="text-sm text-neutral-400 mt-4"
        >
          ARKADA (translateZ: 0)
        </CardItem>
      </CardBody>
    </CardContainer>
  ),
};

export const ParallaxEtkisi = {
  storyName: '3. Parallax Etkisi (translateX/Y)',
  parameters: {
    docs: {
      description: {
        story: '`translateX` ve `translateY` propları, ögelerin fare hareketine ters yönde ne kadar kayacağını belirler. Bu, katmanlar arasında bir parallax (ıraklık) etkisi oluşturur.'
      }
    }
  },
  render: (args) => (
    <CardContainer {...args}>
      <CardBody className="relative bg-gray-900 w-auto h-auto p-8 rounded-xl border border-gray-700">
        <CardItem
            as="p"
            translateX={-20} // Sola doğru daha fazla hareket eder
            translateY={-20} // Yukarı doğru daha fazla hareket eder
            className="absolute top-4 left-4 text-xs text-neutral-500"
        >
            Arka Plan Katmanı
        </CardItem>
        <CardItem
          translateZ="80"
          className="text-3xl font-bold text-white"
        >
          Ana İçerik
        </CardItem>
        <CardItem
            as="p"
            translateX={20} // Sağa doğru daha fazla hareket eder
            translateY={20} // Aşağı doğru daha fazla hareket eder
            className="absolute bottom-4 right-4 text-xs text-green-400"
        >
            Ön Plan Katmanı
        </CardItem>
      </CardBody>
    </CardContainer>
  ),
};

// --- Hikaye 4: Kompleks Bir Örnek ---
// Bu hikaye, tüm propların bir arada kullanıldığı karmaşık bir senaryoyu gösterir.
export const KompleksOrnek = {
    storyName: '4. Kompleks Bir Örnek',
    parameters: {
      docs: {
        description: {
          story: 'Tüm propların (`translateZ`, `translateX`, `translateY`, `rotateZ`) bir arada kullanılarak nasıl zengin ve katmanlı bir tasarım oluşturulabileceğini gösteren bir örnek.'
        }
      }
    },
    render: (args) => (
      <CardContainer {...args}>
        <CardBody className="relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-gray-700 bg-gray-900">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white"
          >
            Proje Başlığı
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-400 text-sm max-w-sm mt-2"
          >
            Tüm efektler bir arada.
          </CardItem>
          <CardItem 
            translateZ="100" 
            translateX="-20"
            translateY="-10"
            className="w-full mt-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1671650125931-7f85b7db0551?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="görsel"
            />
          </CardItem>
          <div className="flex justify-end items-center mt-10">
            <CardItem
              translateZ={40}
              translateX={20}
              rotateZ={-5} // Hafifçe döndürülmüş
              as="button"
              className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
            >
              Buton
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    ),
  };
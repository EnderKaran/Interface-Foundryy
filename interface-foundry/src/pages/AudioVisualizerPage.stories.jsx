import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AudioVisualizerPage from './AudioVisualizerPage';

export default {
  title: 'Sayfalar/Audio Visualizer Sayfası',
  component: AudioVisualizerPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Web Audio API ve HTML5 Canvas kullanılarak oluşturulan ses görselleştirme sayfasını temsil eder. Kullanıcıların ses dosyası yükleyip frekansları analiz etmesine olanak tanır.'
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

export const VarsayilanGorunum = {
  storyName: '1. Varsayılan Görünüm',
  parameters: {
    docs: {
      description: {
        story: `Bu hikaye, Audio Visualizer sayfasının varsayılan halidir.
        
        **Etkileşim Özellikleri:**
        - **Dosya Seç:** "Müzik Seç" butonu ile bilgisayarınızdan bir ses dosyası (.mp3 vb.) yükleyebilirsiniz.
        - **Oynat/Durdur:** Yüklenen müzik dosyasını oynatabilir ve görselleştirmeyi başlatabilirsiniz.`
      }
    }
  },
};
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { KanbanProvider } from '../context/KanbanContext';
import { KanbanPage } from './KanbanPage';


export default {
  title: 'Sayfalar/Kanban Görev Panosu',
  component: KanbanPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Tüm Kanban panosu sayfasını temsil eder. Bu bileşen, `dnd-kit` kullanarak hem görevlerin hem de kolonların sürüklenip bırakılmasını yönetir.'
      }
    }
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <KanbanProvider>
          <Story />
        </KanbanProvider>
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
};

// --- HİKAYELER (STORIES) ---

export const VarsayilanEtkilesimliHali = {
  storyName: '1. Varsayılan Etkileşimli Hali',
  parameters: {
    docs: {
      description: {
        story: `Bu, Kanban panosunun varsayılan, canlı ve tamamen etkileşimli halidir. 
        Tüm sürükle-bırak işlevleri aktiftir:
        - **Görevleri Sürükleme:** Görevleri kolon içinde veya kolonlar arasında sürükleyebilirsiniz.
        - **Kolonları Sürükleme:** Kolon başlıklarından tutup kolonları yeniden sıralayabilirsiniz.
        - **Yeni Görev Ekleme:** Her kolonun altındaki "+ Yeni Görev Ekle" butonunu kullanabilirsiniz.`
      }
    }
  },
};
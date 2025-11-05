import React, { useEffect } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CommandPaletteProvider, useCommandPalette } from '../../context/CommandPaletteContext';
import { CommandPalette } from './CommandPalette';


// --- StorybookWrapper  ---
const StorybookWrapper = ({ children, openOnLoad = false }) => {
  const { openPalette } = useCommandPalette();

  useEffect(() => {
    if (openOnLoad) {
      openPalette();
    }
  }, [openOnLoad, openPalette]);

  return <>{children}</>;
};

// --- default export ---
export default {
  title: 'UI Bileşenleri/Komut Paleti (CommandPalette)',
  component: CommandPalette,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Uygulama genelinde `Cmd+K` veya `Ctrl+K` ile tetiklenen hızlı arama ve gezinme paleti.'
      }
    }
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <CommandPaletteProvider>
          <Story />
        </CommandPaletteProvider>
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
};

// --- VarsayilanKapaliHali---
export const VarsayilanKapaliHali = {
  storyName: '1. Varsayılan (Kapalı)',
 
  render: () => (
    <div className="flex items-center justify-center w-screen h-screen p-8 text-white bg-gray-800">
      <p className="text-xl font-bold">Burası ana uygulama içeriği. <br /> `Cmd+K` tuşlarına basın.</p>
      <CommandPalette />
    </div>
  )
};

// --- VarsayilanAcikHali  ---
export const VarsayilanAcikHali = {
  storyName: '2. Varsayılan (Açık)',
  
  render: () => (
    <StorybookWrapper openOnLoad={true}>
      <div className="w-screen h-screen bg-gray-800" />
      <CommandPalette />
    </StorybookWrapper>
  ),
};

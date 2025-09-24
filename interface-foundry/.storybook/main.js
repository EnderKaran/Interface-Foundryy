/** @type { import('@storybook/react-vite').StorybookConfig } */

import { mergeConfig } from 'vite'; // Vite'tan mergeConfig'i import edin
import path from 'path'; // Yol takma adları için path modülünü import edin

const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },

  // --- BU KISMI EKLEYİN ---
  /**
   * Storybook'un Vite yapılandırmasını projenizin ana yapılandırmasıyla
   * birleştirmek için bu fonksiyonu kullanıyoruz.
   */
  async viteFinal(config) {
    // Mevcut Storybook Vite yapılandırmasını, projenizin ana
    // Vite yapılandırmasından gelen ek ayarlarla birleştiriyoruz.
    return mergeConfig(config, {
      // .glb uzantılı dosyaların bir asset (statik dosya) olarak
      // tanınmasını sağlıyoruz. Bu, 3D modellerin yüklenmesi için kritiktir.
      assetsInclude: ['**/*.glb'],
      
      // Projenizin ana vite.config.js dosyasında tanımladığınız
      // yol takma adlarını (aliases) buraya da ekliyoruz.
      // Bu, Storybook'un '@/' gibi yolları doğru çözmesini sağlar.
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
          // Eğer projenizin kök dizininde başka takma adlar varsa
          // (örn: "@lib"), onları da buraya ekleyebilirsiniz.
          // "@lib": path.resolve(__dirname, "../lib"),
        },
      },
    });
  },
  // --- EKLENECEK KISIM BİTTİ ---
};

export default config;
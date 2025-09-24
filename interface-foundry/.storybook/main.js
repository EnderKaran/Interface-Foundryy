/** @type { import('@storybook/react-vite').StorybookConfig } */

import { mergeConfig } from 'vite'; 
import path from 'path'; 

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
    "@storybook/addon-vitest",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },

  async viteFinal(config) {
    
    return mergeConfig(config, {
      
      assetsInclude: ['**/*.glb'],
      
      
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
          
        },
      },
    });
  },

};

export default config;
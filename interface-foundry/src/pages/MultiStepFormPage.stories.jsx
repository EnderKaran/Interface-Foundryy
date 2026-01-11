import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import MultiStepFormPage from './MultiStepFormPage';

export default {
  title: 'Sayfalar/Çok Adımlı Form Sayfası',
  component: MultiStepFormPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Varsayilan = {};
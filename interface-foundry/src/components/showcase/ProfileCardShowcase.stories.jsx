import React from 'react';
import { ProfileCardShowcase } from './ProfileCardShowcase';

export default {
  // Storybook arayüzünde "Showcase" kategorisi altında görünecek.
  title: 'Showcase/ProfileCardShowcase',

  component: ProfileCardShowcase,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
};

export const Default = {
  args: {},
};
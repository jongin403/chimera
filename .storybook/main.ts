import type { StorybookConfig } from '@storybook/nextjs';

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
        '@api': [path.resolve(__dirname, '../src/api')],
        '@assets': [path.resolve(__dirname, '../src/assets')],
        '@components': [path.resolve(__dirname, '../src/components')],
        '@hooks': [path.resolve(__dirname, '../src/hooks')],
        '@icons': [path.resolve(__dirname, '../src/icons')],
        '@styles': [path.resolve(__dirname, '../src/styles')],
        '@types': [path.resolve(__dirname, '../src/types')],
        '@utils': [path.resolve(__dirname, '../src/utils')],
        '@wrappers': [path.resolve(__dirname, '../src/wrappers')],
      };
    }
    return config;
  },
};
export default config;

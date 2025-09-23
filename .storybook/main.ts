// .storybook/main.ts
import type { StorybookConfig } from '@storybook/nextjs-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  framework: '@storybook/nextjs-vite',
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mjs)'],
  addons: ['@storybook/addon-docs'],
  core: { builder: '@storybook/builder-vite' },
  async viteFinal(viteConfig) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(viteConfig, {
      plugins: [tsconfigPaths()],
      // ❌ retire isso se não usa o addon:
      // optimizeDeps: { include: ['storybook-dark-mode'] },
    });
  },
};

export default config;

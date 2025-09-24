import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  framework: '@storybook/nextjs-vite',
  stories: ['../src/stories/*.stories.@(js|jsx|ts|tsx|mjs)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-themes',
  ],
  core: { builder: '@storybook/builder-vite' },
  async viteFinal(viteConfig) {
    const { mergeConfig } = await import('vite');
    const tsconfigPaths = (await import('vite-tsconfig-paths')).default;
    return mergeConfig(viteConfig, {
      plugins: [tsconfigPaths()]
    });
  },
};

export default config;

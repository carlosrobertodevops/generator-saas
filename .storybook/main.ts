import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  "staticDirs": ["../public"],
  "stories": ["..src/components/**/stories.tsx"],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],

  "framework": {
    "name": "@storybook/nextjs-vite",
    "options": {}
  },

  viteFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  }

  // viteFinal: (config) => {
  //   config.resolve = config.resolve || {};
  //   config.resolve.alias = {
  //     ...(config.resolve.alias || {}),
  //     '@': `${process.cwd()}/src`
  //   };
  //   return config;
  // }
};
export default config;
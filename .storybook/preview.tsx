// .storybook/preview.tsx
import type { Preview } from '@storybook/react';
import React from 'react';
import { AppContext, defaultState } from '@/app/AppContext';

const MockProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isSideBarHidden, setIsSideBarHidden] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(1200);

  const value = {
    ...defaultState,
    isSideBarHiddenObject: { isSideBarHidden, setIsSideBarHidden },
    windowWidthObject: { windowWidth, setWindowWidth },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <MockProvider>
        <Story />
      </MockProvider>
    ),
  ],
  parameters: {
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: 'light' },
        { name: 'dark', class: 'dark' },
      ],
    },
  },
};

export default preview;

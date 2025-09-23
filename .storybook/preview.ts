// .storybook/preview.tsx
import type { Preview } from '@storybook/react';
import React from 'react';

// ajuste o import conforme seu AppContext exporta (Context ou Provider)
import { AppContext } from '@/src/app/AppContext';

const MockProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isSideBarHidden, setIsSideBarHidden] = React.useState(false);
  const value = {
    isSideBarHiddenObject: { isSideBarHidden, setIsSideBarHidden },
    windowWidthObject: { windowWidth: 1200 },
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const preview: Preview = {
  decorators: [(Story) => <MockProvider><Story /></MockProvider>],
};

export default preview;

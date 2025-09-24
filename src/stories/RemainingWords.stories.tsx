import type { Meta, StoryObj } from '@storybook/react';
import RemainingWords from '../components//RemainingWords';

const meta: Meta<typeof RemainingWords> = {
  title: 'Components/RemainingWords',
  component: RemainingWords,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof RemainingWords>;
export const Default: Story = { args: {} };

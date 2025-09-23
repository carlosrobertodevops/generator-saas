import type { Meta, StoryObj } from '@storybook/react';
import SingleHistoryItem from './SingleHistoryItem';

const meta: Meta<typeof SingleHistoryItem> = {
  title: 'Components/SingleHistoryItem',
  component: SingleHistoryItem,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof SingleHistoryItem>;
export const Default: Story = { args: {} };

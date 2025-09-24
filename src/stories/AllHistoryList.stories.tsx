import type { Meta, StoryObj } from '@storybook/react';
import AllHistoryList from '@/components/AllHistoryList';

const meta: Meta<typeof AllHistoryList> = {
  title: 'Components/AllHistoryList',
  component: AllHistoryList,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof AllHistoryList>;
export const Default: Story = { args: {} };

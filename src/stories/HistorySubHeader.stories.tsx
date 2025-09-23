import type { Meta, StoryObj } from '@storybook/react';
import HistorySubHeader from './HistorySubHeader';

const meta: Meta<typeof HistorySubHeader> = {
  title: 'Components/HistorySubHeader',
  component: HistorySubHeader,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof HistorySubHeader>;
export const Default: Story = { args: {} };

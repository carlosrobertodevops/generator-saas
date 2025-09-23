import type { Meta, StoryObj } from '@storybook/react';
import DashStats from './DashStats';

const meta: Meta<typeof DashStats> = {
  title: 'Components/DashStats',
  component: DashStats,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof DashStats>;
export const Default: Story = { args: {} };

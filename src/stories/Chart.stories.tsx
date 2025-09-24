import type { Meta, StoryObj } from '@storybook/react';
import ChartContainer from '../components/Chart';

const meta: Meta<typeof ChartContainer> = {
  title: 'Components/Chart',
  component: ChartContainer,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ChartContainer>;
export const Default: Story = { args: {} };

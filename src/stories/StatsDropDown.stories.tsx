import type { Meta, StoryObj } from '@storybook/react';
import StatsDropDown from './StatsDropDown';

const meta: Meta<typeof StatsDropDown> = {
  title: 'Components/StatsDropDown',
  component: StatsDropDown,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof StatsDropDown>;
export const Default: Story = { args: {} };

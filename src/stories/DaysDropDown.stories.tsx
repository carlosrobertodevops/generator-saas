import type { Meta, StoryObj } from '@storybook/react';
import DaysDropDown from './DaysDropDown';

const meta: Meta<typeof DaysDropDown> = {
  title: 'Components/DaysDropDown',
  component: DaysDropDown,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof DaysDropDown>;
export const Default: Story = { args: {} };

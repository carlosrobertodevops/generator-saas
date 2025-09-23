import type { Meta, StoryObj } from '@storybook/react';
import FilterByTemplatesDropDown from './FilterByTemplatesDropDown';

const meta: Meta<typeof FilterByTemplatesDropDown> = {
  title: 'Components/FilterByTemplatesDropDown',
  component: FilterByTemplatesDropDown,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof FilterByTemplatesDropDown>;
export const Default: Story = { args: {} };

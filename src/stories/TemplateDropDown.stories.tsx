import type { Meta, StoryObj } from '@storybook/react';
import TemplateDropDown from './TemplateDropDown';

const meta: Meta<typeof TemplateDropDown> = {
  title: 'Components/TemplateDropDown',
  component: TemplateDropDown,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TemplateDropDown>;
export const Default: Story = { args: {} };

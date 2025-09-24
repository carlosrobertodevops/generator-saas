import type { Meta, StoryObj } from '@storybook/react';
import TemplatesList from '../components/TemplatesList';

const meta: Meta<typeof TemplatesList> = {
  title: 'Components/TemplatesList',
  component: TemplatesList,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TemplatesList>;
export const Default: Story = { args: {} };

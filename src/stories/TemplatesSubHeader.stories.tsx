import type { Meta, StoryObj } from '@storybook/react';
import TemplatesSubHeader from './TemplatesSubHeader';

const meta: Meta<typeof TemplatesSubHeader> = {
  title: 'Components/TemplatesSubHeader',
  component: TemplatesSubHeader,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TemplatesSubHeader>;
export const Default: Story = { args: {} };

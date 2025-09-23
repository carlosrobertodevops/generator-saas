import type { Meta, StoryObj } from '@storybook/react';
import TemplateSingleCard from './TemplateSingleCard';

const meta: Meta<typeof TemplateSingleCard> = {
  title: 'Components/TemplateSingleCard',
  component: TemplateSingleCard,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TemplateSingleCard>;
export const Default: Story = { args: {} };

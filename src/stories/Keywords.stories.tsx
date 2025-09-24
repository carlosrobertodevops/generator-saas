import type { Meta, StoryObj } from '@storybook/react';
import Keywords from '../components/Keywords';

const meta: Meta<typeof Keywords> = {
  title: 'Components/Keywords',
  component: Keywords,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Keywords>;
export const Default: Story = { args: {} };

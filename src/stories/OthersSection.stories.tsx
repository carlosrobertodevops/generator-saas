import type { Meta, StoryObj } from '@storybook/react';
import OthersSection from '../components/OthersSection';

const meta: Meta<typeof OthersSection> = {
  title: 'Components/OthersSection',
  component: OthersSection,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof OthersSection>;
export const Default: Story = { args: {} };

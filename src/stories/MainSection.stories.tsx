import type { Meta, StoryObj } from '@storybook/react';
import MainSection from '../components/MainSection';

const meta: Meta<typeof MainSection> = {
  title: 'Components/MainSection',
  component: MainSection,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof MainSection>;
export const Default: Story = { args: {} };

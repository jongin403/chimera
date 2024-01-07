import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from '.';

const meta = {
  title: 'Example/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};

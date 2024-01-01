import type { Meta, StoryObj } from '@storybook/react';
import FloatingButton from '.';

const meta = {
  title: 'Example/FloatingButton',
  component: FloatingButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FloatingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};

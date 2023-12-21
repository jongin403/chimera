import type { Meta, StoryObj } from '@storybook/react';
import CommonButton from '.';

const meta = {
  title: 'Example/CommonButton',
  component: CommonButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CommonButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button1: Story = {
  args: {
    children: '버튼명',
  },
};

export const Button2: Story = {
  args: {
    children: '버튼명',
  },
};

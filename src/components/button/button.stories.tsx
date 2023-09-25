import type { Meta, StoryObj } from '@storybook/react';
import { Button as ImportedButton } from './button';
import '../../style.css';

const meta = {
  title: 'Components/Button',
  component: ImportedButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: { onClick: { action: 'handleClick' } },
} satisfies Meta<typeof ImportedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    children: 'submit',
    variant: 'primary',
  },
};

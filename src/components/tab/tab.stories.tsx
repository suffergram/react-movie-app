import type { Meta, StoryObj } from '@storybook/react';
import { Tab as ImportedTab } from './tab';
import { Row } from '../main/style';
import '../../style.css';

const meta = {
  title: 'Components/Tab',
  component: ImportedTab,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    onClick: { action: 'handleClick' },
    checked: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <Row>
        <Story />
      </Row>
    ),
  ],
} satisfies Meta<typeof ImportedTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tab: Story = {
  args: {
    checked: false,
    value: 'comedy',
    name: 'comedy',
  },
};

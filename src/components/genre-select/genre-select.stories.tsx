import type { Meta, StoryObj } from '@storybook/react';
import { GenreSelect as ImportedGenreSelect } from './genre-select';

const meta = {
  title: 'Components/GenreSelect',
  component: ImportedGenreSelect,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '25rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ImportedGenreSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GenreSelect: Story = {
  args: {
    value: [],
    error: undefined,
  },
};

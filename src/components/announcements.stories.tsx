import type { Meta, StoryObj } from "@storybook/react";

import { Announcements } from "./announcements";

const meta = {
  title: "Components/Announcements",
  component: Announcements,
} satisfies Meta<typeof Announcements>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default implementation of the Announcements component with no announcements.
 */
export const Default: Story = {};

/**
 * Implementation of the Announcements component with a single announcement.
 */
export const SingleAnnouncement: Story = {
  args: {
    data: [
      {
        title: "Test Announcement",
        body: "This is a test announcement.",
      },
    ],
  },
};

/**
 * Implementation of the Announcements component with multiple announcements.
 */
export const MultipleAnnouncements: Story = {
  args: {
    data: new Array(5).fill({}).map((_, index) => ({
      title: `Test Announcement ${index + 1}`,
      body: `This is test announcement number ${index + 1}.`,
    })),
  },
};

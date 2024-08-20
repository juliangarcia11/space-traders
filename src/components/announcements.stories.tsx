import type { Meta, StoryObj } from "@storybook/react";

import { Announcements } from "./announcements";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Components/Announcements",
  component: Announcements,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const announcementContainer = await canvas.findByTestId("announcements");

    await expect(announcementContainer).toBeInTheDocument();

    await expect(
      announcementContainer.querySelector(".pi-chevron-left"),
    ).toBeInTheDocument();

    await expect(
      announcementContainer.querySelector(".pi-chevron-right"),
    ).toBeInTheDocument();
  },
} satisfies Meta<typeof Announcements>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default implementation of the Announcements component with no announcements.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const announcementContainer = await canvas.findByTestId("announcements");

    const header = await canvas.findByText("No Announcements");
    await expect(header).toBeInTheDocument();

    const subTitle = await canvas.findByText(
      "There are no announcements at this time.",
    );
    await expect(subTitle).toBeInTheDocument();

    const buttons = announcementContainer.querySelectorAll("button");
    await expect(buttons).toHaveLength(2);
    await expect(buttons[0]).toBeDisabled();
    await expect(buttons[1]).toBeDisabled();
  },
};

const MockAnnouncement = {
  title: "Test Announcement",
  body: "This is a test announcement.",
};

/**
 * Implementation of the Announcements component with a single announcement.
 */
export const SingleAnnouncement: Story = {
  args: {
    data: [MockAnnouncement],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const announcementContainer = await canvas.findByTestId("announcements");

    const header = await canvas.findByText(MockAnnouncement.title);
    await expect(header).toBeInTheDocument();

    const subTitle = await canvas.findByText(MockAnnouncement.body);
    await expect(subTitle).toBeInTheDocument();

    const buttons = announcementContainer.querySelectorAll("button");
    await expect(buttons).toHaveLength(2);
    await expect(buttons[0]).toBeDisabled();
    await expect(buttons[1]).toBeDisabled();
  },
};

const MockAnnouncements = new Array(5).fill({}).map((_, index) => ({
  title: `Test Announcement ${index + 1}`,
  body: `This is test announcement number ${index + 1}.`,
}));

/**
 * Implementation of the Announcements component with multiple announcements.
 */
export const MultipleAnnouncements: Story = {
  args: {
    data: MockAnnouncements,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const announcementContainer = await canvas.findByTestId("announcements");
    const buttons = announcementContainer.querySelectorAll("button");
    await expect(buttons).toHaveLength(2);
    await expect(buttons[0]).toBeDisabled();
    await expect(buttons[1]).toBeEnabled();

    // test that the component cycles through the announcements & buttons are enabled/disabled correctly
    for (let i = 0; i < MockAnnouncements.length; i++) {
      const announcement = MockAnnouncements[i]!;
      const header = await canvas.findByText(announcement.title);
      await expect(header).toBeInTheDocument();

      const subTitle = await canvas.findByText(announcement.body);
      await expect(subTitle).toBeInTheDocument();

      if (i > 0) {
        await expect(buttons[0]).toBeEnabled();
      }

      if (i < MockAnnouncements.length - 1) {
        await expect(buttons[1]).toBeEnabled();
        await userEvent.click(buttons[1]!);
      }
    }

    await expect(buttons[0]).toBeEnabled();
    await expect(buttons[1]).toBeDisabled();
  },
};

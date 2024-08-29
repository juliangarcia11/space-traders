import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import Page from "./page";
import { MockGetStatusResponse } from "~/api";

const meta = {
  title: "Pages/Home Page",
  component: Page,
  excludeStories: /.*Data$/, // 👈 Storybook ignores anything that contains Data
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // test that all the stats are displayed
    for (const [key, value] of Object.entries(MockGetStatusResponse.stats)) {
      const stat = await canvas.findByTestId(key);
      await expect(stat).toBeInTheDocument();
      await expect(stat).toHaveTextContent(value.toString());
    }

    // test that the leaderboards are displayed
    const leaderboards = await canvas.findByTestId("leaderboards");
    await expect(leaderboards).toBeInTheDocument();

    // test that the announcements are displayed
    const announcements = await canvas.findByTestId("announcements");
    await expect(announcements).toBeInTheDocument();
  },
};

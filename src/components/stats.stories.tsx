import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

import { Stats } from "./stats";
import { TestData } from "~/app/page.stories";

const meta = {
  title: "Components/Stats",
  component: Stats,
} satisfies Meta<typeof Stats>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stats: TestData.stats,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const statsContainer = await canvas.findByTestId("stats");

    // test that all the stats are displayed
    for (const [key, value] of Object.entries(TestData.stats)) {
      const stat = await canvas.findByTestId(key);
      await expect(stat).toBeInTheDocument();
      await expect(stat).toHaveTextContent(value.toString());
    }
  },
};

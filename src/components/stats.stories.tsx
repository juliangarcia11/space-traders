import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import { Stats } from "./stats";

import { MockGetStatusResponse } from "~/api";

const meta = {
  title: "Components/Stats",
  component: Stats,
} satisfies Meta<typeof Stats>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stats: MockGetStatusResponse.stats,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await canvas.findByTestId("stats");
    // test that all the stats are displayed
    for (const [key, value] of Object.entries(MockGetStatusResponse.stats)) {
      const stat = await canvas.findByTestId(key);
      await expect(stat).toBeInTheDocument();
      await expect(stat).toHaveTextContent(value.toString());
    }
  },
};

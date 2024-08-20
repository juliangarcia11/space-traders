import type { Meta, StoryObj } from "@storybook/react";

import { Leaderboards } from "./leaderboards";

const meta = {
  title: "Components/Leaderboards",
  component: Leaderboards,
} satisfies Meta<typeof Leaderboards>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      mostCredits: new Array(5)
        .fill({})
        .map((_, i) => ({
          agentSymbol: `Test User ${i}`,
          credits: i * 100,
        }))
        .sort((a, b) => b.credits - a.credits),
      mostSubmittedCharts: new Array(5)
        .fill({})
        .map((_, i) => ({
          agentSymbol: `Test User ${i}`,
          chartCount: i * 10,
        }))
        .sort((a, b) => b.chartCount - a.chartCount),
    },
  },
};

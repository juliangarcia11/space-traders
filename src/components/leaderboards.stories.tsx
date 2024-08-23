import type { Meta, StoryObj } from "@storybook/react";

import { Leaderboards } from "./leaderboards";
import { expect, within } from "@storybook/test";

const meta = {
  title: "Components/Leaderboards",
  component: Leaderboards,
} satisfies Meta<typeof Leaderboards>;

export default meta;

type Story = StoryObj<typeof meta>;

const dataTestId = "leaderboards";

export const LeaderboardDefault: Story = {
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
    "data-testid": dataTestId,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await canvas.findByTestId(dataTestId);

    const mostCreditsTable = await canvas.findByTestId("most-credits");
    await expect(mostCreditsTable).toBeInTheDocument();

    const mostSubmittedChartsTable = await canvas.findByTestId(
      "most-submitted-charts",
    );
    await expect(mostSubmittedChartsTable).toBeInTheDocument();
  },
};

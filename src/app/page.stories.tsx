import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

import Page from "./page";
import { http, HttpResponse } from "msw";
import { type TGetStatusResponse } from "~/api";
import { MultipleAnnouncements } from "~/components/announcements.stories";
import { LeaderboardDefault } from "~/components/leaderboards.stories";

const meta = {
  title: "Pages/Home Page",
  component: Page,
  excludeStories: /.*Data$/, // 👈 Storybook ignores anything that contains Data
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

// 👇 The mocked data that will be used in the story
export const TestData: TGetStatusResponse = {
  status: "Storybook Test Status",
  version: "v0.Test",
  resetDate: new Date().toLocaleDateString(),
  description: "Storybook Test Description",
  stats: {
    agents: 1000,
    ships: 69,
    systems: 21,
    waypoints: 225,
  },
  leaderboards: LeaderboardDefault.args?.data ?? {
    mostCredits: [{ agentSymbol: "Storybook Test Agent", credits: 100 }],
    mostSubmittedCharts: [
      { agentSymbol: "Storybook Test Agent", chartCount: 1 },
    ],
  },
  serverResets: {
    next: new Date().toLocaleDateString(),
    frequency: "Storybook Test Frequency",
  },
  announcements: MultipleAnnouncements.args?.data ?? [],
  links: [], // TODO: Add links after implementing the component
};

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://api.spacetraders.io/v2/", () => {
          return HttpResponse.json(TestData); // 👈 Return the mocked data
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // test that all the stats are displayed
    for (const [key, value] of Object.entries(TestData.stats)) {
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

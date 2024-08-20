import type { Meta, StoryObj } from "@storybook/react";

import Page from "./page";
import { http, HttpResponse } from "msw";
import { type TGetStatusResponse } from "~/api";
import { MultipleAnnouncements } from "~/components/announcements.stories";
import { LeaderboardDefault } from "~/components/leaderboards.stories";

const meta = {
  title: "Pages/Home Page",
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

// 👇 The mocked data that will be used in the story
const TestData: TGetStatusResponse = {
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
};

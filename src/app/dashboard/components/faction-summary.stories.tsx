import { FactionSummary } from "~/app/dashboard/components/faction-summary";
import { type Meta, type StoryObj } from "@storybook/react";
import { PostAgentResponse200 } from "~/api";
import { within, expect } from "@storybook/test";

const meta: Meta<typeof FactionSummary> = {
  title: "Pages/Dashboard Page/Faction Summary",
  component: FactionSummary,
};

export default meta;
type Story = StoryObj<typeof FactionSummary>;

export const FactionSummaryStory: Story = {
  name: "Default",
  args: {
    faction: PostAgentResponse200.data.faction,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText(PostAgentResponse200.data.faction.name),
    ).toBeVisible();
    await expect(canvas.getByText("RECRUITING")).toBeVisible();
    await expect(
      canvas.getByText(PostAgentResponse200.data.faction.description),
    ).toBeVisible();
    await expect(canvas.getAllByTestId("faction-trait")).toBeTruthy();
  },
};

export const FactionSummaryClosedStory: Story = {
  name: "Closed",
  args: {
    faction: { ...PostAgentResponse200.data.faction, isRecruiting: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText(PostAgentResponse200.data.faction.name),
    ).toBeVisible();
    await expect(canvas.getByText("CLOSED")).toBeVisible();
    await expect(
      canvas.getByText(PostAgentResponse200.data.faction.description),
    ).toBeVisible();
    await expect(canvas.getAllByTestId("faction-trait")).toBeTruthy();
  },
};

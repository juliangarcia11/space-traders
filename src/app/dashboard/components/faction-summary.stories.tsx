import { FactionSummary } from "~/app/dashboard/components/faction-summary";
import { type Meta, type StoryObj } from "@storybook/react";
import { MockPostAgentResponse } from "~/api";
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
    faction: MockPostAgentResponse.data.faction,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText(MockPostAgentResponse.data.faction.name),
    ).toBeVisible();
    await expect(canvas.getByText("RECRUITING")).toBeVisible();
    await expect(
      canvas.getByText(MockPostAgentResponse.data.faction.description),
    ).toBeVisible();
    await expect(canvas.getAllByTestId("faction-trait")).toBeTruthy();
    await expect(
      canvas.getByTestId(
        `waypoint-link-${MockPostAgentResponse.data.faction.headquarters}`,
      ),
    ).toBeVisible();
  },
};

export const FactionSummaryClosedStory: Story = {
  name: "Closed",
  args: {
    faction: { ...MockPostAgentResponse.data.faction, isRecruiting: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText(MockPostAgentResponse.data.faction.name),
    ).toBeVisible();
    await expect(canvas.getByText("CLOSED")).toBeVisible();
    await expect(
      canvas.getByText(MockPostAgentResponse.data.faction.description),
    ).toBeVisible();
    await expect(canvas.getAllByTestId("faction-trait")).toBeTruthy();
    await expect(
      canvas.getByTestId(
        `waypoint-link-${MockPostAgentResponse.data.faction.headquarters}`,
      ),
    ).toBeVisible();
  },
};

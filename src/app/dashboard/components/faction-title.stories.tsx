import { type Meta, type StoryObj } from "@storybook/react";
import { MockPostAgentResponse } from "~/api";
import { FactionTitle } from "~/app/dashboard/components/faction-title";
import { within, expect } from "@storybook/test";

const meta: Meta<typeof FactionTitle> = {
  title: "Pages/Dashboard Page/Faction Title",
  component: FactionTitle,
};

export default meta;
type Story = StoryObj<typeof FactionTitle>;

export const FactionTitleStory: Story = {
  name: "Default",
  args: {
    faction: MockPostAgentResponse.data.faction,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByTestId("faction-title");
    await expect(
      canvas.queryByText(MockPostAgentResponse.data.faction.name),
    ).toBeInTheDocument();
    await expect(
      canvas.queryByText(MockPostAgentResponse.data.faction.symbol),
    ).toBeInTheDocument();
    await canvas.findByTestId("recruiting-status");
    await expect(canvas.queryByText("RECRUITING")).toBeInTheDocument();
  },
};

export const FactionTitleClosedStory: Story = {
  name: "Closed",
  args: {
    faction: { ...MockPostAgentResponse.data.faction, isRecruiting: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByTestId("faction-title");
    await expect(
      canvas.queryByText(MockPostAgentResponse.data.faction.name),
    ).toBeInTheDocument();
    await expect(
      canvas.queryByText(MockPostAgentResponse.data.faction.symbol),
    ).toBeInTheDocument();
    await canvas.findByTestId("recruiting-status");
    await expect(canvas.queryByText("CLOSED")).toBeInTheDocument();
  },
};

import { Faction } from "~/app/dashboard/components/faction";
import { type Meta, type StoryObj } from "@storybook/react";
import { MockPostAgentResponse } from "~/api";
import { userEvent, within } from "@storybook/test";

const meta: Meta<typeof Faction> = {
  title: "Pages/Dashboard Page/Faction",
  component: Faction,
};

export default meta;
type Story = StoryObj<typeof Faction>;

export const AgentSummaryFactionStory: Story = {
  name: "Default",
  args: {
    faction: MockPostAgentResponse.data.faction,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // find the toggler
    const button = await canvas.findByTestId("faction");
    // click the toggler
    await userEvent.click(button);
  },
};

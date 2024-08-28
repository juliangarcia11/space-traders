import { Faction } from "~/app/dashboard/components/faction";
import { type Meta, type StoryObj } from "@storybook/react";
import { PostAgentResponse200 } from "~/api";
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
    faction: PostAgentResponse200.data.faction,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // find the toggler
    const button = await canvas.findByTestId("faction");
    // click the toggler
    await userEvent.click(button);
  },
};

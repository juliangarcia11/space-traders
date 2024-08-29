import { AgentSummary } from "~/app/dashboard/components/agent-summary";
import { type Meta, type StoryObj } from "@storybook/react";
import { MockPostAgentResponse } from "~/api";
import { within } from "@storybook/test";

const meta: Meta<typeof AgentSummary> = {
  title: "Pages/Dashboard Page/Agent Summary",
  component: AgentSummary,
};

export default meta;
type Story = StoryObj<typeof AgentSummary>;

export const AgentSummaryStory: Story = {
  name: "Default",
  args: {
    agent: MockPostAgentResponse.data.agent,
    faction: MockPostAgentResponse.data.faction,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByTestId("agent-summary");
    await canvas.findByTestId("agent-credits");
    await canvas.findByTestId("faction");
  },
};

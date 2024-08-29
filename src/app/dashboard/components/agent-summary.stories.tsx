import { AgentSummary } from "~/app/dashboard/components/agent-summary";
import { type Meta, type StoryObj } from "@storybook/react";
import { PostAgentResponse200 } from "~/api";
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
    agent: PostAgentResponse200.data.agent,
    faction: PostAgentResponse200.data.faction,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByTestId("agent-summary");
    await canvas.findByTestId("agent-credits");
    await canvas.findByTestId("faction");
  },
};

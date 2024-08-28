import { FactionSummary } from "~/app/dashboard/components/faction-summary";
import { type Meta, type StoryObj } from "@storybook/react";
import { PostAgentResponse200 } from "~/api";

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
};

export const FactionSummaryClosedStory: Story = {
  name: "Closed",
  args: {
    faction: { ...PostAgentResponse200.data.faction, isRecruiting: false },
  },
};

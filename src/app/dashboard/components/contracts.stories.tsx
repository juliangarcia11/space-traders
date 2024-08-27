import { Contracts } from "~/app/dashboard/components/contracts";
import { type Meta, type StoryObj } from "@storybook/react";
import { PostAgentResponse200, type TContract } from "~/api";
import { within } from "@storybook/test";

const meta: Meta<typeof Contracts> = {
  title: "Pages/Dashboard Page/Contracts",
  component: Contracts,
};

export default meta;
type Story = StoryObj<typeof Contracts>;

export const ContractsStory: Story = {
  name: "Default",
  args: {
    contracts: [PostAgentResponse200.data.contract as TContract],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // TODO: more tests after adding more mini-features
    await canvas.findByTestId("acceptance-status");
  },
};

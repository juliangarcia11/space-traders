import { ContractSummary } from "~/app/dashboard/components/contract-summary";
import { type Meta, type StoryObj } from "@storybook/react";
import { PostAgentResponse200, type TContract } from "~/api";
import { within } from "@storybook/test";

const meta: Meta<typeof ContractSummary> = {
  title: "Pages/Dashboard Page/Contract Summary",
  component: ContractSummary,
};

export default meta;
type Story = StoryObj<typeof ContractSummary>;

const defaultArgs = {
  contract: PostAgentResponse200.data.contract as TContract,
};

export const ContractSummaryStory: Story = {
  name: "Default",
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // TODO: more tests after adding more mini-features
    await canvas.findByTestId("acceptance-status");
  },
};

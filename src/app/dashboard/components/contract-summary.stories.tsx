import { ContractSummary } from "~/app/dashboard/components/contract-summary";
import { type Meta, type StoryObj } from "@storybook/react";
import { MockPostAgentResponse, type TContract } from "~/api";
import { within } from "@storybook/test";

const meta: Meta<typeof ContractSummary> = {
  title: "Pages/Dashboard Page/Contract Summary",
  component: ContractSummary,
};

export default meta;
type Story = StoryObj<typeof ContractSummary>;

const defaultArgs = {
  contract: MockPostAgentResponse.data.contract as TContract,
};

export const ContractSummaryStory: Story = {
  name: "Default",
  args: {
    contract: {
      ...defaultArgs.contract,
      accepted: false,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByTestId("contract-type-icon");
    await canvas.findByTestId("contract-id");
    await canvas.findByTestId("contract-faction");
    await canvas.findByTestId("acceptance-status");
  },
};

export const ContractSummaryStoryAccepted: Story = {
  name: "Accepted",
  args: {
    contract: {
      ...defaultArgs.contract,
      accepted: true,
    },
  },
  play: ContractSummaryStory.play,
};

export const ContractSummaryStoryFulfilled: Story = {
  name: "Fulfilled",
  args: {
    contract: {
      ...defaultArgs.contract,
      accepted: true,
      fulfilled: true,
    },
  },
  play: ContractSummaryStory.play,
};

export const ContractSummaryStoryExpired: Story = {
  name: "Expired",
  args: {
    contract: {
      ...defaultArgs.contract,
      expiration: "2021-01-01",
    },
  },
  play: ContractSummaryStory.play,
};

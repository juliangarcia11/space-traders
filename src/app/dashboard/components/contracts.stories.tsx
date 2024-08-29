import { Contracts } from "~/app/dashboard/components/contracts";
import { type Meta, type StoryObj } from "@storybook/react";
import { MockPostAgentResponse, type TContract } from "~/api";
import { within, expect } from "@storybook/test";

const meta: Meta<typeof Contracts> = {
  title: "Pages/Dashboard Page/Contracts",
  component: Contracts,
};

export default meta;
type Story = StoryObj<typeof Contracts>;

const defaultArgs = {
  contracts: new Array(5).fill(MockPostAgentResponse.data.contract).map(
    (contract, index) =>
      ({
        ...contract,
        id: `${index}`,
        accepted: index % 2 === 0,
        fulfilled: index % 4 === 0,
      }) as TContract,
  ),
};

export const ContractsStory: Story = {
  name: "Default",
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check if the contracts are rendered
    const contracts = canvas.getAllByRole("listitem");
    await expect(contracts).toHaveLength(defaultArgs.contracts.length);
  },
};

export const NoContractsStory: Story = {
  name: "No Contracts",
  args: {
    contracts: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check if the no contracts message is rendered
    const noContracts = canvas.getByText("No contracts found.");
    await expect(noContracts).toBeInTheDocument();
  },
};

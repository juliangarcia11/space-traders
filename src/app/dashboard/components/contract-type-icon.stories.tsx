import { ContractTypeIcon } from "~/app/dashboard/components/contract-type-icon";
import { type Meta, type StoryObj } from "@storybook/react";
import { within } from "@storybook/test";

const meta: Meta<typeof ContractTypeIcon> = {
  title: "Pages/Dashboard Page/Contract Type Icon",
  component: ContractTypeIcon,
};

export default meta;
type Story = StoryObj<typeof ContractTypeIcon>;

export const ContractTypeIconStory: Story = {
  name: "Default",
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByTestId("contract-type-icon");
  },
};

export const ProcurementContractTypeIconStory: Story = {
  name: "Procurement",
  args: {
    type: "PROCUREMENT",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByTestId("contract-type-icon");
  },
};

export const TransportContractTypeIconStory: Story = {
  name: "Transport",
  args: {
    type: "TRANSPORT",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByTestId("contract-type-icon");
  },
};

export const ShuttleContractTypeIconStory: Story = {
  name: "Shuttle",
  args: {
    type: "SHUTTLE",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByTestId("contract-type-icon");
  },
};

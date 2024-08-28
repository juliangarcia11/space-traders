import { ContractTitle } from "~/app/dashboard/components/contract-title";
import { type Meta, type StoryObj } from "@storybook/react";
import { within } from "@storybook/test";

const meta: Meta<typeof ContractTitle> = {
  title: "Pages/Dashboard Page/Contract Title",
  component: ContractTitle,
};

export default meta;
type Story = StoryObj<typeof ContractTitle>;

export const ContractTitleStory: Story = {
  name: "Default",
  args: {
    id: "1",
    factionSymbol: "COSMIC",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByTestId("contract-id");
    await canvas.findByTestId("contract-faction");
  },
};

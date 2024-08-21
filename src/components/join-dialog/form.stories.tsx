import { JoinDialogForm } from "./form";
import { type Meta, type StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof JoinDialogForm> = {
  title: "Components/JoinDialog/Form",
  component: JoinDialogForm,
};

export default meta;

type Story = StoryObj<typeof JoinDialogForm>;

export const JoinDialogFormStory: Story = {
  name: "Default",
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // verify dialog form is visible
    const form = await canvas.findByTestId("join-dialog-form");
    await expect(form).toBeVisible();
    // verify dialog form has agent name input
    const agentNameInput = await canvas.findByTestId("agent-name");
    await expect(agentNameInput).toBeVisible();
    // verify dialog form has agent faction dropdown
    const agentFactionDropdown = await canvas.findByTestId("agent-faction");
    await expect(agentFactionDropdown).toBeVisible();
    // verify dialog form has submit button
    const submitButton = await canvas.findByRole("button", { name: "Join" });
    await expect(submitButton).toBeVisible();
  },
};

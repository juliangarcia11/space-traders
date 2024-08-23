import { type Meta, type StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { JoinDialogContent } from "./content";

const meta = {
  title: "Components/JoinDialog/Content",
  component: JoinDialogContent,
  args: {
    formState: {
      success: false,
      error: "",
    },
  },
} satisfies Meta<typeof JoinDialogContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // verify content is visible
    const content = await canvas.findByTestId("join-dialog-content");
    await expect(content).toBeVisible();
    // verify agent name input is visible
    const input = await canvas.findByTestId("agent-name");
    await expect(input).toBeVisible();
    // verify agent faction dropdown is visible
    const dropdown = await canvas.findByTestId("agent-faction");
    await expect(dropdown).toBeVisible();
  },
};

export const WithValue: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // verify content is visible
    const content = await canvas.findByTestId("join-dialog-content");
    await expect(content).toBeVisible();
    // verify agent name input is visible
    const input = await canvas.findByTestId("agent-name");
    await expect(input).toBeVisible();
    // verify agent faction dropdown is visible
    const dropdown = await canvas.findByTestId("agent-faction");
    await expect(dropdown).toBeVisible();
    // verify input value is set
    await userEvent.type(input, "test");
    await expect(input).toHaveValue("test");
  },
};

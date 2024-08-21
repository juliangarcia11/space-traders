import { type Meta, type StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { JoinDialogTrigger } from "./trigger";

const meta = {
  title: "Components/JoinDialog/Trigger",
  component: JoinDialogTrigger,
  args: {
    isStory: true,
  },
} satisfies Meta<typeof JoinDialogTrigger>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // verify dialog trigger is visible
    const button = await canvas.findByTestId("join-dialog-trigger");
    await expect(button).toBeVisible();
  },
};

export const Open: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // open dialog
    const button = await canvas.findByTestId("join-dialog-trigger");
    await userEvent.click(button);
    const dialog = await canvas.findByTestId("join-dialog");
    await expect(dialog).toBeTruthy();
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // verify dialog trigger is disabled
    const button = await canvas.findByTestId("join-dialog-trigger");
    await expect(button).toHaveAttribute("disabled");
  },
};

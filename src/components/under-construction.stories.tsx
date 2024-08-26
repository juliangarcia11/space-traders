import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { UnderConstruction } from "~/components/under-construction";

const meta: Meta<typeof UnderConstruction> = {
  title: "Components/Under Construction",
  component: UnderConstruction,
};

export default meta;
type Story = StoryObj<typeof UnderConstruction>;

export const UnderConstructionStory: Story = {
  name: "Default",
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = await canvas.findByText("Under Construction");
    await expect(title).toBeInTheDocument();

    const message = await canvas.findByText(
      "This area is currently under construction.",
    );
    await expect(message).toBeInTheDocument();
  },
};

export const CustomTitle: Story = {
  args: {
    title: "Custom Title",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = await canvas.findByText("Custom Title");
    await expect(title).toBeInTheDocument();

    const message = await canvas.findByText(
      "This area is currently under construction.",
    );
    await expect(message).toBeInTheDocument();
  },
};

export const CustomMessage: Story = {
  args: {
    message: "Custom Message",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = await canvas.findByText("Under Construction");
    await expect(title).toBeInTheDocument();

    const message = await canvas.findByText("Custom Message");
    await expect(message).toBeInTheDocument();
  },
};

export const CustomTitleAndMessage: Story = {
  args: {
    title: "Custom Title",
    message: "Custom Message",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = await canvas.findByText("Custom Title");
    await expect(title).toBeInTheDocument();

    const message = await canvas.findByText("Custom Message");
    await expect(message).toBeInTheDocument();
  },
};

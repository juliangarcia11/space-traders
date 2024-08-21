import { type Meta, type StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { JoinDialogContent } from "./content";

const meta = {
  title: "Components/JoinDialog/Content",
  component: JoinDialogContent,
} satisfies Meta<typeof JoinDialogContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isStory: true,
  },
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
  args: {
    isStory: true,
    // formValues: {
    //   agentName: "test",
    //   agentFaction: "COSMIC",
    // },
  },
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
    // verify dropdown value is set
    await userEvent.click(dropdown);
    const option = await canvas.findByText("COSMIC");
    await userEvent.click(option);
    await expect(dropdown).toHaveTextContent("COSMIC");
  },
};

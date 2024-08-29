import { AgentCredits } from "~/app/dashboard/components/agent-credits";
import { type Meta, type StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";

const meta: Meta<typeof AgentCredits> = {
  title: "Pages/Dashboard Page/AgentCredits",
  component: AgentCredits,
};

export default meta;
type Story = StoryObj<typeof AgentCredits>;

export const AgentCreditsStory: Story = {
  name: "Default",
  args: {
    credits: 100,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByTestId("agent-credits");
    await expect(await canvas.findByText("100")).toBeInTheDocument();
    // expect the button to have some green color denoting positive credits
    await expect(await canvas.findByTestId("agent-credits")).toHaveClass(
      /.*-green-.*/g,
    );
  },
};

export const ZeroCredits: Story = {
  name: "Zero credits",
  args: {
    credits: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByTestId("agent-credits");
    await expect(await canvas.findByText("0")).toBeInTheDocument();
    // expect the button to have some red color denoting zero credits
    await expect(await canvas.findByTestId("agent-credits")).toHaveClass(
      /.*-red-.*/g,
    );
  },
};

export const NegativeCredits: Story = {
  name: "Negative credits",
  args: {
    credits: -100,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByTestId("agent-credits");
    await expect(await canvas.findByText("-100")).toBeInTheDocument();
    // expect the button to have some red color denoting negative credits
    await expect(await canvas.findByTestId("agent-credits")).toHaveClass(
      /.*-red-.*/g,
    );
  },
};

export const LargeCredits: Story = {
  name: "Large credits",
  args: {
    credits: 1000000,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByTestId("agent-credits");
    // expect the number to be formatted with commas
    await expect(await canvas.findByText("1,000,000")).toBeInTheDocument();
    // expect the button to have some green color denoting positive credits
    await expect(await canvas.findByTestId("agent-credits")).toHaveClass(
      /.*-green-.*/g,
    );
  },
};

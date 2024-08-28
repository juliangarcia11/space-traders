import { ContractAcceptanceStatus } from "~/app/dashboard/components/contract-acceptance-status";
import { type Meta, type StoryObj } from "@storybook/react";
import { within } from "@storybook/test";

const meta: Meta<typeof ContractAcceptanceStatus> = {
  title: "Pages/Dashboard Page/Contract Acceptance Status",
  component: ContractAcceptanceStatus,
};

export default meta;
type Story = StoryObj<typeof ContractAcceptanceStatus>;

const defaultArgs = {
  accepted: false,
  fulfilled: false,
  // far future
  expiration: "2500-11-10",
  // one day from now
  deadlineToAccept: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
};

/**
 * Not Accepted & Unfulfilled
 */
export const AcceptanceStatusDefaultStory: Story = {
  name: "Default",
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByText("Not Accepted");
    await canvas.findByTestId("acceptance-status");
  },
};

/**
 * Accepted & Unfulfilled
 */
export const AcceptedStatusStory: Story = {
  name: "Accepted",
  args: {
    ...defaultArgs,
    accepted: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByText("Accepted");
    await canvas.findByTestId("acceptance-status");
  },
};

/**
 * Accepted & Fulfilled
 */
export const FulfilledStatusStory: Story = {
  name: "Fulfilled",
  args: {
    ...defaultArgs,
    accepted: true,
    fulfilled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByText("Fulfilled");
    await canvas.findByTestId("acceptance-status");
  },
};

/**
 * Expired
 */
export const ExpiredStatusStory: Story = {
  name: "Expired",
  args: {
    ...defaultArgs,
    expiration: "2021-10-10",
    deadlineToAccept: "2021-10-10",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByText("Expired");
    await canvas.findByTestId("acceptance-status");
  },
};

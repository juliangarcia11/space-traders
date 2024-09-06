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
  id: "default",
  accepted: false,
  fulfilled: false,
  // far future
  expiration: "2500-09-06T20:29:58.291Z",
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

    await canvas.findByLabelText("Not Accepted");
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
    id: "accepted",
    accepted: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByLabelText("Accepted");
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
    id: "fulfilled",
    accepted: true,
    fulfilled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByLabelText("Fulfilled");
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
    id: "expired",
    expiration: "2020-09-06T20:29:58.291Z",
    deadlineToAccept: "2020-09-06T20:29:58.291Z",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByLabelText("Expired");
    await canvas.findByTestId("acceptance-status");
  },
};

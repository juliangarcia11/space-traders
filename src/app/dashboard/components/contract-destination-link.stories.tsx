import { ContractDestinationLink } from "~/app/dashboard/components/contract-destination-link";
import { type Meta, type StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";

const meta: Meta<typeof ContractDestinationLink> = {
  title: "Pages/Dashboard Page/Contract Destination Link",
  component: ContractDestinationLink,
};

export default meta;
type Story = StoryObj<typeof ContractDestinationLink>;

export const ContractDestinationLinkStory: Story = {
  name: "Default",
  args: {
    terms: {
      deadline: "2022-09-06T20:29:58.291Z",
      payment: {
        onAccepted: 100,
        onFulfilled: 200,
      },
      deliver: [
        {
          tradeSymbol: "FOOD",
          destinationSymbol: "EARTH",
          unitsRequired: 100,
          unitsFulfilled: 0,
        },
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const waypoint = await canvas.findByText("EARTH");
    await userEvent.click(waypoint);
  },
};

export const NoDeliveryStory: Story = {
  name: "No Delivery",
  args: {
    terms: {
      deadline: "2022-09-06T20:29:58.291Z",
      payment: {
        onAccepted: 100,
        onFulfilled: 200,
      },
      deliver: [],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByText("EARTH")).toBeNull();
  },
};

export const FulfilledDeliveryStory: Story = {
  name: "Fulfilled Delivery",
  args: {
    terms: {
      deadline: "2022-09-06T20:29:58.291Z",
      payment: {
        onAccepted: 100,
        onFulfilled: 200,
      },
      deliver: [
        {
          tradeSymbol: "FOOD",
          destinationSymbol: "EARTH",
          unitsRequired: 100,
          unitsFulfilled: 100,
        },
      ],
    },
  },
  play: ContractDestinationLinkStory.play,
};

export const PartiallyFulfilledDeliveryStory: Story = {
  name: "Partially Fulfilled Delivery",
  args: {
    terms: {
      deadline: "2022-09-06T20:29:58.291Z",
      payment: {
        onAccepted: 100,
        onFulfilled: 200,
      },
      deliver: [
        {
          tradeSymbol: "FOOD",
          destinationSymbol: "EARTH",
          unitsRequired: 100,
          unitsFulfilled: 50,
        },
      ],
    },
  },
  play: ContractDestinationLinkStory.play,
};

export const MultipleDeliveriesStory: Story = {
  name: "Multiple Deliveries",
  args: {
    terms: {
      deadline: "2022-09-06T20:29:58.291Z",
      payment: {
        onAccepted: 100,
        onFulfilled: 200,
      },
      deliver: [
        {
          tradeSymbol: "FOOD",
          destinationSymbol: "EARTH",
          unitsRequired: 100,
          unitsFulfilled: 50,
        },
        {
          tradeSymbol: "WATER",
          destinationSymbol: "MARS",
          unitsRequired: 200,
          unitsFulfilled: 100,
        },
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const earth = await canvas.findByText("EARTH");
    await userEvent.click(earth);
    await expect(canvas.queryByText("MARS")).toBeNull();
  },
};

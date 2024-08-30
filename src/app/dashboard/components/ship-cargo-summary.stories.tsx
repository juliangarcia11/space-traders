import { ShipCargoSummary } from "~/app/dashboard/components/ship-cargo-summary";
import { type Meta, type StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";

const meta: Meta<typeof ShipCargoSummary> = {
  title: "Pages/Dashboard Page/Ship Cargo Summary",
  component: ShipCargoSummary,
};

export default meta;
type Story = StoryObj<typeof ShipCargoSummary>;

const successGreen = /.*bg-green-/g;
const warningOrange = /.*bg-orange-/g;
export const ShipCargoSummaryStory: Story = {
  name: "Default",
  args: {
    cargo: {
      capacity: 100,
      units: 50,
      inventory: [
        {
          symbol: "item1",
          name: "Item 1",
          description: "This is item 1",
          units: 10,
        },
        {
          symbol: "item2",
          name: "Item 2",
          description: "This is item 2",
          units: 20,
        },
        {
          symbol: "item3",
          name: "Item 3",
          description: "This is item 3",
          units: 30,
        },
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const capacityTag = canvas.getByTestId("cargo-capacity");
    await expect(capacityTag).toHaveTextContent("capacity: 100");

    await expect(capacityTag).toHaveClass(successGreen);

    const unitsTag = canvas.getByTestId("cargo-units");
    await expect(unitsTag).toHaveTextContent("units: 50");

    const inventoryTag = canvas.getByTestId("cargo-inventory-count");
    await expect(inventoryTag).toHaveTextContent("inventory: 3");
    await expect(inventoryTag).toHaveClass(successGreen);
  },
};

export const ShipCargoSummaryStoryNoCapacityNoInventory: Story = {
  name: "No Capacity, No Inventory",
  args: {
    cargo: {
      capacity: 0,
      units: 0,
      inventory: [],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const capacityTag = canvas.getByTestId("cargo-capacity");
    await expect(capacityTag).toHaveTextContent("capacity: 0");
    await expect(capacityTag).toHaveClass(warningOrange);

    const unitsTag = canvas.getByTestId("cargo-units");
    await expect(unitsTag).toHaveTextContent("units: 0");

    const inventoryTag = canvas.getByTestId("cargo-inventory-count");
    await expect(inventoryTag).toHaveTextContent("inventory: 0");
    await expect(inventoryTag).toHaveClass(warningOrange);
  },
};

export const ShipCargoSummaryStoryCapacityNoInventory: Story = {
  name: "Capacity, No Inventory",
  args: {
    cargo: {
      capacity: 100,
      units: 0,
      inventory: [],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const capacityTag = canvas.getByTestId("cargo-capacity");
    await expect(capacityTag).toHaveTextContent("capacity: 100");
    await expect(capacityTag).toHaveClass(successGreen);

    const unitsTag = canvas.getByTestId("cargo-units");
    await expect(unitsTag).toHaveTextContent("units: 0");

    const inventoryTag = canvas.getByTestId("cargo-inventory-count");
    await expect(inventoryTag).toHaveTextContent("inventory: 0");
    await expect(inventoryTag).toHaveClass(warningOrange);
  },
};

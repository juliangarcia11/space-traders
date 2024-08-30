import { ShipSummary } from "~/app/dashboard/components/ship-summary";
import { type Meta, type StoryObj } from "@storybook/react";
import { MockGetShipsResponse } from "~/api/fleet/get-ships.schema";

import { within, expect } from "@storybook/test";

const meta: Meta<typeof ShipSummary> = {
  title: "Pages/Dashboard Page/Ship Summary",
  component: ShipSummary,
};

export default meta;
type Story = StoryObj<typeof ShipSummary>;

export const ShipSummaryStory: Story = {
  name: "Default",
  args: {
    ship: MockGetShipsResponse.data[0],
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const ship = canvas.getByTestId("ship");
    await expect(ship).toBeInTheDocument();

    // find the ship symbol
    const symbol = canvas.getByTestId("ship-symbol");
    await expect(symbol).toBeInTheDocument();
    await expect(symbol).toContainHTML(MockGetShipsResponse.data[0]!.symbol);

    // find the ship nav status
    const status = canvas.getByTestId("ship-nav-status");
    await expect(status).toBeInTheDocument();
    await expect(status).toContainHTML(
      MockGetShipsResponse.data[0]!.nav.status,
    );

    // find the ship cargo summary
    const cargoSummary = canvas.getByTestId("cargo-capacity");
    await expect(cargoSummary).toBeInTheDocument();
  },
};

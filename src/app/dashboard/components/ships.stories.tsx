import { Ships } from "~/app/dashboard/components/ships";
import { type Meta, type StoryObj } from "@storybook/react";
import { MockGetShipsResponse } from "~/api/fleet/get-ships.schema";

import { within, expect } from "@storybook/test";

const meta: Meta<typeof Ships> = {
  title: "Pages/Dashboard Page/Ships",
  component: Ships,
};

export default meta;
type Story = StoryObj<typeof Ships>;

export const ShipsStory: Story = {
  name: "Default",
  args: {
    ships: MockGetShipsResponse.data,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const ships = canvas.getAllByTestId("ship");
    await expect(ships).toHaveLength(MockGetShipsResponse.data.length);
    // find all ship symbols
    const symbols = canvas.getAllByTestId("ship-symbol");
    await expect(symbols).toHaveLength(MockGetShipsResponse.data.length);
    // make sure they render the proper symbol
    for (let i = 0; i < MockGetShipsResponse.data.length; i++) {
      await expect(symbols[i]).toContainHTML(
        MockGetShipsResponse.data[i]!.symbol,
      );
    }
    // find all ship nav statuses
    const statuses = canvas.getAllByTestId("ship-nav-status");
    await expect(statuses).toHaveLength(MockGetShipsResponse.data.length);
    // make sure they render the proper status
    for (let i = 0; i < MockGetShipsResponse.data.length; i++) {
      await expect(statuses[i]).toContainHTML(
        MockGetShipsResponse.data[i]!.nav.status,
      );
    }
    // find all ship cargo summaries
    const cargoSummaries = canvas.getAllByTestId("cargo-capacity");
    await expect(cargoSummaries).toHaveLength(MockGetShipsResponse.data.length);
  },
};

import { FactionWaypointLink } from "~/app/dashboard/components/faction-waypoint-link";
import { Meta, StoryObj } from "@storybook/react";

import { within, expect } from "@storybook/test";

const meta: Meta<typeof FactionWaypointLink> = {
  title: "Pages/Dashboard Page/Faction Waypoint Link",
  component: FactionWaypointLink,
};

export default meta;
type Story = StoryObj<typeof FactionWaypointLink>;

export const FactionWaypointLinkStory: Story = {
  name: "Default",
  args: {
    waypoint: "X-123",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByTestId("faction-waypoint-link"),
    ).toBeInTheDocument();
    await expect(canvas.getByText("X-123")).toBeInTheDocument();
    await expect(canvas.getByRole("link")).toHaveAttribute(
      "href",
      "/waypoints/X-123",
    );
  },
};

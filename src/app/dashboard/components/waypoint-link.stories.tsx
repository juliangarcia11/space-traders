import { WaypointLink } from "~/app/dashboard/components/waypoint-link";
import { type Meta, type StoryObj } from "@storybook/react";

import { within, expect } from "@storybook/test";

const meta: Meta<typeof WaypointLink> = {
  title: "Pages/Dashboard Page/Waypoint Link",
  component: WaypointLink,
};

export default meta;
type Story = StoryObj<typeof WaypointLink>;

export const WaypointLinkStory: Story = {
  name: "Default",
  args: {
    waypoint: "X-123",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId("waypoint-link-X-123")).toBeInTheDocument();
    await expect(canvas.getByText("X-123")).toBeInTheDocument();
    await expect(canvas.getByRole("link")).toHaveAttribute(
      "href",
      "/waypoints/X-123",
    );
  },
};

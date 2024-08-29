import { Ships } from "~/app/dashboard/components/ships";
import { type Meta, type StoryObj } from "@storybook/react";

const meta: Meta<typeof Ships> = {
  title: "Pages/Dashboard Page/Ships",
  component: Ships,
};

export default meta;
type Story = StoryObj<typeof Ships>;

export const ShipsStory: Story = {
  name: "Default",
  args: {},
};

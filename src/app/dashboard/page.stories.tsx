import DashboardPage from "~/app/dashboard/page";
import { type Meta, type StoryObj } from "@storybook/react";

const meta: Meta<typeof DashboardPage> = {
  title: "Pages/DashboardPage",
  component: DashboardPage,
};

export default meta;
type Story = StoryObj<typeof DashboardPage>;

export const DashboardPageStory: Story = {
  name: "Default",
  args: {},
};

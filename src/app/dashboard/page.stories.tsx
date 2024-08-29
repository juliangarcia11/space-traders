import DashboardPage from "~/app/dashboard/page";
import { type Meta, type StoryObj } from "@storybook/react";
import { within } from "@storybook/test";

const meta: Meta<typeof DashboardPage> = {
  title: "Pages/Dashboard Page/Page",
  component: DashboardPage,
};

export default meta;
type Story = StoryObj<typeof DashboardPage>;

export const DashboardPageStory: Story = {
  name: "Default",
  args: {},

  // TODO: sort out how to mock "cookies()" and "redirect()" functions
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //
  //   // find the contracts section
  //   await canvas.findByTestId("contracts");
  //   // find the agent summary section
  //   await canvas.findByTestId("agent-summary");
  //   // find the ships section
  //   await canvas.findByTestId("ships");
  //   // TODO: enable after implementing the features
  //   // find the faction section
  //   await canvas.findByTestId("faction");
  //   // // find the current location section
  //   // await canvas.findByTestId("current-location");
  // },
};

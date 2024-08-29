import { type Meta, type StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
// 👇 Must include the `.mock` portion of filename to have mocks typed correctly
import { cookies } from "@storybook/nextjs/headers.mock";

import DashboardPage from "~/app/dashboard/page";

import { api_urls } from "~/api";

const meta: Meta<typeof DashboardPage> = {
  title: "Pages/Dashboard Page/Page",
  component: DashboardPage,
};

export default meta;
type Story = StoryObj<typeof DashboardPage>;

export const DashboardPageStory: Story = {
  name: "Default",
  args: {},
  async beforeEach() {
    // 👇 Set mock cookies ahead of rendering
    cookies().set(api_urls.cookie, "mock-cookie");
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // determine if the cookies were set
    await expect(cookies().get).toHaveBeenCalled();

    // find the contracts section
    await canvas.findByTestId("contracts");
    // find the agent summary section
    await canvas.findByTestId("agent-summary");
    // find the ships section
    await canvas.findByTestId("ships");
    // find the faction section
    await canvas.findByTestId("faction");
    // // find the current location section
    // await canvas.findByTestId("current-location");
  },
};

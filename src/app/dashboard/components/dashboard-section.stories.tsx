import { DashboardSection } from "~/app/dashboard/components/dashboard-section";
import { type Meta, type StoryObj } from "@storybook/react";
import { within } from "@storybook/test";

const meta: Meta<typeof DashboardSection> = {
  title: "Pages/Dashboard Page/Dashboard Section",
  component: DashboardSection,
};

export default meta;
type Story = StoryObj<typeof DashboardSection>;

const defaultArgs = {
  title: "Storybook Section",
  dataTestId: "storybook-section",
  children: <p className="bg-purple-300">Storybook Children</p>,
};

/**
 * Default story for the DashboardSection component
 */
export const DashboardSectionStory: Story = {
  name: "Default",
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByText(defaultArgs.title);
    await canvas.findByTestId(defaultArgs.dataTestId);
    await canvas.findByText("Storybook Children");
  },
};

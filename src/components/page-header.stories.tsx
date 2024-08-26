import type { Meta, StoryObj } from "@storybook/react";

import { PageHeader } from "./page-header";
import { expect, within } from "@storybook/test";

const meta = {
  title: "Components/PageHeader",
  component: PageHeader,
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NotAuthorized: Story = {
  name: "Default",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // verify that the page header is rendered
    await expect(await canvas.findByTestId("page-header")).toBeInTheDocument();
    // verify that the home and about links are rendered
    await expect(await canvas.findByText("Home")).toBeInTheDocument();
    await expect(await canvas.findByText("About")).toBeInTheDocument();
    // verify that the dashboard and agents links are not rendered
    await expect(canvas.queryByText("Dashboard")).toBeNull();
    await expect(canvas.queryByText("Agents")).toBeNull();
    // verify that the theme toggle and join dialog trigger are rendered
    await expect(await canvas.findByTestId("theme-toggle")).toBeInTheDocument();
    await expect(
      await canvas.findByTestId("join-dialog-trigger"),
    ).toBeInTheDocument();
  },
};

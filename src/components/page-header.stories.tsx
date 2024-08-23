import type { Meta, StoryObj } from "@storybook/react";

import { PageHeader } from "./page-header";
import { expect, within } from "@storybook/test";

const meta = {
  title: "Components/PageHeader",
  component: PageHeader,
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(await canvas.findByText("Home")).toBeInTheDocument();
    await expect(await canvas.findByTestId("page-header")).toBeInTheDocument();
    await expect(await canvas.findByTestId("theme-toggle")).toBeInTheDocument();
    await expect(
      await canvas.findByTestId("join-dialog-trigger"),
    ).toBeInTheDocument();
  },
};

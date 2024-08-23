import type { Meta, StoryObj } from "@storybook/react";

import { PageLink } from "./page-link";
import { expect, within } from "@storybook/test";

const meta = {
  title: "Components/PageLink",
  component: PageLink,
} satisfies Meta<typeof PageLink>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs = {
  href: "/test",
  title: "Page Link",
  subtitle: "A preview of what the PageLink component looks like",
  "data-testid": "page-link",
};

export const Default: Story = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      await canvas.findByText(defaultArgs.title + " →"),
    ).toBeInTheDocument();
    await expect(
      await canvas.findByText(defaultArgs.subtitle),
    ).toBeInTheDocument();
    await expect(
      await canvas.findByTestId(defaultArgs["data-testid"]),
    ).toBeInTheDocument();
    await expect(await canvas.findByRole("link")).toBeInTheDocument();
  },
};

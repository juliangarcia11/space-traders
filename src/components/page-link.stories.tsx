import type { Meta, StoryObj } from "@storybook/react";

import { PageLink } from "./page-link";

const meta = {
  title: "Components/PageLink",
  component: PageLink,
} satisfies Meta<typeof PageLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/test",
    title: "Page Link",
    subtitle: "A preview of what the PageLink component looks like",
    "data-testid": "page-link",
  },
};

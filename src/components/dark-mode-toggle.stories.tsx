import type { Meta, StoryObj } from "@storybook/react";

import { DarkModeToggle } from "./dark-mode-toggle";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Components/DarkModeToggle",
  component: DarkModeToggle,
  decorators: [
    (Story) => (
      <div className="m-4 flex flex-row gap-2 bg-black/20 p-4 dark:bg-white/20">
        <Story />
        <span className="my-auto dark:hidden">Light Mode </span>
        <span className="my-auto hidden dark:block">Dark Mode </span>
      </div>
    ),
  ],
} satisfies Meta<typeof DarkModeToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByTestId("theme-toggle");

    await expect(button).toBeInTheDocument();

    await expect(button.querySelector(".pi-moon")).toBeInTheDocument();

    await userEvent.click(button);

    await expect(button.querySelector(".pi-sun")).toBeInTheDocument();
  },
};

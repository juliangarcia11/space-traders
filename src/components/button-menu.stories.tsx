import { type Meta, type StoryObj } from "@storybook/react";
import { ButtonMenu } from "~/components/button-menu";
import { within, expect, userEvent } from "@storybook/test";
import { type MenuItem } from "primereact/menuitem";

const meta: Meta<typeof ButtonMenu> = {
  title: "Components/ButtonMenu",
  component: ButtonMenu,
};

export default meta;
type Story = StoryObj<typeof ButtonMenu>;

const defaultItems: MenuItem[] = [
  {
    label: "Refresh",
    icon: "pi pi-refresh",
  },
  {
    label: "Export",
    icon: "pi pi-upload",
    items: [
      {
        label: "Excel",
        icon: "pi pi-file-excel",
      },
      {
        label: "PDF",
        icon: "pi pi-file-pdf",
      },
    ],
  },
];

export const ButtonMenuStory: Story = {
  name: "Default",
  args: { label: "Menu", icon: "pi pi-thumbs-up", items: defaultItems },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonMenu = await canvas.findByTestId("button-menu");

    await expect(buttonMenu).toBeInTheDocument();
    await userEvent.click(buttonMenu);
    await expect(await canvas.findByText("Refresh")).toBeInTheDocument();
  },
};

export const StyledButtonMenuStory: Story = {
  args: {
    label: "Styled Button Menu",
    icon: "pi pi-pencil",
    items: defaultItems,
    severity: "success",
    size: "small",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonMenu = await canvas.findByTestId("button-menu");

    await expect(buttonMenu).toBeInTheDocument();
    await userEvent.click(buttonMenu);
    await expect(await canvas.findByText("Refresh")).toBeInTheDocument();

    // Ensure the button props are applied
    await expect(
      await canvas.findByText("Styled Button Menu"),
    ).toBeInTheDocument();
  },
};

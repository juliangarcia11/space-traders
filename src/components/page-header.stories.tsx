import type { Meta, StoryObj } from "@storybook/react";

import { PageHeader } from "./page-header";
import { expect, within } from "@storybook/test";
import { cookies } from "@storybook/nextjs/headers.mock";
import { api_urls } from "~/api";

const meta = {
  title: "Components/PageHeader",
  component: PageHeader,
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NotAuthorized: Story = {
  name: "Default",
  async beforeEach() {
    // 👇 Clear mock cookies ahead of rendering
    cookies().clear();
  },
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

export const Authorized: Story = {
  async beforeEach() {
    // 👇 Set mock cookies ahead of rendering
    cookies().set(api_urls.cookie, "mock-cookie");
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // verify that the page header is rendered
    await expect(await canvas.findByTestId("page-header")).toBeInTheDocument();
    // verify that the dashboard, agents, and theme toggle links are rendered
    await expect(await canvas.findByText("Dashboard")).toBeInTheDocument();
    await expect(await canvas.findByText("Agents")).toBeInTheDocument();
    await expect(await canvas.findByTestId("theme-toggle")).toBeInTheDocument();
    // verify that the home, about, and join dialog trigger are not rendered
    await expect(canvas.queryByText("Home")).toBeNull();
    await expect(canvas.queryByText("About")).toBeNull();
    await expect(canvas.queryByTestId("join-dialog-trigger")).toBeNull();
  },
};

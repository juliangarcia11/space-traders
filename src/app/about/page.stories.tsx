import Page from "./page";
import type { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";
import { within, expect } from "@storybook/test";
import { MockGetStatusResponse } from "~/api";

const meta = {
  title: "Pages/About Page",
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AboutPageStory: Story = {
  name: "Default",
  parameters: {
    msw: {
      handlers: [
        http.get("https://api.spacetraders.io/v2/", () => {
          return HttpResponse.json(MockGetStatusResponse); // 👈 Return the mocked data
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // test that the about title is displayed
    await expect(canvas.findByTestId("about-title")).toBeTruthy();
    // test that the API description is displayed
    const desc = await canvas.findByTestId("api-description");
    await expect(desc).toHaveTextContent(MockGetStatusResponse.description);
    // test that the app description is displayed
    await expect(canvas.findByTestId("app-description")).toBeTruthy();
  },
};

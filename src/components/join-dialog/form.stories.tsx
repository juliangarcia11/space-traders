import { JoinDialogForm } from "./form";
import { type Meta, type StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { http, HttpResponse } from "msw";
import { api_urls, MockPostAgentResponse } from "~/api";

const meta: Meta<typeof JoinDialogForm> = {
  title: "Components/JoinDialog/Form",
  component: JoinDialogForm,
};

export default meta;

type Story = StoryObj<typeof JoinDialogForm>;

export const JoinDialogFormStory: Story = {
  name: "Default",
  parameters: {
    msw: {
      handlers: [
        http.post(api_urls.register, () =>
          HttpResponse.json(MockPostAgentResponse),
        ),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // verify dialog form is visible
    const form = await canvas.findByTestId("join-dialog-form");
    await expect(form).toBeVisible();
    // verify dialog form has agent name input
    const agentNameInput = await canvas.findByTestId("agent-name");
    await expect(agentNameInput).toBeVisible();
    // verify dialog form has agent faction dropdown
    const agentFactionDropdown = await canvas.findByTestId("agent-faction");
    await expect(agentFactionDropdown).toBeVisible();
    // verify dialog form has submit button
    const submitButton = await canvas.findByRole("button", { name: "Join" });
    await expect(submitButton).toBeVisible();
    // add agent name
    await userEvent.type(agentNameInput, "agent123");
    // click submit button
    await userEvent.click(submitButton);
    // verify success message
    await canvas.findByText("Agent created successfully!");
  },
};

export const JoinDialogFormStoryFormError: Story = {
  name: "FormError",
  parameters: {
    msw: {
      handlers: [
        http.post(api_urls.register, () => {
          return new Promise(() => {
            return;
          });
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // verify dialog form is visible
    const form = await canvas.findByTestId("join-dialog-form");
    await expect(form).toBeVisible();
    // verify dialog form has agent name input
    const agentNameInput = await canvas.findByTestId("agent-name");
    await expect(agentNameInput).toBeVisible();
    // verify dialog form has agent faction dropdown
    const agentFactionDropdown = await canvas.findByTestId("agent-faction");
    await expect(agentFactionDropdown).toBeVisible();
    // verify dialog form has submit button
    const submitButton = await canvas.findByRole("button", { name: "Join" });
    await expect(submitButton).toBeVisible();
    // click submit button
    await userEvent.click(submitButton);
    // verify form error message
    await canvas.findByText("String must contain at least 3 character(s)");
  },
};

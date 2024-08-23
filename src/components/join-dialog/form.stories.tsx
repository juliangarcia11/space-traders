import { JoinDialogForm } from "./form";
import { type Meta, type StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { http, HttpResponse } from "msw";
import { type TPostAgentResponse } from "~/api";

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
        http.post("https://api.spacetraders.io/v2/register", () => {
          return HttpResponse.json(PostAgentResponse200);
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
        http.post("https://api.spacetraders.io/v2/register", () => {
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

const PostAgentResponse200: TPostAgentResponse = {
  data: {
    agent: {
      accountId: "agent123",
      symbol: "AGENT_SYMBOL",
      headquarters: "HQ_SYMBOL",
      credits: 1000,
      startingFaction: "COSMIC",
      shipCount: 1,
    },
    contract: {
      id: "contract123",
      factionSymbol: "FACTION_SYMBOL",
      type: "delivery",
      terms: {
        deadline: "2024-12-31T23:59:59Z",
        payment: {
          onAccepted: 500,
          onFulfilled: 1500,
        },
        deliver: [
          {
            tradeSymbol: "TRADE_SYMBOL",
            destinationSymbol: "DEST_SYMBOL",
            unitsRequired: 100,
            unitsFulfilled: 50,
          },
        ],
      },
      accepted: true,
      fulfilled: false,
      expiration: "2024-12-31T23:59:59Z",
      deadlineToAccept: "2024-01-01T00:00:00Z",
    },
    faction: {
      symbol: "COSMIC",
      name: "Faction Name",
      description: "Faction Description",
      headquarters: "HQ_SYMBOL",
      traits: [
        {
          symbol: "TRAIT_SYMBOL",
          name: "Trait Name",
          description: "Trait Description",
        },
      ],
      isRecruiting: true,
    },
    ship: {
      symbol: "SHIP_SYMBOL",
      registration: {
        name: "Ship Name",
        factionSymbol: "FACTION_SYMBOL",
        role: "explorer",
      },
      nav: {
        systemSymbol: "SYSTEM_SYMBOL",
        waypointSymbol: "WAYPOINT_SYMBOL",
        route: {
          destination: {
            symbol: "DEST_SYMBOL",
            type: "planet",
            systemSymbol: "SYSTEM_SYMBOL",
            x: 100,
            y: 200,
          },
          origin: {
            symbol: "ORIGIN_SYMBOL",
            type: "station",
            systemSymbol: "SYSTEM_SYMBOL",
            x: 50,
            y: 100,
          },
          departureTime: "2024-01-01T00:00:00Z",
          arrival: "2024-01-01T01:00:00Z",
        },
        status: "in_transit",
        flightMode: "cruise",
      },
      crew: {
        current: 10,
        required: 5,
        capacity: 20,
        rotation: "standard",
        morale: 80,
        wages: 1000,
      },
      frame: {
        symbol: "FRAME_SYMBOL",
        name: "Frame Name",
        description: "Frame Description",
        condition: 100,
        integrity: 100,
        moduleSlots: 5,
        mountingPoints: 3,
        fuelCapacity: 1000,
        requirements: {
          power: 10,
          crew: 5,
          slots: 2,
        },
      },
      reactor: {
        symbol: "REACTOR_SYMBOL",
        name: "Reactor Name",
        description: "Reactor Description",
        condition: 100,
        integrity: 100,
        powerOutput: 500,
        requirements: {
          power: 10,
          crew: 5,
          slots: 2,
        },
      },
      engine: {
        symbol: "ENGINE_SYMBOL",
        name: "Engine Name",
        description: "Engine Description",
        condition: 100,
        integrity: 100,
        speed: 1000,
        requirements: {
          power: 10,
          crew: 5,
          slots: 2,
        },
      },
      cooldown: {
        shipSymbol: "SHIP_SYMBOL",
        totalSeconds: 60,
        remainingSeconds: 30,
        expiration: "2024-01-01T00:01:00Z",
      },
      modules: [
        {
          symbol: "MODULE_SYMBOL",
          capacity: 100,
          range: 1000,
          name: "Module Name",
          description: "Module Description",
          requirements: {
            power: 10,
            crew: 5,
            slots: 2,
          },
        },
      ],
      mounts: [
        {
          symbol: "MOUNT_SYMBOL",
          name: "Mount Name",
          description: "Mount Description",
          strength: 100,
          deposits: ["DEPOSIT1", "DEPOSIT2"],
          requirements: {
            power: 10,
            crew: 5,
            slots: 2,
          },
        },
      ],
      cargo: {
        capacity: 1000,
        units: 500,
        inventory: [
          {
            symbol: "CARGO_SYMBOL",
            name: "Cargo Name",
            description: "Cargo Description",
            units: 100,
          },
        ],
      },
      fuel: {
        current: 500,
        capacity: 1000,
        consumed: {
          amount: 100,
          timestamp: "2024-01-01T00:00:00Z",
        },
      },
    },
    token: "TOKEN_STRING",
  },
};

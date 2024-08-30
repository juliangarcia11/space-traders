import { z } from "zod";
import {
  Agent,
  AgentSymbol,
  Contract,
  Faction,
  Factions,
  Ship,
} from "../index";

export const PostAgentRequest = z.object({
  email: z
    .string({
      description:
        "Your email address. This is used if you reserved your call sign between resets.",
    })
    .email()
    .nullish(),
  symbol: AgentSymbol,
  faction: Factions,
});
export type TPostAgentRequest = z.infer<typeof PostAgentRequest>;

export const PostAgentResponse = z.object({
  data: z.object({
    agent: Agent,
    contract: Contract.deepPartial(),
    faction: Faction,
    ship: Ship,
    token: z.string(),
  }),
});
export type TPostAgentResponse = z.infer<typeof PostAgentResponse>;

export const MockPostAgentResponse: TPostAgentResponse = {
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
      type: "PROCUREMENT",
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
      name: "Cosmic Engineers",
      description:
        "The Cosmic Engineers are a group of highly advanced scientists and engineers who seek to terraform and colonize new worlds, pushing the boundaries of technology and exploration.",
      headquarters: "X1-CN71",
      traits: [
        {
          symbol: "INNOVATIVE",
          name: "Innovative",
          description:
            "Willing to try new and untested ideas. Sometimes able to come up with creative and original solutions to problems, and may be able to think outside the box. Sometimes at the forefront of technological or social change, and may be willing to take risks in order to advance the boundaries of human knowledge and understanding.",
        },
        {
          symbol: "BOLD",
          name: "Bold",
          description:
            "Unafraid to take risks and challenge the status quo. Sometimes willing to do things that others would not dare, and may be able to overcome obstacles and challenges that would be insurmountable for others. Sometimes able to inspire and motivate others to take bold action as well.",
        },
        {
          symbol: "VISIONARY",
          name: "Visionary",
          description:
            "Possessing a clear and compelling vision for the future. Sometimes able to see beyond the present and anticipate the needs and challenges of tomorrow. Sometimes able to inspire and guide others towards a better and brighter future, and may be willing to take bold and decisive action to make their vision a reality.",
        },
        {
          symbol: "CURIOUS",
          name: "Curious",
          description:
            "Possessing a strong desire to learn and explore. Sometimes interested in a wide range of topics and may be willing to take risks in order to satisfy their curiosity. Sometimes able to think outside the box and come up with creative solutions to challenges.",
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

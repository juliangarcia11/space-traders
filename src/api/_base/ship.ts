import { z } from "zod";

export const Ship = z.object({
  symbol: z.string(),
  registration: z.object({
    name: z.string(),
    factionSymbol: z.string(),
    role: z.string(),
  }),
  nav: z.object({
    systemSymbol: z.string(),
    waypointSymbol: z.string(),
    route: z.object({
      destination: z.object({
        symbol: z.string(),
        type: z.string(),
        systemSymbol: z.string(),
        x: z.number(),
        y: z.number(),
      }),
      origin: z.object({
        symbol: z.string(),
        type: z.string(),
        systemSymbol: z.string(),
        x: z.number(),
        y: z.number(),
      }),
      departureTime: z.string(),
      arrival: z.string(),
    }),
    status: z.string(),
    flightMode: z.string(),
  }),
  crew: z.object({
    current: z.number(),
    required: z.number(),
    capacity: z.number(),
    rotation: z.string(),
    morale: z.number(),
    wages: z.number(),
  }),
  frame: z.object({
    symbol: z.string(),
    name: z.string(),
    description: z.string(),
    condition: z.number(),
    integrity: z.number(),
    moduleSlots: z.number(),
    mountingPoints: z.number(),
    fuelCapacity: z.number(),
    requirements: z.object({
      power: z.number(),
      crew: z.number(),
      slots: z.number(),
    }),
  }),
  reactor: z.object({
    symbol: z.string(),
    name: z.string(),
    description: z.string(),
    condition: z.number(),
    integrity: z.number(),
    powerOutput: z.number(),
    requirements: z.object({
      power: z.number(),
      crew: z.number(),
      slots: z.number(),
    }),
  }),
  engine: z.object({
    symbol: z.string(),
    name: z.string(),
    description: z.string(),
    condition: z.number(),
    integrity: z.number(),
    speed: z.number(),
    requirements: z.object({
      power: z.number(),
      crew: z.number(),
      slots: z.number(),
    }),
  }),
  cooldown: z.object({
    shipSymbol: z.string(),
    totalSeconds: z.number(),
    remainingSeconds: z.number(),
    expiration: z.string(),
  }),
  modules: z.array(
    z.object({
      symbol: z.string(),
      capacity: z.number(),
      range: z.number(),
      name: z.string(),
      description: z.string(),
      requirements: z.object({
        power: z.number(),
        crew: z.number(),
        slots: z.number(),
      }),
    }),
  ),
  mounts: z.array(
    z.object({
      symbol: z.string(),
      name: z.string(),
      description: z.string(),
      strength: z.number(),
      deposits: z.array(z.string()),
      requirements: z.object({
        power: z.number(),
        crew: z.number(),
        slots: z.number(),
      }),
    }),
  ),
  cargo: z.object({
    capacity: z.number(),
    units: z.number(),
    inventory: z.array(
      z.object({
        symbol: z.string(),
        name: z.string(),
        description: z.string(),
        units: z.number(),
      }),
    ),
  }),
  fuel: z.object({
    current: z.number(),
    capacity: z.number(),
    consumed: z.object({
      amount: z.number(),
      timestamp: z.string(),
    }),
  }),
});
export type TShip = z.infer<typeof Ship>;

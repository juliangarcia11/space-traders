import { z } from "zod";

const Registration = z.object({
  name: z.string(),
  factionSymbol: z.string(),
  role: z.string(),
});

const ShipNavRoutWaypoint = z.object({
  symbol: z.string(),
  type: z.string(),
  systemSymbol: z.string(),
  x: z.number(),
  y: z.number(),
});

const ShipNavRoute = z.object({
  destination: ShipNavRoutWaypoint,
  origin: ShipNavRoutWaypoint,
  departureTime: z.string(),
  arrival: z.string(),
});

const ShipNav = z.object({
  systemSymbol: z.string(),
  waypointSymbol: z.string(),
  route: ShipNavRoute,
  status: z.string(),
  flightMode: z.string(),
});

const ShipCrew = z.object({
  current: z.number(),
  required: z.number(),
  capacity: z.number(),
  rotation: z.string(),
  morale: z.number(),
  wages: z.number(),
});

const ShipRequirements = z.object({
  power: z.number().optional(),
  crew: z.number().optional(),
  slots: z.number().optional(),
});

const ShipFrameSymbols = [
  "FRAME_PROBE",
  "FRAME_DRONE",
  "FRAME_INTERCEPTOR",
  "FRAME_RACER",
  "FRAME_FIGHTER",
  "FRAME_FRIGATE",
  "FRAME_SHUTTLE",
  "FRAME_EXPLORER",
  "FRAME_MINER",
  "FRAME_LIGHT_FREIGHTER",
  "FRAME_HEAVY_FREIGHTER",
  "FRAME_TRANSPORT",
  "FRAME_DESTROYER",
  "FRAME_CRUISER",
  "FRAME_CARRIER",
] as const;
const ShipFrame = z.object({
  symbol: z.enum(ShipFrameSymbols),
  name: z.string(),
  description: z.string(),
  condition: z.number(),
  integrity: z.number(),
  moduleSlots: z.number(),
  mountingPoints: z.number(),
  fuelCapacity: z.number(),
  requirements: ShipRequirements,
});
const ShipReactor = z.object({
  symbol: z.string(),
  name: z.string(),
  description: z.string(),
  condition: z.number(),
  integrity: z.number(),
  powerOutput: z.number(),
  requirements: ShipRequirements,
});
const ShipEngine = z.object({
  symbol: z.string(),
  name: z.string(),
  description: z.string(),
  condition: z.number(),
  integrity: z.number(),
  speed: z.number(),
  requirements: ShipRequirements,
});
const ShipCooldown = z.object({
  shipSymbol: z.string(),
  totalSeconds: z.number(),
  remainingSeconds: z.number(),
  expiration: z.string().optional(),
});
const ShipModule = z.object({
  symbol: z.string(),
  capacity: z.number().optional(),
  range: z.number().optional(),
  name: z.string(),
  description: z.string(),
  requirements: ShipRequirements,
});
const ShipMount = z.object({
  symbol: z.string(),
  name: z.string(),
  description: z.string(),
  strength: z.number(),
  deposits: z.array(z.string()).optional(),
  requirements: ShipRequirements,
});
const ShipCargoItem = z
  .object({
    symbol: z.string(),
    name: z.string(),
    description: z.string(),
    units: z.number(),
  })
  .nullable();
const ShipCargo = z.object({
  capacity: z.number(),
  units: z.number(),
  inventory: z.array(ShipCargoItem),
});
export type TShipCargo = z.infer<typeof ShipCargo>;

const ShipFuel = z.object({
  current: z.number(),
  capacity: z.number(),
  consumed: z.object({
    amount: z.number(),
    timestamp: z.string(),
  }),
});

export const Ship = z.object({
  symbol: z.string(),
  registration: Registration,
  nav: ShipNav,
  crew: ShipCrew,
  frame: ShipFrame,
  reactor: ShipReactor,
  engine: ShipEngine,
  cooldown: ShipCooldown,
  modules: z.array(ShipModule),
  mounts: z.array(ShipMount),
  cargo: ShipCargo,
  fuel: ShipFuel,
});
export type TShip = z.infer<typeof Ship>;

import { z } from "zod";
import { Meta, Ship } from "~/api";

export const GetShipsResponse = z.object({
  data: z.array(Ship),
  meta: Meta,
});

export const MockGetShipsResponse = {
  data: [
    {
      symbol: "JELLHEEEEE-1",
      registration: {
        name: "JELLHEEEEE-1",
        factionSymbol: "COSMIC",
        role: "COMMAND",
      },
      nav: {
        systemSymbol: "X1-KM15",
        waypointSymbol: "X1-KM15-A1",
        route: {
          destination: {
            symbol: "X1-KM15-A1",
            type: "PLANET",
            systemSymbol: "X1-KM15",
            x: 15,
            y: 22,
          },
          origin: {
            symbol: "X1-KM15-A1",
            type: "PLANET",
            systemSymbol: "X1-KM15",
            x: 15,
            y: 22,
          },
          departureTime: "2024-08-23T00:32:28.391Z",
          arrival: "2024-08-23T00:32:28.391Z",
        },
        status: "DOCKED",
        flightMode: "CRUISE",
      },
      crew: {
        current: 57,
        required: 57,
        capacity: 80,
        rotation: "STRICT",
        morale: 100,
        wages: 0,
      },
      frame: {
        symbol: "FRAME_FRIGATE" as const,
        name: "Frigate",
        description:
          "A medium-sized, multi-purpose spacecraft, often used for combat, transport, or support operations.",
        condition: 1,
        integrity: 1,
        moduleSlots: 8,
        mountingPoints: 5,
        fuelCapacity: 400,
        requirements: {
          power: 8,
          crew: 25,
        },
      },
      reactor: {
        symbol: "REACTOR_FISSION_I",
        name: "Fission Reactor I",
        description:
          "A basic fission power reactor, used to generate electricity from nuclear fission reactions.",
        condition: 1,
        integrity: 1,
        powerOutput: 31,
        requirements: {
          crew: 8,
        },
      },
      engine: {
        symbol: "ENGINE_ION_DRIVE_II",
        name: "Ion Drive II",
        description:
          "An advanced propulsion system that uses ionized particles to generate high-speed, low-thrust acceleration, with improved efficiency and performance.",
        condition: 1,
        integrity: 1,
        speed: 30,
        requirements: {
          power: 6,
          crew: 8,
        },
      },
      cooldown: {
        shipSymbol: "JELLHEEEEE-1",
        totalSeconds: 0,
        remainingSeconds: 0,
      },
      modules: [
        {
          symbol: "MODULE_CARGO_HOLD_II",
          capacity: 40,
          name: "Expanded Cargo Hold",
          description:
            "An expanded cargo hold module that provides more efficient storage space for a ship's cargo.",
          requirements: {
            power: 2,
            crew: 2,
            slots: 2,
          },
        },
        {
          symbol: "MODULE_CREW_QUARTERS_I",
          capacity: 40,
          name: "Crew Quarters",
          description:
            "A module that provides living space and amenities for the crew.",
          requirements: {
            power: 1,
            crew: 2,
            slots: 1,
          },
        },
        {
          symbol: "MODULE_CREW_QUARTERS_I",
          capacity: 40,
          name: "Crew Quarters",
          description:
            "A module that provides living space and amenities for the crew.",
          requirements: {
            power: 1,
            crew: 2,
            slots: 1,
          },
        },
        {
          symbol: "MODULE_MINERAL_PROCESSOR_I",
          name: "Mineral Processor",
          description:
            "Crushes and processes extracted minerals and ores into their component parts, filters out impurities, and containerizes them into raw storage units.",
          requirements: {
            power: 1,
            crew: 0,
            slots: 2,
          },
        },
        {
          symbol: "MODULE_GAS_PROCESSOR_I",
          name: "Gas Processor",
          description:
            "Filters and processes extracted gases into their component parts, filters out impurities, and containerizes them into raw storage units.",
          requirements: {
            power: 1,
            crew: 0,
            slots: 2,
          },
        },
      ],
      mounts: [
        {
          symbol: "MOUNT_SENSOR_ARRAY_II",
          name: "Sensor Array II",
          description:
            "An advanced sensor array that improves a ship's ability to detect and track other objects in space with greater accuracy and range.",
          strength: 4,
          requirements: {
            power: 2,
            crew: 2,
          },
        },
        {
          symbol: "MOUNT_GAS_SIPHON_II",
          name: "Gas Siphon II",
          description:
            "An advanced gas siphon that can extract gas from gas giants and other gas-rich bodies more efficiently and at a higher rate.",
          strength: 20,
          requirements: {
            power: 2,
            crew: 2,
          },
        },
        {
          symbol: "MOUNT_MINING_LASER_II",
          name: "Mining Laser II",
          description:
            "An advanced mining laser that is more efficient and effective at extracting valuable minerals from asteroids and other space objects.",
          strength: 5,
          requirements: {
            power: 2,
            crew: 2,
          },
        },
        {
          symbol: "MOUNT_SURVEYOR_II",
          name: "Surveyor II",
          description:
            "An advanced survey probe that can be used to gather information about a mineral deposit with greater accuracy.",
          strength: 2,
          deposits: [
            "QUARTZ_SAND",
            "SILICON_CRYSTALS",
            "PRECIOUS_STONES",
            "ICE_WATER",
            "AMMONIA_ICE",
            "IRON_ORE",
            "COPPER_ORE",
            "SILVER_ORE",
            "ALUMINUM_ORE",
            "GOLD_ORE",
            "PLATINUM_ORE",
            "DIAMONDS",
            "URANITE_ORE",
          ],
          requirements: {
            power: 3,
            crew: 4,
          },
        },
      ],
      cargo: {
        capacity: 40,
        units: 0,
        inventory: [],
      },
      fuel: {
        current: 400,
        capacity: 400,
        consumed: {
          amount: 0,
          timestamp: "2024-08-23T00:32:28.391Z",
        },
      },
    },
    {
      symbol: "JELLHEEEEE-2",
      registration: {
        name: "JELLHEEEEE-2",
        factionSymbol: "COSMIC",
        role: "SATELLITE",
      },
      nav: {
        systemSymbol: "X1-KM15",
        waypointSymbol: "X1-KM15-H60",
        route: {
          destination: {
            symbol: "X1-KM15-H60",
            type: "MOON",
            systemSymbol: "X1-KM15",
            x: -26,
            y: 36,
          },
          origin: {
            symbol: "X1-KM15-H60",
            type: "MOON",
            systemSymbol: "X1-KM15",
            x: -26,
            y: 36,
          },
          departureTime: "2024-08-23T00:32:28.479Z",
          arrival: "2024-08-23T00:32:28.479Z",
        },
        status: "DOCKED",
        flightMode: "CRUISE",
      },
      crew: {
        current: 0,
        required: 0,
        capacity: 0,
        rotation: "STRICT",
        morale: 100,
        wages: 0,
      },
      frame: {
        symbol: "FRAME_PROBE" as const,
        name: "Probe",
        description:
          "A small, unmanned spacecraft used for exploration, reconnaissance, and scientific research.",
        condition: 1,
        integrity: 1,
        moduleSlots: 0,
        mountingPoints: 0,
        fuelCapacity: 0,
        requirements: {
          power: 1,
          crew: 0,
        },
      },
      reactor: {
        symbol: "REACTOR_SOLAR_I",
        name: "Solar Reactor I",
        description:
          "A basic solar power reactor, used to generate electricity from solar energy.",
        condition: 1,
        integrity: 1,
        powerOutput: 3,
        requirements: {
          crew: 0,
        },
      },
      engine: {
        symbol: "ENGINE_IMPULSE_DRIVE_I",
        name: "Impulse Drive I",
        description:
          "A basic low-energy propulsion system that generates thrust for interplanetary travel.",
        condition: 1,
        integrity: 1,
        speed: 3,
        requirements: {
          power: 1,
          crew: 0,
        },
      },
      cooldown: {
        shipSymbol: "JELLHEEEEE-2",
        totalSeconds: 0,
        remainingSeconds: 0,
      },
      modules: [],
      mounts: [],
      cargo: {
        capacity: 0,
        units: 0,
        inventory: [],
      },
      fuel: {
        current: 0,
        capacity: 0,
        consumed: {
          amount: 0,
          timestamp: "2024-08-23T00:32:28.479Z",
        },
      },
    },
  ],
  meta: {
    total: 2,
    page: 1,
    limit: 10,
  },
};

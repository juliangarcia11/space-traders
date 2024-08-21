import { z } from "zod";

export const AgentSymbol = z
  .string({
    description:
      "Your desired agent symbol. This will be a unique name used to represent your agent, and will be the prefix for your ships.",
  })
  .min(3)
  .max(14);

export const Agent = z.object({
  accountId: z.string({
    description:
      "Account ID that is tied to this agent. Only included on your own agent.",
  }),
  symbol: AgentSymbol,
  headquarters: z.string({ message: "The headquarters of the agent." }).min(1),
  credits: z
    .number({
      message:
        "The number of credits the agent has available. Credits can be negative if funds have been overdrawn.",
    })
    .int(),
  startingFaction: z
    .string({ message: "The faction the agent started with." })
    .min(1),
  shipCount: z
    .number({ message: "How many ships are owned by the agent." })
    .int()
    .min(0),
});

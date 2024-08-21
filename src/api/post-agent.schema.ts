import { z } from "zod";
import { Agent, AgentSymbol, Contract, Faction, Factions, Ship } from "./";

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
    contract: Contract,
    faction: Faction,
    ship: Ship,
    token: z.string(),
  }),
});

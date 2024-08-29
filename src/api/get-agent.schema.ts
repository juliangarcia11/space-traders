import { z } from "zod";
import { Agent } from "./_base";

export const GetAgentResponse = z.object({
  data: Agent,
});
export type TGetAgentResponse = z.infer<typeof GetAgentResponse>;

export const MockGetAgentResponse: TGetAgentResponse = {
  data: {
    accountId: "agent123",
    symbol: "AGENT_SYMBOL",
    headquarters: "HQ_SYMBOL",
    credits: 1000,
    startingFaction: "COSMIC",
    shipCount: 1,
  },
};

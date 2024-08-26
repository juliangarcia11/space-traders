import { z } from "zod";
import { Agent } from "./_base";

export const GetAgentResponse = z.object({
  data: Agent,
});
export type TGetAgentResponse = z.infer<typeof GetAgentResponse>;

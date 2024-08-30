import { z } from "zod";
import { Agent, Meta } from "~/api/_base";

export const GetAgentsResponse = z.object({
  data: z.array(Agent),
  meta: Meta,
});
export type TGetAgentsResponse = z.infer<typeof GetAgentsResponse>;

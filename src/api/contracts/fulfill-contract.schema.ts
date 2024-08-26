import { z } from "zod";
import { Agent, Contract } from "~/api/_base";

export const FulfillContractResponse = z.object({
  data: z.object({
    agent: Agent,
    contract: Contract,
  }),
});
export type TFulfillContractResponse = z.infer<typeof FulfillContractResponse>;

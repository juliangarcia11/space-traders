import { z } from "zod";
import { Agent, Contract } from "~/api/_base";

export const AcceptContractResponse = z.object({
  data: z.object({
    agent: Agent,
    contract: Contract,
  }),
});
export type TAcceptContractResponse = z.infer<typeof AcceptContractResponse>;

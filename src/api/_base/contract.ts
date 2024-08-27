import { z } from "zod";

export const ContractTerms = z.object({
  deadline: z.string(),
  payment: z.object({
    onAccepted: z.number(),
    onFulfilled: z.number(),
  }),
  deliver: z.array(
    z.object({
      tradeSymbol: z.string(),
      destinationSymbol: z.string(),
      unitsRequired: z.number(),
      unitsFulfilled: z.number(),
    }),
  ),
});
export type TContractTerms = z.infer<typeof ContractTerms>;

export const Contract = z.object({
  id: z.string(),
  factionSymbol: z.string(),
  type: z.string(),
  terms: ContractTerms,
  accepted: z.boolean(),
  fulfilled: z.boolean(),
  expiration: z.string(),
  deadlineToAccept: z.string(),
});
export type TContract = z.infer<typeof Contract>;

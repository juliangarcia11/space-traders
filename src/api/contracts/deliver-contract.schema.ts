import { z } from "zod";
import { Cargo, Contract } from "~/api/_base";

export const DeliverContractRequest = z.object({
  shipSymbol: z
    .string()
    .describe(
      "Symbol of a ship located in the destination to deliver a contract and that has a good to deliver in its cargo.",
    ),
  tradeSymbol: z.string().describe("The symbol of the good to deliver."),
  units: z.number().int().positive().describe("Amount of units to deliver."),
});
export type TDeliverContractRequest = z.infer<typeof DeliverContractRequest>;

/**
 * Successfully delivered cargo to contract.
 */
export const DeliverContractResponse = z.object({
  contract: Contract,
  cargo: Cargo,
});
export type TDeliverContractResponse = z.infer<typeof DeliverContractResponse>;

import { z } from "zod";
import { Contract, Meta, type TContract } from "~/api/_base";

export const GetContractsResponse = z.object({
  data: z.array(Contract),
  meta: Meta,
});
export type TGetContractsResponse = z.infer<typeof GetContractsResponse>;

const MockContract: TContract = {
  id: "contract_",
  factionSymbol: "COSMIC",
  type: "PROCUREMENT",
  terms: {
    deadline: "2024-12-31T23:59:59Z",
    payment: {
      onAccepted: 500,
      onFulfilled: 1500,
    },
    deliver: [
      {
        tradeSymbol: "TRADE_SYMBOL",
        destinationSymbol: "DEST_SYMBOL",
        unitsRequired: 100,
        unitsFulfilled: 50,
      },
    ],
  },
  accepted: true,
  fulfilled: false,
  expiration: "2024-12-31T23:59:59Z",
  deadlineToAccept: "2024-01-01T00:00:00Z",
};

export const MockGetContractsResponse: TGetContractsResponse = {
  data: new Array(10).fill(MockContract).map((contract: TContract, index) => {
    return {
      ...contract,
      id: `${contract.id}${index + 1}`,
    };
  }),
  meta: {
    page: 1,
    limit: 10,
    total: 10,
  },
};

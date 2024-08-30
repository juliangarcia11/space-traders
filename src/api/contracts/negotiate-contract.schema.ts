import { z } from "zod";
import { Contract } from "~/api";

export const NegotiateContractResponseSchema = z.object({
  data: Contract,
});

export const MockNegotiateContractResponse = {
  data: {
    contract: {
      id: "cm0h63z4phhk7s60c1fr9lul4",
      factionSymbol: "COSMIC",
      type: "PROCUREMENT",
      terms: {
        deadline: "2024-09-06T20:29:58.291Z",
        payment: {
          onAccepted: 13425,
          onFulfilled: 44945,
        },
        deliver: [
          {
            tradeSymbol: "SHIP_PARTS",
            destinationSymbol: "X1-KM15-C49",
            unitsRequired: 5,
            unitsFulfilled: 0,
          },
        ],
      },
      accepted: false,
      fulfilled: false,
      expiration: "2024-08-31T20:29:58.291Z",
      deadlineToAccept: "2024-08-31T20:29:58.291Z",
    },
  },
};

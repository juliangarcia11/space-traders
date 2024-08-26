import { z } from "zod";
import { Contract, Meta } from "~/api/_base";

export const GetContractsResponse = z.object({
  data: z.array(Contract),
  meta: Meta,
});
export type TGetContractsResponse = z.infer<typeof GetContractsResponse>;

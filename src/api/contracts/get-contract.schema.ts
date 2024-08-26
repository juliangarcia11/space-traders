import { z } from "zod";
import { Contract } from "~/api/_base";

export const GetContractSchema = z.object({
  data: Contract,
});
export type TGetContractResponse = z.infer<typeof GetContractSchema>;

import { z } from "zod";
import { Ship } from "~/api";

export const GetShipResponse = z.object({
  data: Ship,
});
export type TGetShipResponse = z.infer<typeof GetShipResponse>;

import { z } from "zod";
import { Faction, Meta } from "~/api";

export const GetFactionsResponse = z.object({
  data: z.array(Faction),
  meta: Meta,
});

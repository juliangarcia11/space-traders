import { z } from "zod";
import { Faction } from "~/api";

export const GetFactionResponse = z.object({
  data: Faction,
});

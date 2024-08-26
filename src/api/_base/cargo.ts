import { z } from "zod";
import { Units } from "~/api/_base/units";
import { InventoryGoods } from "~/api/_base/inventory-goods";

/**
 * Ship cargo details.
 */
export const Cargo = z.object({
  capacity: Units.describe(
    "The max number of items that can be stored in the cargo hold.",
  ),
  units: Units.describe(
    "The number of items currently stored in the cargo hold.",
  ),
  inventory: z
    .array(InventoryGoods)
    .describe("The items currently in the cargo hold."),
});

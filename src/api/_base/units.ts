import { z } from "zod";

/**
 * General name for all the items that are positive integers.
 */
export const Units = z.number().int().positive();

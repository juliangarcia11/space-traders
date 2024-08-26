import { z } from "zod";

/**
 * Meta object for paginated responses
 */
export const Meta = z.object({
  total: z.number().nullish(), // total is not required for request params but will be present in response
  page: z.number(),
  limit: z.number(),
});

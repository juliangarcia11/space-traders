import { z } from "zod";

export const GetStatusResponse = z.object({
  status: z.string(),
  version: z.string(),
  resetDate: z.string(),
  description: z.string(),
  stats: z.object({
    agents: z.number(),
    ships: z.number(),
    systems: z.number(),
    waypoints: z.number(),
  }),
  leaderboards: z.object({
    mostCredits: z.array(
      z.object({
        agentSymbol: z.string(),
        credits: z.number(),
      }),
    ),
    mostSubmittedCharts: z.array(
      z.object({
        agentSymbol: z.string(),
        chartCount: z.number(),
      }),
    ),
  }),
  serverResets: z.object({
    next: z.string(),
    frequency: z.string(),
  }),
  announcements: z.array(
    z.object({
      title: z.string(),
      body: z.string(),
    }),
  ),
  links: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    }),
  ),
});

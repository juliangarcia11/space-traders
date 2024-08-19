import { z } from "zod";

export const Stats = z.object({
  agents: z.number(),
  ships: z.number(),
  systems: z.number(),
  waypoints: z.number(),
});

export const MostCredits = z.object({
  agentSymbol: z.string(),
  credits: z.number(),
});

export const MostSubmittedChart = z.object({
  agentSymbol: z.string(),
  chartCount: z.number(),
});

export const Leaderboards = z.object({
  mostCredits: z.array(MostCredits),
  mostSubmittedCharts: z.array(MostSubmittedChart),
});

export const ServerResets = z.object({
  next: z.string(),
  frequency: z.string(),
});

export const Announcements = z.object({
  title: z.string(),
  body: z.string(),
});

export const GameLink = z.object({
  name: z.string(),
  url: z.string(),
});

export const GetStatusResponse = z.object({
  status: z.string(),
  version: z.string(),
  resetDate: z.string(),
  description: z.string(),
  stats: Stats,
  leaderboards: Leaderboards,
  serverResets: ServerResets,
  announcements: z.array(Announcements),
  links: z.array(GameLink),
});

export type TGetStatusResponse = z.infer<typeof GetStatusResponse>;

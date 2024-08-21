import { z } from "zod";

export const Stats = z.object({
  agents: z.number(),
  ships: z.number(),
  systems: z.number(),
  waypoints: z.number(),
});
export type TStats = z.infer<typeof Stats>;

export const MostCredits = z.object({
  agentSymbol: z.string(),
  credits: z.number(),
});
export type TMostCredits = z.infer<typeof MostCredits>;

export const MostSubmittedChart = z.object({
  agentSymbol: z.string(),
  chartCount: z.number(),
});
export type TMostSubmittedChart = z.infer<typeof MostSubmittedChart>;

export const Leaderboards = z.object({
  mostCredits: z.array(MostCredits),
  mostSubmittedCharts: z.array(MostSubmittedChart),
});
export type TLeaderboards = z.infer<typeof Leaderboards>;

export const ServerResets = z.object({
  next: z.string(),
  frequency: z.string(),
});

export const Announcements = z.object({
  title: z.string(),
  body: z.string(),
});
export type TAnnouncements = z.infer<typeof Announcements>;

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

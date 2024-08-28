import { z } from "zod";

const FACTIONS = [
  "COSMIC",
  "VOID",
  "GALACTIC",
  "QUANTUM",
  "DOMINION",
  "ASTRO",
  "CORSAIRS",
  "OBSIDIAN",
  "AEGIS",
  "UNITED",
  "SOLITARY",
  "COBALT",
  "OMEGA",
  "ECHO",
  "LORDS",
  "CULT",
  "ANCIENTS",
  "SHADOW",
  "ETHEREAL",
] as const;

export const Factions = z.enum(FACTIONS, {
  description: "The symbol of the faction you want to join.",
});
export type TFactions = z.infer<typeof Factions>;

export const Faction = z.object({
  symbol: Factions,
  name: z.string(),
  description: z.string(),
  headquarters: z.string(),
  traits: z.array(
    z.object({
      symbol: z.string(),
      name: z.string(),
      description: z.string(),
    }),
  ),
  isRecruiting: z.boolean(),
});
export type TFaction = z.infer<typeof Faction>;

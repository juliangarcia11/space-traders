import { FactionTraits } from "~/app/dashboard/components/faction-trait";
import { type Meta, type StoryObj } from "@storybook/react";
import { MockPostAgentResponse } from "~/api";
import { within, expect } from "@storybook/test";

const meta: Meta<typeof FactionTraits> = {
  title: "Pages/Dashboard Page/Faction Traits",
  component: FactionTraits,
};

export default meta;
type Story = StoryObj<typeof FactionTraits>;

export const FactionTraitsStory: Story = {
  name: "Default",
  args: {
    traits: MockPostAgentResponse.data.faction.traits,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const traitTags = canvas.getAllByTestId("faction-trait");
    await expect(traitTags).toHaveLength(
      MockPostAgentResponse.data.faction.traits.length,
    );
    for (const tag of traitTags) {
      const i = traitTags.indexOf(tag);
      await expect(tag).toHaveTextContent(
        MockPostAgentResponse.data.faction.traits[i]!.symbol,
      );
    }
  },
};

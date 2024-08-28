import { FactionTrait } from "~/app/dashboard/components/faction-trait";
import { type Meta, type StoryObj } from "@storybook/react";
import { PostAgentResponse200 } from "~/api";
import { within } from "@storybook/test";

const meta: Meta<typeof FactionTrait> = {
  title: "Pages/Dashboard Page/Faction Trait",
  component: FactionTrait,
};

export default meta;
type Story = StoryObj<typeof FactionTrait>;

export const FactionTraitStory: Story = {
  name: "Default",
  args: {
    trait: PostAgentResponse200.data.faction.traits[0],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // find the button
    await canvas.findByTestId("faction-trait");
    // find the button label
    await canvas.findByText(
      PostAgentResponse200.data.faction.traits[0]!.symbol,
    );
  },
};

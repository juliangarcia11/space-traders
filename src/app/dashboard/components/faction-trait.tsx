import { Tooltip } from "primereact/tooltip";
import { Tag } from "primereact/tag";
import { type TFactionTrait } from "~/api";

export function FactionTrait({ trait }: { trait: TFactionTrait }) {
  return (
    <>
      <Tooltip
        content={trait.description}
        target={`.faction-trait-avatar-${trait.symbol}`}
        data-testid="faction-trait-tooltip"
        className="shadow-none"
      />
      <Tag
        className={`faction-trait-avatar-${trait.symbol} flex items-center border-none`}
        data-testid="faction-trait"
        style={{
          backgroundColor: getHexBackgroundColor(trait),
          color: getTextColor(getHexBackgroundColor(trait)),
        }}
      >
        {trait.symbol}
      </Tag>
    </>
  );
}

/**
 * Get a hex color based on the trait name.
 * This is a simple way to generate a color that is consistent for a given trait.
 * @param trait
 */
function getHexBackgroundColor(trait: TFactionTrait) {
  const hash = trait.name
    .split("")
    .reduce((acc, char) => char.charCodeAt(0) + acc, 0);
  const hue = hash % 360;
  return `hsl(${hue}, 50%, 50%)`;
}

/**
 * Get the text color based on the background color.
 * @param backgroundColor
 */
function getTextColor(backgroundColor: string) {
  const lightness =
    backgroundColor.slice(4, -1).split(",").map(Number)[2] ?? undefined;
  return lightness && lightness > 50 ? "black" : "white";
}

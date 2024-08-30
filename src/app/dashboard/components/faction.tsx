"use client";
import { type TFaction } from "~/api";
import { OverlayPanel } from "primereact/overlaypanel";
import { useRef, useState } from "react";
import { Button } from "primereact/button";
import { FactionSummary } from "~/app/dashboard/components/faction-summary";

/**
 * Button that toggles the display of a faction summary.
 *
 * NOTE: This is a WIP component and may be subject to change.
 */
export function Faction({ faction }: { faction: TFaction }) {
  const op = useRef<OverlayPanel>(null);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Button
        label="Faction"
        severity="secondary"
        icon={isVisible ? "pi pi-chevron-down" : "pi pi-chevron-left"}
        iconPos="right"
        size="small"
        text
        onClick={(e) => {
          setIsVisible(!isVisible);
          op.current?.toggle(e);
        }}
        type="button"
        data-testid="faction"
        className="w-fit"
      />
      <OverlayPanel ref={op} className="before:hidden">
        <FactionSummary faction={faction} />
      </OverlayPanel>
    </>
  );
}

"use client";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { JoinDialogForm } from "./form";

type JoinDialogTriggerProps = {
  isStory?: boolean;
  disabled?: boolean;
};

export function JoinDialogTrigger({
  isStory = false,
  disabled = false,
}: JoinDialogTriggerProps) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Button
        label="Join"
        disabled={disabled}
        onClick={() => setIsVisible(true)}
        type="button"
        size="small"
        severity="success"
        tooltip="Join as new Agent!"
        tooltipOptions={{ position: "left", showDelay: 500 }}
        data-testid="join-dialog-trigger"
      />
      <Dialog
        header={
          <h2 className="text-lg font-bold sm:text-2xl">Create a new Agent</h2>
        }
        visible={isVisible}
        onHide={() => setIsVisible(false)}
        style={{ width: "fit-content" }}
        pt={{ headerTitle: { className: "px-4" } }}
        data-testid="join-dialog"
        appendTo={isStory ? "self" : undefined}
      >
        <JoinDialogForm />
      </Dialog>
    </>
  );
}

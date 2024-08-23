"use client";

import { useFormState } from "react-dom";
import { Button } from "primereact/button";
import { JoinDialogContent } from "./content";
import { postAgent } from "~/api";
import { Message } from "primereact/message";
import { useEffect } from "react";

const initialState = {
  success: false,
  error: "",
} as const;

/**
 * Form handler for starting a new game by creating a new agent
 */
export function JoinDialogForm() {
  const [state, formAction, pending] = useFormState(postAgent, initialState);

  return (
    <form action={formAction} data-testid="join-dialog-form">
      <JoinDialogContent formState={state} />
      <span className="flex justify-end">
        {!state.success && (
          <Button
            label={pending ? "Joining..." : "Join"}
            severity="success"
            type="submit"
            role="button"
            data-testid="join-dialog-submit"
            disabled={pending}
          />
        )}
        {state.success && (
          <Message severity="success" text="Agent created successfully!" />
        )}
      </span>
    </form>
  );
}

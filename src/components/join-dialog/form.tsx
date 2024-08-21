import { JoinDialogContent } from "./content";
import { Button } from "primereact/button";

/**
 * Form handler for starting a new game by creating a new agent
 */
export function JoinDialogForm() {
  return (
    <form role="form" data-testid="join-dialog-form">
      <JoinDialogContent />
      <span className="flex justify-end">
        <Button
          label="Join"
          severity="success"
          type="submit"
          role="button"
          data-testid="join-dialog-submit"
        />
      </span>
    </form>
  );
}

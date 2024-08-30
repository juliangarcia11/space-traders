import { Button } from "primereact/button";

export function AgentCredits({ credits }: { credits: number }) {
  return (
    <Button
      label={formatNumber(credits)}
      severity={credits > 0 ? "success" : "danger"}
      icon="pi pi-money-bill"
      size="small"
      text
      tooltip="Credits (earned through contract fulfillments)"
      tooltipOptions={{ position: "left" }}
      data-testid="agent-credits"
      className="w-fit"
    />
  );
}

/**
 * Format a number with commas for thousands separators.
 * For example, given a number like 1500546, return a string like "1,500,546"
 */
function formatNumber(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

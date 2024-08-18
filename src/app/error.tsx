"use client";

import { useEffect } from "react";
import { Button } from "primereact/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center gap-4">
      <i className="pi pi-exclamation-circle text-center text-8xl" />
      <h3 className="text-center text-4xl font-thin">Something went wrong!</h3>
      <Button
        label="Try Again"
        size="small"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      />
    </main>
  );
}

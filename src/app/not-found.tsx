"use client";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";

/**
 * Root 404 Not Found Page
 *
 * Displayed when a route is not found & no other sub-routes have a `not-found.tsx` page.
 * Displays a '404 Not Found' message and a button to go back.
 */
export default function NotFound() {
  const router = useRouter();
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <i className="pi pi-exclamation-circle text-center text-8xl" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested resource.</p>
      <Button label="Go Back" size="small" onClick={() => router.back()} />
    </main>
  );
}

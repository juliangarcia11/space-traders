import { cookies } from "next/headers";
import { api_urls } from "~/api";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

/**
 * Log the user out by deleting the API token cookie
 * and redirecting to the home page
 *
 * TODO: add a 'you've been logged out' message to the front end
 *
 * @link https://nextjs.org/docs/app/building-your-application/routing/route-handlers
 * @param _ - The incoming request data (unused)
 * @constructor
 */
export async function GET(_: Request) {
  cookies().delete(api_urls.cookie); // Delete the API token cookie
  revalidatePath("/"); // clear the cache for the home page
  return redirect("/");
}

import { notOkResponse } from "~/api";

export function badRequest(clientMessage: string, fn?: string) {
  return notOkResponse(
    { status: 400, statusText: "Bad Request" },
    clientMessage,
    fn ?? "unknown fn",
  );
}

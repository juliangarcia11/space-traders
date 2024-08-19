export type TNotOkResponse = {
  success: false;
  error: string;
};

/**
 * Not OK response handler
 *
 * @param response - The response object from the fetch call
 * @param clientMessage - A message to display to the client (default: response.statusText)
 * @param fn - The function name that called this function (default: "fetch")
 */
export function notOkResponse(
  response: Response,
  clientMessage?: string,
  fn?: string,
): TNotOkResponse {
  const error = `[error][${fn ?? "fetch"}][${response.status}]: ${response.statusText}`;
  console.error(error);
  return {
    success: false,
    error: clientMessage ?? response.statusText,
  };
}

export type TOkResponse<T> = {
  success: true;
  data: T;
};

/**
 * OK response handler
 *
 * @param data - The data to return
 */
export function okResponse<T>(data: T): TOkResponse<T> {
  return {
    success: true,
    data,
  };
}

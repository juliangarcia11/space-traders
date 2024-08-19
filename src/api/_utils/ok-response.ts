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

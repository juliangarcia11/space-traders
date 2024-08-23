/**
 * If there's an error response from the SpaceTraders API, this type is used to parse the error message
 */
export type TApiError<TData = unknown> = {
  error: {
    message: string;
    code: number;
    data?: TData;
  };
};

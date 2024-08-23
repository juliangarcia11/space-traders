import { type TNotOkResponse, type TOkResponse } from "~/api";

export type TResponse<T = unknown> = TOkResponse<T> | TNotOkResponse;

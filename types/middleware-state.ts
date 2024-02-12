import type { User } from "./index.ts";

export type MiddlewareState = {
  user: User | null;
};

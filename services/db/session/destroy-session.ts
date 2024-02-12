import { kv } from "../index.ts";

export const destroySession = (sessionId: string) => {
  return kv.delete(["sessions", sessionId]);
};

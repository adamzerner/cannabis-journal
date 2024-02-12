import { kv } from "../index.ts";
import { User } from "@/types/index.ts";

export const createSession = (sessionId: string, userId: User["id"]) => {
  return kv.set(["sessions", sessionId], userId);
};

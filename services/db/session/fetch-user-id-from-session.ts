import { kv } from "@/services/db/index.ts";
import { User } from "@/types/index.ts";

export const fetchUserIdFromSession = async (sessionId: string) => {
  const record = await kv.get<User["id"]>(["sessions", sessionId]);

  if (!record.value) {
    throw new Error(`Unable to fetch session with the id of ${sessionId}.`);
  }

  return record.value;
};

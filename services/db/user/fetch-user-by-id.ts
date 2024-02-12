import { kv } from "@/services/db/index.ts";
import { User } from "@/types/index.ts";

export const fetchUserById = async (id: User["id"]) => {
  const record = await kv.get<User>(["users", "id", id]);

  if (!record.value) {
    throw new Error(`Unable to fetch user with the id of ${id}.`);
  }

  return record.value;
};

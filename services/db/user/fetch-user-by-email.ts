import { kv } from "@/services/db/index.ts";
import { User } from "@/types/index.ts";

export const fetchUserByEmail = async (email: User["email"]) => {
  const record = await kv.get<User>(["users", "email", email]);

  if (!record.value) {
    throw new Error(`Unable to fetch user with the email of ${email}.`);
  }

  return record.value;
};

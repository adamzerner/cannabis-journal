import { kv } from "@/services/db/index.ts";
import { User } from "@/types/index.ts";

export const fetchUserByEmail = (email: User["email"]) =>
  kv.get<User>(["users", "email", email]);

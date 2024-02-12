import { kv } from "@/services/db/index.ts";
import { User } from "@/types/index.ts";

export const fetchUserById = (id: User["id"]) =>
  kv.get<User>(["users", "id", id]);

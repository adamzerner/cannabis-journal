import { kv } from "@/services/db/index.ts";
import { User } from "@/types/index.ts";

export const destroyUser = async (id: User["id"]) => {
  const user = await kv.get<User>(["users", "id", id]);

  if (!user.value) {
    throw new Error(`A user with the id of ${id} doesn't exist.`);
  }

  return kv
    .atomic()
    .delete(["users", "id", user.value.id])
    .delete(["users", "email", user.value.email])
    .commit();
};

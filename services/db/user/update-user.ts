import { kv } from "../index.ts";
import { User } from "@/types/index.ts";

export const updateUser = async (user: User) => {
  const [userWithId, userWithEmail] = await Promise.all([
    kv.get(["users", "id", user.id]),
    kv.get(["users", "email", user.email]),
  ]);

  if (!userWithId.value) {
    throw new Error(`A user with the id of ${user.id} doesn't exist.`);
  } else if (!userWithEmail.value) {
    throw new Error(`A user with the email of ${user.email} doesn't exist.`);
  }

  return kv.atomic()
    .set(["users", "id", user.id], user)
    .set(["users", "email", user.email], user)
    .commit();
};

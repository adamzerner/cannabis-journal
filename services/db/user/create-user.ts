import { kv } from "../index.ts";
import { User } from "@/types/index.ts";

export const createUser = async (user: User) => {
  const [userWithId, userWithEmail] = await Promise.all([
    kv.get(["users", "id", user.id]),
    kv.get(["users", "email", user.email]),
  ]);

  if (userWithId.value) {
    throw new Error(`A user with the id of ${user.id} already exists.`);
  } else if (userWithEmail.value) {
    throw new Error(`A user with the email of ${user.email} already exists.`);
  }

  return Promise.all([
    kv.set(["users", "id", user.id], user),
    kv.set(["users", "email", user.email], user),
  ]);
};

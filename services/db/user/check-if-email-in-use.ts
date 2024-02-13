import { User } from "@/types/index.ts";
import { fetchUserByEmail } from "@/services/db/index.ts";

export const checkIfEmailInUse = async (email: User["email"]) => {
  try {
    await fetchUserByEmail(email); // this will throw an error if a user with this email doesn't exist

    return true;
  } catch (_e) {
    return false;
  }
};

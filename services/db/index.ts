export const kv = await Deno.openKv();

export { createUser } from "./user/create-user.ts";
export { fetchUserById } from "./user/fetch-user-by-id.ts";
export { fetchUserByEmail } from "./user/fetch-user-by-email.ts";
export { updateUser } from "./user/update-user.ts";
export { destroyUser } from "./user/destroy-user.ts";

export { createSession } from "./session/create-session.ts";
export { destroySession } from "./session/destroy-session.ts";
export { fetchUserIdFromSession } from "./session/fetch-user-id-from-session.ts";

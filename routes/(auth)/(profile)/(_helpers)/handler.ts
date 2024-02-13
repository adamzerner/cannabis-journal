import { Handlers } from "$fresh/server.ts";
import { redirect } from "@/utilities/index.ts";
import { getCookies } from "$std/http/cookie.ts";
import {
  destroySession,
  destroyUser,
  fetchUserIdFromSession,
} from "@/services/db/index.ts";

export const handler: Handlers = {
  POST: async (req) => {
    const cookies = getCookies(req.headers);
    const userId = await fetchUserIdFromSession(cookies.sessionId);

    await Promise.all([
      destroyUser(userId),
      destroySession(cookies.sessionId),
    ]);

    return redirect(
      "/forgot-password?alert=You'll receive an email with instructions for resetting your password.&alertVariant=success",
    );
  },
};

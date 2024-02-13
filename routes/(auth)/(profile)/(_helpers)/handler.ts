import { Handlers } from "$fresh/server.ts";
import { redirect } from "@/utilities/index.ts";
import { deleteCookie, getCookies } from "$std/http/cookie.ts";
import {
  destroySession,
  destroyUser,
  fetchUserIdFromSession,
} from "@/services/db/index.ts";

export const handler: Handlers = {
  POST: async (req) => {
    const url = new URL(req.url);
    const headers = new Headers(req.headers);
    const cookies = getCookies(req.headers);
    const userId = await fetchUserIdFromSession(cookies.sessionId);

    await Promise.all([
      destroyUser(userId),
      destroySession(cookies.sessionId),
    ]);
    deleteCookie(headers, "sessionId", { path: "/", domain: url.hostname });

    return redirect(
      "/?alert=Your account has been successfully deleted.&alertVariant=success",
      headers,
    );
  },
};

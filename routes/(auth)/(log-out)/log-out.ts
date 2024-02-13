import { Handlers } from "$fresh/server.ts";
import { deleteCookie, getCookies } from "$std/http/cookie.ts";
import { destroySession } from "@/services/db/index.ts";
import { redirect } from "@/utilities/index.ts";

export const handler: Handlers = {
  GET: async (req) => {
    const url = new URL(req.url);
    const headers = new Headers(req.headers);
    const cookies = getCookies(req.headers);

    if (cookies.sessionId) {
      await destroySession(cookies.sessionId);
      deleteCookie(headers, "sessionId", { path: "/", domain: url.hostname });
    } else {
      console.warn("Trying to log out without a session id.");
    }

    return redirect("/", headers, 303);
  },
};

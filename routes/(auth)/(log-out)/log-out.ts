import { Handlers } from "$fresh/server.ts";
import { deleteCookie, getCookies } from "$std/http/cookie.ts";

export const handler: Handlers = {
  GET: (req) => {
    const url = new URL(req.url);
    const headers = new Headers(req.headers);
    const cookies = getCookies(req.headers);

    if (cookies.sessionId) {
      // TODO delete from sesssions table
      deleteCookie(headers, "sessionId", { path: "/", domain: url.hostname });
    } else {
      console.warn("Trying to log out without a session id.");
    }

    headers.set("location", "/");

    return new Response(null, {
      status: 302,
      headers,
    });
  },
};

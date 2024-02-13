import { FreshContext } from "$fresh/server.ts";
import { deleteCookie, getCookies } from "$std/http/cookie.ts";
import { MiddlewareState } from "@/types/index.ts";
import { fetchUserById, fetchUserIdFromSession } from "@/services/db/index.ts";

export const handler = async (
  req: Request,
  ctx: FreshContext<MiddlewareState>,
) => {
  const cookies = getCookies(req.headers);

  ctx.state.user = null;

  if (cookies.sessionId) {
    try {
      const userId = await fetchUserIdFromSession(cookies.sessionId);

      if (userId) {
        ctx.state.user = await fetchUserById(userId);
      }
    } catch (_e) {
      deleteCookie(req.headers, "sessionId");
    }
  }

  return await ctx.next();
};

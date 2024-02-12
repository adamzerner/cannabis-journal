import { FreshContext } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { MiddlewareState } from "@/types/index.ts";
import { fetchUserById, fetchUserIdFromSession } from "@/services/db/index.ts";

export const handler = async (
  req: Request,
  ctx: FreshContext<MiddlewareState>,
) => {
  const cookies = getCookies(req.headers);

  ctx.state.user = null;

  if (cookies.sessionId) {
    const userId = await fetchUserIdFromSession(cookies.sessionId);

    if (userId) {
      ctx.state.user = await fetchUserById(userId);
    }
  }

  return await ctx.next();
};

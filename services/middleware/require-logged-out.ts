import { FreshContext } from "$fresh/server.ts";
import { MiddlewareState } from "@/types/index.ts";

export const requireLoggedOut = async (
  _req: Request,
  ctx: FreshContext<MiddlewareState>,
) => {
  if (ctx.state.user !== null) {
    return new Response("", {
      status: 307,
      headers: { Location: "/" },
    });
  }

  return await ctx.next();
};

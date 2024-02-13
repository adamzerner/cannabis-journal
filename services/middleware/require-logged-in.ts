import { FreshContext } from "$fresh/server.ts";
import { MiddlewareState } from "@/types/index.ts";

export const requireLoggedIn = async (
  _req: Request,
  ctx: FreshContext<MiddlewareState>,
) => {
  if (ctx.state.user === null) {
    return new Response("", {
      status: 307,
      headers: { Location: "/sign-in" },
    });
  }

  return await ctx.next();
};

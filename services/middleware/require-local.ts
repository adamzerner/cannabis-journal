import { FreshContext } from "$fresh/server.ts";
import { MiddlewareState } from "@/types/index.ts";
import { isProduction } from "@/utilities/is-production.ts";

export const requireLocal = async (
  _req: Request,
  ctx: FreshContext<MiddlewareState>,
) => {
  if (isProduction()) {
    return new Response("", {
      status: 307,
      headers: { Location: "/" },
    });
  }

  return await ctx.next();
};

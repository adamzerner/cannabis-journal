import { redirect } from "@/utilities/redirect.ts";
import { Handlers } from "$fresh/server.ts";
import { getHashedValue } from "@/utilities/get-hashed-value.ts";
import { Cookie, setCookie } from "$std/http/cookie.ts";
import {
  checkIfEmailInUse,
  createSession,
  fetchUserByEmail,
} from "@/services/db/index.ts";

export const handler: Handlers = {
  POST: async (req) => {
    const url = new URL(req.url);
    const form = await req.formData();
    const headers = new Headers();
    const email = form.get("email")?.toString();
    const password = form.get("password")?.toString();
    const rememberMe = form.get("remember-me")?.toString() === "on";

    if (!email) {
      return redirect(
        "/sign-in?alert=You forgot to enter an email.&alertVariant=danger",
      );
    } else if (!password) {
      return redirect(
        "/sign-in?alert=You forgot to enter a password.&alertVariant=danger",
      );
    }

    const isEmailInUse = await checkIfEmailInUse(email);

    if (!isEmailInUse) {
      return redirect(
        "/sign-in?alert=Invalid email and/or password.&alertVariant=danger",
      );
    }

    const user = await fetchUserByEmail(email);
    const hashedPasswordFromForm = await getHashedValue(password);

    if (
      !user ||
      hashedPasswordFromForm !== user.hashedPassword
    ) {
      return redirect(
        "/sign-in?alert=Invalid email and/or password.&alertVariant=danger",
      );
    }

    // login
    const sessionId = crypto.randomUUID();
    const cookiePayload: Cookie = {
      name: "sessionId",
      value: sessionId,
      sameSite: "Lax", // this is important to prevent CSRF attacks
      domain: url.hostname,
      path: "/",
      secure: true,
    };

    if (rememberMe) {
      cookiePayload.maxAge = 365 * 24 * 60 * 60; // one year;
    }

    await createSession(sessionId, user.id);
    setCookie(headers, cookiePayload);

    return redirect("/", headers);
  },
};

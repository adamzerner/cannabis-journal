import { Handlers } from "$fresh/server.ts";
import { getHashedValue, redirect } from "@/utilities/index.ts";
import { checkIfEmailInUse, createUser } from "@/services/db/index.ts";

export const handler: Handlers = {
  POST: async (req) => {
    const form = await req.formData();
    const email = form.get("email")?.toString();
    const password = form.get("password")?.toString();

    if (!email) {
      return redirect(
        "/register?alert=An email is required.&alertVariant=danger",
      );
    }

    const isEmailInUse = await checkIfEmailInUse(email);

    if (isEmailInUse) {
      return redirect(
        "/register?alert=That email is already in use.&alertVariant=danger",
      );
    } else if (!password) {
      return redirect(
        "/register?alert=A password is required.&alertVariant=danger",
      );
    } else if (password.length < 6) {
      return redirect(
        "/register?alert=Your password must be at least six characters long.&alertVariant=danger",
      );
    }

    const hashedPassword = await getHashedValue(password);

    await createUser({
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      email,
      hashedPassword,
      resetPasswordToken: null,
    });

    return redirect(
      "/sign-in?alert=You have been successfully registered.&alertVariant=success",
    );
  },
};

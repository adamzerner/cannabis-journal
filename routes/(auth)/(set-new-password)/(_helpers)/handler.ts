import { Handlers } from "$fresh/server.ts";
import { getHashedValue, redirect } from "@/utilities/index.ts";
import { fetchUserByEmail, updateUser } from "@/services/db/index.ts";

export const handler: Handlers = {
  POST: async (req) => {
    const form = await req.formData();
    const email = form.get("email")?.toString() as string;
    const resetPasswordToken = form.get("reset-password-token")?.toString();
    const newPassword = form.get("new-password")?.toString();

    if (!newPassword) {
      return redirect(
        "/set-new-password?alert=You forgot to enter a new password.&alertVariant=danger",
      );
    } else if (newPassword.length < 6) {
      return redirect(
        "/set-new-password?alert=Your password must be at least six characters long.&alertVariant=danger",
      );
    }

    const user = await fetchUserByEmail(email);

    if (!user) {
      console.warn(`Unable to find user with email: ${email}`);

      return redirect(
        "/sign-in?alert=You have successfully changed your password. Please sign in.&alertVariant=success",
      );
    }

    if (user.resetPasswordToken !== resetPasswordToken) {
      console.warn("Invalid reset password token.");

      return redirect(
        "/sign-in?alert=You have successfully changed your password. Please sign in.&alertVariant=success",
      );
    }

    const hashedPassword = await getHashedValue(newPassword);
    await updateUser({
      ...user,
      hashedPassword,
    });

    const resendApiResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      },
      body: JSON.stringify({
        from: "Adam Zerner <adamzerner@protonmail.com>",
        to: [email],
        subject: "Password Reset",
        text:
          "Your password has been reset. If you weren't the one who did this, please email adamzerner@protonmail.com for support.",
      }),
    });

    if (!resendApiResponse.ok) {
      console.error("Unable to send confirmation email for password reset.");
      console.error(await resendApiResponse.json());
    }

    return redirect(
      "/sign-in?alert=You have successfully changed your password. Please sign in.&alertVariant=success",
    );
  },
};

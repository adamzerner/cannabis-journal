import { Handlers } from "$fresh/server.ts";
import { redirect } from "@/utilities/index.ts";

export const handler: Handlers = {
  POST: async (req) => {
    const form = await req.formData();
    const email = form.get("email")?.toString();

    if (!email) {
      return redirect(
        "/forgot-password?alert=You forgot to enter an email.&alertVariant=danger",
      );
    }

    const user = null; // TODO fetch user by email

    if (!user) {
      console.warn(`Email entered with no corresponding user: ${email}`);

      // We don't want to let people know what emails are in use by giving an error message here.
      return redirect(
        "/forgot-password?alert=You'll receive an email with instructions for resetting your password.&alertVariant=success",
      );
    }

    const resetPasswordToken = crypto.randomUUID();

    // TODO update user in DB with `resetPasswordToken`

    // TODO set up Resend
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
        text: `Please visit the following URL to set a new password: ${
          Deno.env.get("BASE_URL")
        }/set-new-password?email=${email}&reset-password-token=${resetPasswordToken}`,
      }),
    });

    if (!resendApiResponse.ok) {
      const error = await resendApiResponse.json();

      console.error(error);

      return redirect(
        "/forgot-password?alert=Unable to send email. Please reach out to adamzerner@protonmail.com for assistance.&alertVariant=danger",
      );
    }

    return redirect(
      "/forgot-password?alert=You'll receive an email with instructions for resetting your password.&alertVariant=success",
    );
  },
};

import { PageProps } from "$fresh/server.ts";
import { Button, H1, Link, Text } from "rfui";
import { MiddlewareState } from "@/types/index.ts";
import { DeleteAccountForm } from "./(_islands)/delete-account-form.tsx";

export default ({ state }: PageProps<unknown, MiddlewareState>) => {
  const user = state.user;

  if (!user) {
    return <main>You are not logged in.</main>;
  }

  return (
    <main>
      <H1>Profile</H1>
      <Text class="!gap-8">
        <div>
          <div class="text-xl">Email: {user.email}</div>
          <div class="text-neutral-500 mt-2">
            To update your email, contact{" "}
            <Link href="mailto:adamzerner@protonmail.com">
              adamzerner@protonmail.com
            </Link>{" "}
            for support.
          </div>
        </div>
        <div>
          <div class="text-xl">Password</div>
          <div class="text-neutral-500 mt-2">
            To change your password, please log out and go through the{" "}
            <Link href="/forgot-password">
              forgot password
            </Link>{" "}
            process, which you can access from the{" "}
            <Link href="/sign-in">sign in page</Link>.
          </div>
        </div>
        <DeleteAccountForm />
      </Text>
    </main>
  );
};

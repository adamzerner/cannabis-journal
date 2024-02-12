import { H1, Link, Text } from "rfui";

export default () => {
  const user = {
    email: "johndoe@example.com",
  };

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
      </Text>
    </main>
  );
};

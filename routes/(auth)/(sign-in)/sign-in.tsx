import { Button, Flex, FormField, H1, Link } from "rfui";
import { PasswordInput } from "@/islands/password-input.tsx";

export { handler } from "./(_helpers)/handler.ts";

export default () => {
  return (
    <main>
      <H1>Sign in</H1>
      <form method="post" class="flex w-[600px] flex-col gap-5">
        <FormField
          required
          label="Email"
          type="email"
          name="email"
        />
        <PasswordInput
          required
          label="Password"
          name="password"
          inputRest={{
            minlength: 6,
          }}
        />
        <FormField label="Remember me" type="checkbox" name="remember-me" />
        <Button type="submit" class="mt-2 self-start">Sign in</Button>
      </form>
      <Flex class="mt-8 gap-3 text-sm">
        <Link href="/forgot-password">Forgot password</Link>
        <Link href="/forgot-email">Forgot email</Link>
      </Flex>
    </main>
  );
};

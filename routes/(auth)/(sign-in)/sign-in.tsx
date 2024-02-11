import { Button, Flex, FormField, H1, Link } from "rfui";
import { PasswordInput } from "@/islands/password-input.tsx";

export default () => {
  return (
    <main>
      <H1>Sign in</H1>
      <form class="flex flex-col gap-5 w-[600px]">
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
      <Flex class="gap-3 text-sm mt-8">
        <Link href="/forgot-password">Forgot password</Link>
        <Link href="/forgot-email">Forgot email</Link>
      </Flex>
    </main>
  );
};

import { Button, FormField, H1 } from "rfui";
import { PasswordInput } from "@/islands/password-input.tsx";

export { handler } from "./(_helpers)/handler.ts";

export default () => {
  return (
    <main>
      <H1>Register</H1>
      <form method="post" class="flex flex-col gap-5 w-[600px]">
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
          helperText="Six or more characters"
          inputRest={{
            minlength: 6,
          }}
        />
        <Button type="submit" class="mt-2 self-start">Register</Button>
      </form>
    </main>
  );
};

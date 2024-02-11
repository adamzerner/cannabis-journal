import { Button, H1 } from "rfui";
import { PasswordInput } from "@/islands/password-input.tsx";
import { Head } from "$fresh/runtime.ts";

export { handler } from "./(_helpers)/handler.ts";

export default (req: Request) => {
  // @ts-expect-error works
  const qs = new URLSearchParams(req.url.search);

  return (
    <>
      <Head>
        <meta name="referrer" content="no-referrer" />
      </Head>
      <main>
        <H1>Set a new password</H1>
        {qs.has("email") &&
          (
            <input
              type="hidden"
              name="email"
              value={qs.get("email") as string}
            />
          )}
        {qs.has("reset-password-token") &&
          (
            <input
              type="hidden"
              name="reset-password-token"
              value={qs.get("reset-password-token") as string}
            />
          )}
        <form method="post" class="flex flex-col gap-5 w-[600px]">
          <PasswordInput
            required
            label="New password"
            name="new-password"
            helperText="Six or more characters"
            inputRest={{
              minlength: 6,
            }}
          />
          <Button type="submit" class="mt-2 self-start">Submit</Button>
        </form>
      </main>
    </>
  );
};

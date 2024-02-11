import { Button, FormField, H1 } from "rfui";

export default () => {
  return (
    <main>
      <H1>Forgot password</H1>
      <form class="flex flex-col gap-5 w-[600px]">
        <FormField
          required
          label="Email"
          type="email"
          name="email"
          helperText="You'll receive an email with instructions for resetting your password"
        />
        <Button type="submit" class="mt-2 self-start">Submit</Button>
      </form>
    </main>
  );
};

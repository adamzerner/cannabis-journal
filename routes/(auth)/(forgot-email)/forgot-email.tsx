import { H1, Link, Text } from "rfui";

export default () => {
  return (
    <main>
      <H1>Forgot email</H1>
      <Text>
        <p>
          Forgot your email? Contact{" "}
          <Link href="mailto:adamzerner@protonmail.com">
            adamzerner@protonmail.com
          </Link>{" "}
          for support.
        </p>
      </Text>
    </main>
  );
};

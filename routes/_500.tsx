import { CodeBlock, H1, Link, Text } from "rfui";
import { PageProps } from "$fresh/server.ts";

export default ({ error }: PageProps) => {
  return (
    <div class="max-w-prose text-lg">
      <H1>Unexpected error</H1>
      <Text>
        <p>
          There was an unexpected error. Sorry about that.
        </p>
        <p>
          Please <Link href="mailto:adamzerner@protonmail.com">reach out</Link>
          {" "}
          for help.
        </p>
      </Text>
      <CodeBlock class="mt-4" code={(error as Error).toString()} />
    </div>
  );
};

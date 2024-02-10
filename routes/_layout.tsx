import { PageProps } from "$fresh/server.ts";
import { Container } from "rfui";
import { Navbar } from "../components/layout/navbar.tsx";

export default ({ Component, route }: PageProps) => {
  return (
    <>
      <Navbar route={route} />
      <Container size="lg" class="mt-8 mb-6 font-sans min-h-[200px]">
        <Component />
      </Container>
    </>
  );
};

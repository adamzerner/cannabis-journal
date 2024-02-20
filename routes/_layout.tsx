import { PageProps } from "$fresh/server.ts";
import { AlertBody, AlertType, Container } from "rfui";
import { Navbar } from "@/components/layout/navbar.tsx";
import { Alert } from "@/islands/alert.tsx";

export default ({ Component, state, route, url }: PageProps) => {
  const searchParams = new URL(url).searchParams;
  const alert = searchParams.get("alert");
  const alertVariant =
    searchParams.get("alertVariant") as AlertType["variant"] ||
    undefined;
  const isLoggedIn = !!state.user;

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} route={route} />
      <Container size="lg" class="mb-6 mt-8 min-h-[200px] font-sans">
        {alert &&
          (
            <Alert variant={alertVariant}>
              <AlertBody>{alert}</AlertBody>
            </Alert>
          )}
        <Component />
      </Container>
    </>
  );
};

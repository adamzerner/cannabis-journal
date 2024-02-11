import { PageProps } from "$fresh/server.ts";
import { AlertBody, AlertType, Container } from "rfui";
import { Navbar } from "@/components/layout/navbar.tsx";
import { Alert } from "@/islands/alert.tsx";

export default ({ Component, route, url }: PageProps) => {
  const searchParams = new URL(url).searchParams;
  const alert = searchParams.get("alert");
  const alertVariant =
    searchParams.get("alertVariant") as AlertType["variant"] ||
    undefined;

  return (
    <>
      <Navbar route={route} />
      <Container size="lg" class="mt-8 mb-6 font-sans min-h-[200px]">
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

import { type PageProps } from "$fresh/server.ts";
import { getStylesheetUrl } from "rfui";

export default ({ Component }: PageProps) => {
  return (
    <html lang="en">
      <head>
        <title>Cannabis Journal</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href={getStylesheetUrl()} />
        <link rel="stylesheet" href="/prism.css" />
      </head>
      <body>
        <Component />
        <script src="/prism.js"></script>
      </body>
    </html>
  );
};

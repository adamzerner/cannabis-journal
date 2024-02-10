import { type PageProps } from "$fresh/server.ts";
import { getStylesheetUrl } from "rfui";

export default ({ Component }: PageProps) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cannabis Journal</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href={getStylesheetUrl()} />
        <link rel="stylesheet" href="/prism.css" />
        <script src="/prism.js"></script>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
};

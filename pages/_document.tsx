import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";

import { fontMontserrat } from "@/config/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          // fontSans.variable,
          fontMontserrat.variable,
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

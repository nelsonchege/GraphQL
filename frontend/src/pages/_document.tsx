import { ColorModeScript } from "@chakra-ui/react";
import { Head, Html, Main, NextScript } from "next/document";
import { theme } from "../chakra/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript
          initialColorMode={theme.configChakra.initialColorMode}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

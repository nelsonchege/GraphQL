import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const configChakra: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme(
  { configChakra },
  {
    colors: {
      brand: {
        100: "#3D84f7",
      },
    },
    styles: {
      global: () => ({
        body: {
          bg: "whiteAlpha.200",
        },
      }),
    },
  }
);

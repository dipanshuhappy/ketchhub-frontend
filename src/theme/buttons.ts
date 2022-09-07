import { ComponentStyleConfig } from "@chakra-ui/theme";
import colors from "./colors";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "4em",
  },
  variants: {
    solid: {
      color: "white",
      bg: colors.brand[200],
      fontWeight: "700",
      _hover: {
        bg: colors.brand[100],
        color: "white",
      },
    },
    outline: {
      color: colors.brand[200],
      bg: "white",
      fontWeight: "700",
      _hover: {
        bg: colors.brand[300],
        color: "white",
      },
    },
  },
};

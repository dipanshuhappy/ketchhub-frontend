import { extendTheme } from "@chakra-ui/react";
import { Button } from "./buttons";
import colors from "./colors";

export default extendTheme({
  colors,
  components: {
    Button,
  },
});

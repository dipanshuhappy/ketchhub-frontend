import { extendTheme } from "@chakra-ui/react";
import { Button } from "./buttons";
import colors from "./colors";
import { Text } from "./text";
import textStyles from "./textStyles";
export default extendTheme({
  colors,
  components: {
    Button,
    Text,
  },
  textStyles,
});

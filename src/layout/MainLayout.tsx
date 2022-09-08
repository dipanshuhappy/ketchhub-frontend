import { Box, Center } from "@chakra-ui/react";
import React from "react";
type MainLayoutProp = { children: React.ReactNode };
function MainLayout({ children }: MainLayoutProp) {
  return (
    <Box position={"absolute"} minW={"100%"} minH="100vh">
      {children}
    </Box>
  );
}

export default MainLayout;

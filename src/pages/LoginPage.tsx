import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import TriFoodPic from "../components/TriFoodPic";
import MainLayout from "../layout/MainLayout";

function LoginPage() {
  return (
    <MainLayout>
      <Flex minHeight={"100vh"} width={"100%"}>
        <Center width={"50%"}>
          <TriFoodPic />
        </Center>

        <Center>
          <Stack spacing={8}>
            <Input width={"22em"} variant="filled" placeholder="Email" />
            <Input width={"22em"} variant="filled" placeholder="Password" />
          </Stack>
        </Center>
      </Flex>
    </MainLayout>
  );
}

export default LoginPage;

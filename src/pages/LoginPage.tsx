import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Link,
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
        <Center>
          <TriFoodPic />
        </Center>
        <Center>
          <Stack spacing={8}>
            <Text fontSize="6xl" textStyle={"h1"}>
              KITCHUB
            </Text>
            <Text
              fontSize="3xl"
              color={"brand.300"}
              fontWeight={"bold"}
              textStyle={"h2"}
            >
              Welcome Foodies
            </Text>
            <Text>Let's find Yummy Food!</Text>
            <Input width={"22em"} variant="filled" placeholder="Email" />
            <Input width={"22em"} variant="filled" placeholder="Password" />
            <Button>Login</Button>
            <Text fontWeight={"bold"} as="u">
              Forgot Password ?
            </Text>
            <Text>
              Hey! , you a new foodie ? Then <Link>Sign Up</Link> now
            </Text>
          </Stack>
        </Center>
      </Flex>
    </MainLayout>
  );
}

export default LoginPage;

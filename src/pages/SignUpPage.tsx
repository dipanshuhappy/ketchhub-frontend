import {
  Button,
  Center,
  Flex,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import TriFoodPic from "../components/TriFoodPic";
import MainLayout from "../layout/MainLayout";

function SignUpPage() {
  return (
    <MainLayout>
      <Flex minHeight={"100vh"} width={"100%"} justifyContent="space-around">
        <Center>
          <TriFoodPic />
        </Center>
        <Center>
          <Stack spacing={5}>
            <Text fontSize="6xl" textStyle={"h1"}>
              KITCHUB
            </Text>
            <Text
              fontSize="3xl"
              color={"brand.300"}
              fontWeight={"bold"}
              textStyle={"h2"}
            >
              Join The Foodies Now!
            </Text>
            <Text>Let’s create something yummy together...</Text>
            <Input width={"22em"} variant="filled" placeholder="Full Name" />
            <Input width={"22em"} variant="filled" placeholder="Email" />
            <Input width={"22em"} variant="filled" placeholder="Password" />
            <Input
              width={"22em"}
              variant="filled"
              placeholder="Retype Password"
            />

            <Button>Sign Up</Button>

            <Text>
              Hey! , you a already have a account ? Then
              <Link href="/login"> Login</Link>
            </Text>
          </Stack>
        </Center>
      </Flex>
    </MainLayout>
  );
}

export default SignUpPage;

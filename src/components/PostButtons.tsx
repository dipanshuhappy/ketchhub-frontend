import { Flex, Button, Text } from "@chakra-ui/react";
import React from "react";
import { MdSmartDisplay } from "react-icons/md";
import PostIcon from "./PostIcon";

function PostButtons() {
  return (
    <Flex
      justifyContent={{ base: "space-between", lg: "space-evenly" }}
      alignItems={"center"}
    >
      <Button
        width={"140px"}
        height={"100px"}
        borderRadius="8px"
        leftIcon={<PostIcon />}
        variant="outline"
      >
        <Text color={"grey"}>Post A Recipe</Text>
      </Button>
      <Button
        width={"140px"}
        height={"100px"}
        borderRadius="8px"
        leftIcon={<MdSmartDisplay color="green" />}
        bgColor={"brand.100"}
        variant="solid"
      >
        <Text color={"grey"}>Post A Recipe</Text>
      </Button>
    </Flex>
  );
}

export default PostButtons;

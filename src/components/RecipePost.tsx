// import { Box, Box } from "framer-motion";
import React from "react";
import { RecipePost } from "../types/recipe";
import { AiFillStar, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { TbArrowForwardUp } from "react-icons/tb";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
type RecipePostPropType = {
  post: RecipePost;
  width: string;
};
function RecipePostView({ post, width }: RecipePostPropType) {
  return (
    <Box
      width={width}
      borderWidth="1px"
      borderRadius="lg"
      borderColor={"brand.200"}
      padding="8"
    >
      <Flex flexDirection={"column"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <HStack>
              <Avatar size="md" name={post.user.name} />

              <Text whiteSpace={"nowrap"} fontWeight={"bold"} variant="dark">
                {post.user.name}
                <br />
                {post.time}
              </Text>
            </HStack>
          </Box>
          <AiOutlineStar size={"24px"} color="red" />
        </Flex>

        <Heading
          marginBottom={"2"}
          marginTop={"10"}
          textAlign={"start"}
          color={"brand.200"}
          as="u"
        >
          {post.recipe.title}
        </Heading>
        <Box marginBottom={"10"}>
          {post.recipe.steps.map((step, index) => (
            <Text marginTop={"2"} variant={"dark"} key={index}>
              {step}
            </Text>
          ))}
        </Box>
        <Flex>
          <HStack marginRight={"3"}>
            <AiOutlineHeart color="red" />
            <Text>{post.likes}</Text>
          </HStack>
          <HStack marginRight={"3"}>
            <BiComment color="red" />
            <Text>{post.comments}</Text>
          </HStack>
          <HStack marginRight={"3"}>
            <TbArrowForwardUp color="red" />
            <Text>{post.repost}</Text>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default RecipePostView;

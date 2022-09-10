import {
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Box,
  Stack,
  Divider,
  Text,
  Avatar,
  Button,
  Center,
  HStack,
  VStack,
  Grid,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";

import SearchBar from "../components/SearchBar";
import MainLayout from "../layout/MainLayout";
import colors from "../theme/colors";
import PostButtons from "../components/PostButtons";
import SideProfieView from "../components/SideProfieView";
import RecipePost from "../components/RecipePost";
import RecipePostView from "../components/RecipePost";

const post = {
  id: "",
  user: {
    name: "Samual Winston",
    email: "",
  },
  recipe: {
    title: "Egg Bhurji ",
    steps: [
      "1.Heat oil in a large pan and add cumin. Let it sizzle until cumin starts to change color.",
      "2.Add the onions and green chili and sauté them well till the onions become golden brown.",
      "3.Then add the tomatoes, spices and mix well. Cover the pan with a lid to soften the tomatoes.",
    ],
  },
  likes: 132,
  comments: 4,
  repost: 45,
  time: "12hr updated",
};
function DashboardPage() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <MainLayout>
      <SearchBar value="" onChange={() => {}} />
      <Box
        marginInline={"auto"}
        width={{ base: "100%", lg: "50%" }}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <PostButtons />
      </Box>
      <Grid gap={32} templateColumns={{ base: "1fr", lg: "0.3fr 1fr" }}>
        {!isMobile && (
          <GridItem justifySelf={"end"}>
            <SideProfieView />
          </GridItem>
        )}

        <GridItem marginTop={"16"} justifySelf={"start"}>
          <VStack spacing={16}>
            <RecipePostView post={post} />
            <RecipePostView post={post} />
            <RecipePostView post={post} />
            <RecipePostView post={post} />
            <RecipePostView post={post} />
            <RecipePostView post={post} />
            <RecipePostView post={post} />
            <RecipePostView post={post} />
            <RecipePostView post={post} />
            <RecipePostView post={post} />
            <RecipePostView post={post} />
            <RecipePostView post={post} />
            <RecipePostView post={post} />
            <RecipePostView post={post} />
            <RecipePostView post={post} />
            <RecipePostView post={post} />
          </VStack>
        </GridItem>
      </Grid>
    </MainLayout>
  );
}

export default DashboardPage;

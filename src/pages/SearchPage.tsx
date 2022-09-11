import {
  Badge,
  Button,
  Center,
  Grid,
  IconButton,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MainLayout from "../layout/MainLayout";
import { DeleteIcon } from "@chakra-ui/icons";
import RecipeCard from "../components/RecipeCard";
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
function SearchPage() {
  const [searchItem, setSearchItem] = useState("");
  const [searchItems, setSearchItems] = useState<string[]>([]);
  return (
    <MainLayout>
      <SearchBar value={searchItem} onChange={setSearchItem} />
      <Center marginTop={"1.5"}>
        <Button>Search Food</Button>
      </Center>
      <Wrap justify={"center"} align={"center "} margin={"4"}>
        {searchItems.map((item, index) => (
          <WrapItem>
            <Badge
              key={index}
              textAlign={"center"}
              variant={"solid"}
              fontSize="1.5em"
              padding={"8px"}
            >
              {item}
            </Badge>
          </WrapItem>
        ))}
        <WrapItem>
          <IconButton
            icon={<DeleteIcon />}
            color="red.600"
            variant="outline"
            aria-label="remove-language"
            onClick={() => {
              setSearchItems(
                searchItems.filter(
                  (_, index) => index != searchItems.length - 1
                )
              );
            }}
          />
        </WrapItem>
      </Wrap>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={8}
        p={8}
      >
        <RecipePostView width="50%" post={post} />
        <RecipePostView width="50%" post={post} />
        <RecipePostView width="50%" post={post} />
      </Grid>
    </MainLayout>
  );
}

export default SearchPage;

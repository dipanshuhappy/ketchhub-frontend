import {
  Badge,
  Button,
  Center,
  IconButton,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MainLayout from "../layout/MainLayout";
import { DeleteIcon } from "@chakra-ui/icons";
function SearchPage() {
  const [searchItem, setSearchItem] = useState("");
  const [searchItems, setSearchItems] = useState<string[]>([]);
  return (
    <MainLayout>
      <SearchBar value={searchItem} onChange={setSearchItem} />
      <Center marginTop={"1.5"}>
        <Button>Search Food</Button>
        <Button
          onClick={() => {
            setSearchItems([...searchItems, searchItem]);
            setSearchItem("");
          }}
        >
          Add to search Items
        </Button>
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
    </MainLayout>
  );
}

export default SearchPage;

import { Button, Center } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../components/SearchBar";
import MainLayout from "../layout/MainLayout";

function SearchPage() {
  return (
    <MainLayout>
      <SearchBar />
      <Center marginTop={"1.5"}>
        <Button marginInline={"auto"}>Search Food</Button>
      </Center>
    </MainLayout>
  );
}

export default SearchPage;

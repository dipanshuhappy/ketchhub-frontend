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
} from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";
import PostIcon from "../components/PostIcon";
import { MdSmartDisplay } from "react-icons/md";
import SearchBar from "../components/SearchBar";
import MainLayout from "../layout/MainLayout";
import colors from "../theme/colors";
import PostButtons from "../components/PostButtons";

function DashboardPage() {
  return (
    <MainLayout>
      <SearchBar />
      <Box
        marginInline={"auto"}
        width={"50%"}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <PostButtons />
      </Box>
    </MainLayout>
  );
}

export default DashboardPage;

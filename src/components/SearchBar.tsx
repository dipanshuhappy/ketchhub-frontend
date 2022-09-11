import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  Divider,
  Avatar,
  Text,
  Box,
} from "@chakra-ui/react";
import { ActionMeta, MultiValue, Select } from "chakra-react-select";
// import { Box } from "framer-motion";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { options } from "../constants";
import colors from "../theme/colors";
type SearchBarProps = {
  value: string;
  onChange: (
    newValue: MultiValue<{ label: string; value: string }>,
    actionMeta: ActionMeta<{ label: string; value: string }>
  ) => void;
};
function SearchBar({ value, onChange }: SearchBarProps) {
  const navigate = useNavigate();
  return (
    <Flex>
      <InputGroup
        marginTop={"1em"}
        onClick={() => {
          if (!window.location.href.includes("/search")) {
            navigate("/search");
          }
        }}
        variant="flushed"
      >
        <Select
          onChange={onChange}
          colorScheme="red"
          className="search-bar"
          options={options}
          isMulti
          size="lg"
        />
      </InputGroup>
      <Box>
        <Stack direction="row" alignItems={"center"}>
          <Divider orientation="vertical" height={"60px"} />
          <Text whiteSpace={"nowrap"} color={"black"}>
            Samual Winston
          </Text>
          <Avatar size="md" name="Samual Winston" />
        </Stack>
      </Box>
    </Flex>
  );
}

export default SearchBar;

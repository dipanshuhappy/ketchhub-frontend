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
// import { Box } from "framer-motion";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import colors from "../theme/colors";
type SearchBarProps = {
  value: string;
  onChange: Function;
};
function SearchBar({ value, onChange }: SearchBarProps) {
  const navigate = useNavigate();

  return (
    <Flex>
      <InputGroup
        marginTop={"1em"}
        onClick={() => navigate("/search")}
        variant="flushed"
      >
        <InputLeftElement
          pointerEvents="none"
          children={<BiSearch color={colors.brand[200]} />}
        />
        <Input
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
          }}
          placeholder="Search"
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

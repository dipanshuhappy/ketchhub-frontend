import {
  Stack,
  Center,
  Avatar,
  Divider,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";

import { AiFillStar } from "react-icons/ai";
import { MdSmartDisplay } from "react-icons/md";

function SideProfieView() {
  return (
    <Stack direction={"row"}>
      <Box border={"2px solid grey"} borderRadius="32px" width={"270px"}>
        <Box
          borderTopRadius="32px"
          height={"55px"}
          backgroundColor={"brand.200"}
        ></Box>
        <Center position={"relative"} bottom={"40px"}>
          <Avatar size="xl" name="Samual Winston" />
        </Center>
        <Text variant={"dark"} size="xl" textAlign="center">
          Samual Winston
        </Text>
        <Text textAlign={"center"}>about me.............</Text>
        <Divider />
        <Text margin={"3"} variant={"dark"}>
          Number of Posts 51
        </Text>
        <Text margin={"3"} variant={"dark"}>
          Number of Star Posts 25{" "}
        </Text>
        <Divider />
        <Flex margin={"3"}>
          <AiFillStar size={"32px"} color="red" />
          <Text variant={"dark"}>Open Star Post</Text>
        </Flex>
        <Divider />
        <Flex margin={"3"}>
          <MdSmartDisplay size={"32px"} color="green" />
          <Text variant={"dark"}>Open Your reels </Text>
        </Flex>
      </Box>
    </Stack>
  );
}

export default SideProfieView;

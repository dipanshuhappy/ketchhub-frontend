import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import {
  Badge,
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { options } from "../constants";
import { Select } from "chakra-react-select";
import { DeleteIcon } from "@chakra-ui/icons";
function CreateRecipePage() {
  const [procedure, setProcedure] = useState("");
  const [procedures, setprocedures] = useState<string[]>([]);
  return (
    <MainLayout>
      <VStack gap={16}>
        <Text size={"xl"}> Recipe Templeoite </Text>
        <Text fontWeight={"bold"}>
          Add your contribution to the KitcHub comunity
        </Text>
        <HStack>
          <Box borderColor={"red"}>+</Box>
          <VStack>
            <Input placeholder={"Recipe Name"} width={"100%"} />
            <Input placeholder={"Decripition"} width={"100%"} />
          </VStack>
        </HStack>
        <Select
          isMulti
          colorScheme="red"
          className="search-bar"
          options={options}
          size="lg"
        />
        <Input
          value={procedure}
          placeholder={"Procedure"}
          onChange={(event) => {
            setProcedure(event.target.value);
          }}
        />
        <Button
          onClick={() => {
            setprocedures([...procedures, procedure]);
            setProcedure("");
          }}
        >
          Add to Procedure Items
        </Button>
        <Wrap justify={"center"} align={"center "} margin={"4"}>
          {procedures.map(
            (
              item:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined,
              index: React.Key | null | undefined
            ) => (
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
            )
          )}
          <WrapItem>
            <IconButton
              icon={<DeleteIcon />}
              color="red.600"
              variant="outline"
              aria-label="remove-language"
              onClick={() => {
                setprocedures(
                  procedures.filter(
                    (_: any, index: number) => index != procedures.length - 1
                  )
                );
              }}
            />
          </WrapItem>
        </Wrap>
      </VStack>
    </MainLayout>
  );
}

export default CreateRecipePage;

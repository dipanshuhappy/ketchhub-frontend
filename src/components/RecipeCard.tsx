import React from 'react';
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
    Badge,
    Tag,
    TagLabel,
    TagCloseButton,
    Image,
    Heading
  } from "@chakra-ui/react";
import { generateKey } from 'crypto';


const RecipeCard = () => {
  return (
    <>
    <Box>
    <Flex gap={4}>
    <Image
    boxSize='150px'
    objectFit='cover'
    src='https://bit.ly/dan-abramov'
    alt='Dan Abramov'
  />
  <VStack
  spacing={4}
  align='stretch'
>
    <Heading as='h5' size='sm'>
    VEG.KING BURBER
  </Heading>
  <Text fontSize='sm' color="gray.600">
  Tihs Information about Black / #000000 ... In a RGB color space (made from three colored lights for red, green, and blue), hex #000000 is made of 0% red, 0% green and ...
  </Text>


  <HStack spacing={2}>
    <Tag
      size={'lg'}
      borderRadius='full'
      variant='solid'
      colorScheme='gray'
    >
      <TagLabel>Green</TagLabel>
      
    </Tag>
    <Tag
      size={'lg'}
      borderRadius='full'
      variant='solid'
      colorScheme='gray'
    >
      <TagLabel>Green</TagLabel>
    </Tag>
</HStack>

<HStack>
    <Text color="gray.600">Avg.Rating</Text>
</HStack>
  
</VStack>
    </Flex>
    </Box>
    
    </>
  )
}

export default RecipeCard
import { Center, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
function TriFoodPic() {
  return (
    <>
      <Grid
        gap={16}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
      >
        <GridItem justifySelf={"center"}>
          <Image src={food1} />
        </GridItem>
        <GridItem justifySelf={"center"}>
          <Image src={food2} />
        </GridItem>
        <GridItem justifySelf={"center"} colSpan={2}>
          <Image src={food3} />
        </GridItem>
      </Grid>
    </>
  );
}

export default TriFoodPic;

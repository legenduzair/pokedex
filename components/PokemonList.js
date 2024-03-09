import { Box, Flex, Grid } from "@radix-ui/themes";
import React from "react";

const PokemonList = () => {
  return (
    <Flex justify="center">
      <Grid columns="3" gap="3" className="mt-10 mb-10 w-[80%] flex-1 h-full">
        <Box width="100%" height="100%">Bulbasaur</Box>
        <Box width="100%" height="100%">Ivysaur</Box>
        <Box width="100%" height="100%">Venusaur</Box>
      </Grid>
    </Flex>
  );
}

export default PokemonList;

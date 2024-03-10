"use client";
import { Box, Card, Flex, Grid, Inset } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PokemonInfo from "./PokemonInfo";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);

  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await axios.get(url);

        setPokemon(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemon();
  }, [url]);

  return (
    <Flex>
      <Grid
        columns={{
          initial: "1",
          xs: "2",
          md: "3",
        }}
        gap="3"
        className="my-32 mx-5 sm:mx-16 md:mx-32 w-[80%] flex-1 h-full"
      >
        {pokemon.map((poke, index) => (
          <Link href={`/pokemon/${index + 1}`}>
            <Card className="w-full" size="3">
              <Inset clip="padding-box" side="top" pb="current">
                <PokemonInfo pokemonNumber={index + 1} />
              </Inset>
              <Box className="flex justify-center" width="100%" height="100%">
                <span className="pr-2">#{index + 1}</span>
                {poke.name}
              </Box>
            </Card>
          </Link>
        ))}
      </Grid>
    </Flex>
  );
};

export default PokemonList;

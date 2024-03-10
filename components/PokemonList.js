"use client"
import { Box, Flex, Grid } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonInfo from "./PokemonInfo";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await axios.get(url);

        setPokemon(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getPokemon();
  }, [url])
  
  return (
    <Flex justify="center">
      <Grid columns="3" gap="3" className="mt-10 mb-10 w-[80%] flex-1 h-full">
        {pokemon.map((poke, index) => (
          <div key={index} className="flex flex-col">
            <Box width="100%" height="100%"><span className="pr-2">#{index + 1}</span>{poke.name}</Box>
            <PokemonInfo pokemonNumber={index + 1} />
          </div>
        ))}
      </Grid>
    </Flex>
  );
}

export default PokemonList;

"use client"
import { Box, Card, Flex, Grid, Inset, Text } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PokemonInfo from "./PokemonInfo";

const PokemonList = ({ searchTerm }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [searchedPokemonData, setSearchedPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm) {
          const responseSearch = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
          setSearchedPokemonData(responseSearch.data);
          setPokemonData(null);
        } else {
          const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
          setPokemonData(response.data.results);
          setSearchedPokemonData(null);
        }
      } catch (error) {
        alert('No pokemon found. Please try again.')
      }
    };

    fetchData();
  }, [searchTerm]);

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
        {pokemonData &&
          pokemonData.map((poke, index) => (
            <Link key={index} href={`/pokemon/${poke.name}`}>
              <Card className="w-full" size="3">
                <Inset clip="padding-box" side="top" pb="current">
                  <PokemonInfo pokemonNumber={index + 1} />
                </Inset>
                <Box className="flex justify-center" width="100%" height="100%">
                  <span className="pr-2">#{index + 1}</span>
                  <Text className="capitalize">{poke.name}</Text>
                </Box>
              </Card>
            </Link>
          ))}
        {searchedPokemonData && (
          <Link href={`/pokemon/${searchedPokemonData.name}`}>
            <Card className="w-full" size="3">
              <Inset clip="padding-box" side="top" pb="current">
                <PokemonInfo pokemonNumber={searchedPokemonData.id} />
              </Inset>
              <Box className="flex justify-center" width="100%" height="100%">
                <span className="pr-2">#{searchedPokemonData.id}</span>
                <Text className="capitalize">{searchedPokemonData.name}</Text>
              </Box>
            </Card>
          </Link>
        )}
      </Grid>
    </Flex>
  );
};

export default PokemonList;

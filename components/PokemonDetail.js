"use client";
import { Box, Card, Flex, Tabs, Text } from "@radix-ui/themes";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "../app/globals.css";
import Description from "./Description";

const PokemonDetail = ({ params }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const pokemonId = params.id;

  {
    /* Fetch pokemon details depending on index */
  }

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );
        setPokemonDetails(response.data);
      } catch (error) {
        console.log("Error fetching Pokemon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [pokemonId]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  {
    /* Util Functions */
  }

  const joinTypesWithSlash = (types) => {
    return types.map((type) => type.type.name).join(" / ");
  };

  const removeHyphen = (moves) => {
    return moves.map((move) => move.move.name.replace("-", " "));
  };

  const formatMoveList = (moves) => {
    return removeHyphen(moves).join(", ");
  };

  return (
    <Flex justify="center">
      <Card
        size="3"
        className="my-32 mx-5 w-[90%] md:w-[80%] lg:w-[70%] h-full"
      >
        <Link href="/">
          <small>
            <span className="pr-2">&larr;</span> Back to the 151 Pokemon
          </small>
        </Link>
        <Box
          className="flex flex-col gap-2 items-center mt-10 sm:items-start sm:flex-row sm:gap-5 md:gap-10"
          width="100%"
          height="100%"
        >
          <Image
            src={pokemonDetails.sprites.other["official-artwork"].front_default}
            alt={pokemonDetails.name}
            width={300}
            height={300}
          />
          <Box className="pt-10 capitalize">
            <p className="pb-3">{pokemonDetails.name}</p>
            <p className="pb-3">{joinTypesWithSlash(pokemonDetails.types)}</p>
            <Description pokemonDetails={pokemonDetails} />
            <div>
              <div>
                <p>Height: {pokemonDetails.height / 10}m</p>
                <p>Weight: {pokemonDetails.weight / 10}kg</p>
              </div>
            </div>
          </Box>
        </Box>
        <Box>
          <div className="pt-10 capitalize">
            <Tabs.Root defaultValue="abilities">
              <Tabs.List>
                <Tabs.Trigger value="abilities">Abilities</Tabs.Trigger>
                <Tabs.Trigger value="stats">Stats</Tabs.Trigger>
                <Tabs.Trigger value="move-list">Move List</Tabs.Trigger>
              </Tabs.List>
              <Box px="4" pt="3" pb="2">
                <Tabs.Content value="abilities">
                  <div>
                    <ul>
                      {pokemonDetails.abilities.map((ability, index) => (
                        <li className="pb-1" key={index}>{ability.ability.name}</li>
                      ))}
                    </ul>
                  </div>
                </Tabs.Content>
                <Tabs.Content value="stats">
                  {pokemonDetails.stats.map((stat, index) => (
                    <Text key={index} className="flex pb-1">{stat.stat.name}: {stat.base_stat}</Text>
                  ))}
                </Tabs.Content>
                <Tabs.Content value="move-list">
                  <div className="move-list">
                    {formatMoveList(pokemonDetails.moves)
                      .split(", ")
                      .map((move, index) => (
                        <span key={index} className="move">
                          {move}
                        </span>
                      ))}
                  </div>
                </Tabs.Content>
              </Box>
            </Tabs.Root>
          </div>
        </Box>
      </Card>
    </Flex>
  );
};

export default PokemonDetail;

"use client"
import { Flex } from '@radix-ui/themes';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const PokemonInfo = ({ pokemonNumber }) => {
  const [pokemonInfo, setPokemonInfo] = useState({});

  {
    /* Fetch pokemon image depending on index */
  }

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`;
    const getPokemonInfo = async () => {
      try {
        const response = await axios.get(url);
        setPokemonInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemonInfo();
  }, [pokemonNumber]);

  return (
    <>
      <Flex justify="center">
        {pokemonInfo.sprites && (
          <Image
            src={pokemonInfo.sprites.front_default}
            width={200}
            height={200}
            alt={`Front artwork of ${pokemonInfo.name}`}
          />
        )}
      </Flex>
    </>
  )
};

export default PokemonInfo;

"use client"
import { Flex } from '@radix-ui/themes';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const PokemonImage = ({ pokemonName }) => {
  const [pokemonImage, setPokemonImage] = useState({});

  {
    /* Fetch pokemon image depending on index */
  }

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
    const getPokemonImage = async () => {
      try {
        const response = await axios.get(url);
        setPokemonImage(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemonImage();
  }, [pokemonName]);

  return (
    <>
      <Flex justify="center">
        {pokemonImage.sprites && (
          <Image
            src={pokemonImage.sprites.front_default}
            width={200}
            height={200}
            alt={`Front artwork of ${pokemonImage.name}`}
          />
        )}
      </Flex>
    </>
  )
};

export default PokemonImage;

"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const PokemonInfo = ({ pokemonNumber }) => {
  const [pokemonInfo, setPokemonInfo] = useState({});

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
      <div className='flex justify-center'>
        {pokemonInfo.sprites && (
          <Image
            src={pokemonInfo.sprites.other['official-artwork'].front_default}
            width={200}
            height={200}
            alt={`Front artwork of ${pokemonInfo.name}`}
          />
        )}
      </div>
    </>
  )
};

export default PokemonInfo;

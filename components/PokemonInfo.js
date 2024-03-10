"use client"
import axios from 'axios';
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
      <div>Abilities:</div>
      <ul>
        {pokemonInfo.abilities &&
          pokemonInfo.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
      </ul>
    </>
  );
};

export default PokemonInfo;

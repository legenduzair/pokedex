"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PokemonDetail = ({ params }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const pokemonId = params.id;

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        setPokemonDetails(response.data);
      } catch (error) {
        console.log('Error fetching Pokemon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [pokemonId]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemonDetails.name}</h1>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      <p>Height: {pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails.weight}</p>
    </div>
  )
}

export default PokemonDetail
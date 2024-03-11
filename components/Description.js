"use client"
import { Box, Text } from '@radix-ui/themes';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Description = ({ pokemonDetails }) => {
  const [pokemonDescription, setPokemonDescription] = useState(null);

  {
    /* Fetch pokemon description depending on url */
  }

  useEffect(() => {
    const fetchPokemonDescription = async () => {
      try {
        const response = await axios.get(
          pokemonDetails.species.url
        );
        setPokemonDescription(response.data);
      } catch (error) {
        console.error("Error fetching Pokemon description:", error);
      }
    };

    fetchPokemonDescription();
  }, [pokemonDetails.species.url]);

  if(!pokemonDescription) return <div>No description on the Pokemon can be found.</div>;
  
  return (
    <Box className='pb-6'>
      {pokemonDescription && (
        <Text>{pokemonDescription.flavor_text_entries[6].flavor_text}</Text>
      )}
    </Box>
  )
}

export default Description
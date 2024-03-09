"use client"
import { Box, TextField } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

const SearchBar = () => {
  return (
    <>
      <TextField.Root className='sm:w-96'>
        <TextField.Input placeholder="Search for a Pokemon" />
      </TextField.Root>
      <Box>
        <Image src="/assets/images/pokeball.png"
        width={50}
        height={50} />
      </Box>
    </>
  )
}

export default SearchBar
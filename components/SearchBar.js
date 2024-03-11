"use client"
import { Box, Button, Flex, TextField } from '@radix-ui/themes';
import Image from 'next/image';
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchButtonClick = () => {
    onSearch(searchInput);
  };

  return (
    <>
      <Flex align="center">
        <TextField.Root className="sm:w-96">
          <TextField.Input
            type="text"
            placeholder="Search for a Pokemon"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </TextField.Root>
        <Box className='ml-4'>
          <Button onClick={handleSearchButtonClick}>
            Search!
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default SearchBar;

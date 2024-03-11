"use client"
import { Box, Button, Flex, TextField } from '@radix-ui/themes';
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  {/* Functions to handle input/search */}
  
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchButtonClick = () => {
    if (searchInput.trim() !== '') {
      onSearch(searchInput.trim());
    } else {
      alert('Please enter a valid search term.');
    }
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

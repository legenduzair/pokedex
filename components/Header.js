import React from 'react'
import { Flex } from '@radix-ui/themes';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <Flex align="center" justify="center" className='gap-10 mt-6'>
      <SearchBar />
    </Flex>
  )
}

export default Header
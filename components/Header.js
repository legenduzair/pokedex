import React from 'react'
import { Flex } from '@radix-ui/themes';
import SearchBar from './SearchBar';
import Image from 'next/image';

const Header = () => {
  return (
    <Flex align="center" justify="center" className='gap-10 mt-6'>
      <Image src="/assets/images/PokéDex.png"
      width={150}
      height={150} />
      <SearchBar />
    </Flex>
  )
}

export default Header
import PokemonList from "@/components/PokemonList";
import SearchBar from "@/components/SearchBar";
import { Flex } from '@radix-ui/themes';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Flex align="center" justify="center" className="gap-10 mt-6">
        <Image
          src="/assets/images/PokéDex.png"
          width={150}
          height={150}
          priority={true}
          className="hidden sm:block"
          alt="Pokedex Logo"
        />
        <SearchBar />
      </Flex>
      <PokemonList />
      <Flex justify="center" className='mb-16'>2024 Pokedex. All Rights reserved.</Flex>
    </>
  );
}

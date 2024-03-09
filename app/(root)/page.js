import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PokemonList from "@/components/PokemonList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <PokemonList />
      <Footer />
    </>
  );
}

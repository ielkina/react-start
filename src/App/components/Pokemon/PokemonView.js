import { useState } from "react";
import { ToastContainer } from "react-toastify";

import PokemonForm from "./PokemonForm";
import PokemonInfo from "./PokemonInfo";

export default function PokemonView() {
  // state = {
  //   pokemonName: "",
  // };
  const [pokemonName, setPokemonName] = useState("");

  // const handleFormSubmit = (pokemonName) => {
  //   setPokemonName(pokemonName);
  // };

  return (
    <>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </>
  );
}

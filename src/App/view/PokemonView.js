// import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
// import PokemonForm from '../components/Pokemon/Form.js';
// import PokemonInfo from '../components/Pokemon/Info.js';

// export default class PokemonView extends Component {
//   state = {
//     pokemonName: '',
//   };

//   handleFormSubmit = pokemonName => {
//     this.setState({ pokemonName });
//   };

//   render() {
//     return (
//       <>
//         <PokemonForm onSubmit={this.handleFormSubmit} />
//         <PokemonInfo pokemonName={this.state.pokemonName} />
//         <ToastContainer autoClose={3000} />
//       </>
//     );
//   }
// }


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

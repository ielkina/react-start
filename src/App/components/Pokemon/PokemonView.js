import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

export default class PokemonView extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

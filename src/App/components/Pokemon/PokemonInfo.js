import { Component } from "react";
import PokemonDataView from "./PokemonDataView.js";
import PokemonErrorView from "./PokemonErrorView.js";
import PokemonPendingView from "./PokemonPendingView.js";
// import pokemonAPI from '../../../services/pokemon-api';
import pokemonAPI from "App/services/pokemon-api.js";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });

      // setTimeout(() => {
      pokemonAPI
        .fetchPokemon(nextName)
        .then((pokemon) => this.setState({ pokemon, status: Status.RESOLVED }))
        .catch((error) => this.setState({ error, status: Status.REJECTED }));
      // }, 1000);
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === "idle") {
      return <div>Введите имя покемона.</div>;
    }

    if (status === "pending") {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === "rejected") {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === "resolved") {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}

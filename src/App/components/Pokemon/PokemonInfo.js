import { useState, useEffect } from "react";
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

export default function PokemonInfo({ pokemonName }) {
  // state = {
  //   pokemon: null,
  //   error: null,
  //   status: Status.IDLE,
  // };

  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  //  componentDidUpdate(prevProps, prevState) {
  //     const prevName = prevProps.pokemonName;
  //     const nextName = this.props.pokemonName;

  //     if (prevName !== nextName) {
  //       this.setState({ status: Status.PENDING });

  //       // setTimeout(() => {
  //       pokemonAPI
  //         .fetchPokemon(nextName)
  //         .then((pokemon) => this.setState({ pokemon, status: Status.RESOLVED }))
  //         .catch((error) => this.setState({ error, status: Status.REJECTED }));
  //       // }, 1000);
  //     }
  //   }

  useEffect(() => {
    if (!pokemonName) {
      // Если имя покемона пустое, ничего не делаем
      setPokemon(null); // Сбрасываем состояние покемона
      setError(null); // Сбрасываем состояние ошибки
      setStatus(Status.IDLE); // Сбрасываем состояние статуса
      // Первый рендер, pokemonName это пустая строка, не делаем fetch
      return;
    }
    setStatus(Status.IDLE);
    pokemonAPI
      .fetchPokemon(pokemonName)
      .then((pokemon) => {
        // Порядок важен!!!! Сначала кладем данные, потом статус. иначе будет ошибка
        //зарендерится PokemonDataView с пустым значением и потом обновится
        //вызывается PokemonDataView с пустым значением станица браузера перезагрузится с пустым значением ошибкой
        setPokemon(pokemon);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [pokemonName]);

  // const { pokemon, error, status } = this.state;
  // const { pokemonName } = this.props;

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

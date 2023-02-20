import React, { useState, useEffect } from "react";
import ListPokemon from "./models/listPokemon";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(ListPokemon);
  }, []);

  return (
    <div>
      <h1>pokedex</h1>
      <p>Vous avez {pokemons.length} POKEMON dans votre sac</p>
    </div>
  );
}

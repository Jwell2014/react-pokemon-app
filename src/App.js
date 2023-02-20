import React, { useState, useEffect } from "react";
import ListPokemon from "./models/listPokemon";
import AllPokemon from "./pages/AllPokemon";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(ListPokemon);
  }, []);

  return (
    <>
      <AllPokemon pokemons={pokemons} />
    </>
  );
}

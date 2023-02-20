import CardPokemon from "../component/CardPokemon";
import React from "react";

export default function AllPokemon(props) {
  const { pokemons, setPokemons } = props;

  function handItem(id) {
    console.log(id);
  }

  return (
    <div>
      <div>
        <h1 className="center">Pokédex</h1>
        <div className="container">
          <div className="row" onClick={(id) => handItem(id)}>
            {pokemons.map((pokemon) => (
              <CardPokemon
                pokemon={pokemon}
                key={pokemon.id}
                // envois a l'enfant du style border-color avec une coleur par defaut
                borderColor="#f5f5f5"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

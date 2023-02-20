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
      <div>
        <h1 className="center">Pokédex</h1>
        <div className="container">
          <div className="row">
            {pokemons.map(({ id, name, picture, created }) => (
              <div className="col s6 m4" key={id}>
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={picture} alt={name} />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>{name}</p>
                      <p>
                        <small>{created.toString()}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

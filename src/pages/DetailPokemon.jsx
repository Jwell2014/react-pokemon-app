import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import listPokemon from "../models/listPokemon";
import { useParams } from "react-router-dom";

export default function DetailPokemon() {
  const { id } = useParams(); // Récupère l'ID du Pokémon depuis l'URL
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const foundPokemon = listPokemon.find((p) => p.id.toString() === id);
    setPokemon(foundPokemon);
  }, [id]); // Utilise l'ID comme dépendance

  if (!pokemon) {
    return <h2>Pokémon introuvable !</h2>;
  }
 // Permet un affichage de la date JJ/MM/AAAA
 const formatDate = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const formatType = (type) => {
  let color;

  switch (type) {
    case "Feu":
      color = "red lighten-1";
      break;
    case "Eau":
      color = "blue lighten-1";

      break;
    case "Plante":
      color = "green lighten-1";
      break;
    case "Insecte":
      color = "brown lighten-1";
      break;
    case "Normal":
      color = "grey lighten-3";
      break;
    case "Vol":
      color = "blue lighten-3";
      break;
    case "Poison":
      color = "deep-purple accent-1";
      break;
    case "Fée":
      color = "pink lighten-4";
      break;
    case "Psy":
      color = "deep-purple darken-2";
      break;
    case "Electrik":
      color = "lime accent-1";
      break;
    case "Combat":
      color = "deep-orange";
      break;
    default:
      color = "grey";
      break;
  }

  return `chip ${color}`;
};
  return (
    <div>
      {pokemon ? (
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <h2 className="header center">{pokemon.name}</h2>
            <div className="card hoverable">
              <div className="card-image">
                <img
                  src={pokemon.picture}
                  alt={pokemon.name}
                  style={{ width: "250px", margin: "0 auto" }}
                />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <table className="bordered striped">
                    <tbody>
                      <tr>
                        <td>Nom</td>
                        <td>
                          <strong>{pokemon.name}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Points de vie</td>
                        <td>
                          <strong>{pokemon.hp}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Dégâts</td>
                        <td>
                          <strong>{pokemon.cp}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Types</td>
                        <td>
                          {pokemon.types.map((type) => (
                            <span key={type} className={formatType(type)}>
                              {type}
                            </span>
                          ))}
                        </td>
                      </tr>
                      <tr>
                        <td>Date de création</td>
                        <td>{formatDate(pokemon.created)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action">
                  <Link to="/list">Retour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="center">Aucun pokémon à afficher !</h4>
      )}
    </div>
  );
}

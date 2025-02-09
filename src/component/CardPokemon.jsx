import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CardPokemon(props) {
  const { pokemon } = props;
  // Recuperation du style du parent sur le border-color par les props
  const borderColor = props;
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  function showBorder() {
    setColor("green");
  }

  function hideBorder() {
    // Recuperation de la valeur du props de la border color
    setColor(borderColor.borderColor);
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

  function handItem() {
    console.log("id" + pokemon.id);
    navigate(`/list/${pokemon.id}`);
  }

  return (
    <>
      <div
        className="col s6 m4"
        onMouseEnter={showBorder}
        onMouseLeave={hideBorder}
        onClick={handItem}
      >
        {/* Attribution du style a la div de la card */}
        <div className="card horizontal" style={{ borderColor: color }}>
          <div className="card-image">
            <img src={pokemon.picture} alt={pokemon.name} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>Nom{pokemon.name}</p>
              <p className="date">
                <small>{formatDate(pokemon.created)}</small>
              </p>
              {pokemon.types.map((type) => (
                <span key={type} className={formatType(type)}>
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

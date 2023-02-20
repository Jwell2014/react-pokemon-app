import { useState } from "react";

export default function CardPokemon(props) {
  const { pokemon } = props;
  // Recuperation du style du parent sur le border-color par les props
  const borderColor = props;
  const [color, setColor] = useState("");

  function showBorder() {
    setColor("green");
    console.log("ok");
  }

  function hideBorder() {
    // Recuperation de la valeur du props de la border color
    setColor(borderColor.borderColor);
    console.log("top");
  }

  return (
    <>
      <div
        className="col s6 m4"
        onMouseEnter={showBorder}
        onMouseLeave={hideBorder}
      >
        {/* Attribution du style a la div de la card */}
        <div className="card horizontal" style={{ borderColor: color }}>
          <div className="card-image">
            <img src={pokemon.picture} alt={pokemon.name} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>Nom{pokemon.name}</p>
              <p>
                <small>{pokemon.created.toString()}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

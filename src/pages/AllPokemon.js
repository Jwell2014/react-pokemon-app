import CardPokemon from "../component/CardPokemon";
export default function AllPokemon(props) {
  const { pokemons } = props;

  return (
    <div>
      <div>
        <h1 className="center">Pokédex</h1>
        <div className="container">
          <div className="row">
            {pokemons.map((pokemon) => (
              <CardPokemon
                pokemon={pokemon}
                key={pokemon.id}
                borderColor="#f5f5f5"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

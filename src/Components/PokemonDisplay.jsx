export default function PokemonDisplay({ pokemon }) {

    const loaded = () => {
        return (
            <>
                <h1>
                    {pokemon.species.name.charAt(0).toUpperCase() + pokemon.species.name.slice(1)}
                </h1>

                <div className="spriteContainer">
                    <div className="spriteGroup">
                        <h2>Normal</h2>
                        <img src={pokemon.sprites.front_default} alt={"pokemon"} />
                        <img src={pokemon.sprites.back_default} alt={"bpokemon"} />
                    </div>
                    <div className="spriteGroup">
                        <h2>Shiny</h2>
                        <img src={pokemon.sprites.front_shiny} alt={"shiny"} />
                        <img src={pokemon.sprites.back_shiny} alt={"bshiny"} />
                    </div>
                </div>

                <div>
                    {pokemon.types.map((type, index) => (
                        <div key={index} className={`typeBadge ${type.type.name}`}>
                            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                        </div>
                    ))}
                </div>
                
                <h3>Moves</h3>
                <div className="movesContainer">
                    {pokemon.moves.map((move, index) => {
                        return (
                            <div key={index} className="move">
                                {move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1)}
                            </div>
                        )
                    })}
                </div>
            </>

        );
    };

    const loading = () => {
        return <h1>No Pokemon To Show</h1>
    };

    return pokemon ? loaded() : loading();
}
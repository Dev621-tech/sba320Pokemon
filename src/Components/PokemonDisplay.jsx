export default function PokemonDisplay({ pokemon }){
    
    const loaded = () => {
        return (
            <>
            <h1>{pokemon.species.name.charAt(0).toUpperCase() + pokemon.species.name.slice(1)}</h1> 
            <img src={pokemon.sprites.front_default} alt={pokemon} />
            </>
        );
    };

    const loading = () => {
        return <h1>No Pokemon To Show</h1>
    };

    return pokemon ? loaded() : loading();
}
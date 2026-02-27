import Form from './Components/Form.jsx';
import PokemonDisplay from './Components/PokemonDisplay.jsx';
import { useState, useEffect } from "react";
import './App.css'



function App() {

  const [ pokemon, setPokemon ] = useState(null);

  const getPokemon = async(searchTerm) => {
    try {

      const URL = "https://pokeapi.co/api/v2/pokemon/pikachu"

      const response = await fetch(URL)

      const data = await response.json();

      console.log(data);
      setPokemon(data);
      
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <>
      <Form />
      <PokemonDisplay />
    </>
  )
}

export default App

import Form from './Components/Form.jsx';
import PokemonDisplay from './Components/PokemonDisplay.jsx';
import { useState, useEffect } from "react";
import './App.css'



function App() {

  const [ pokemon, setPokemon ] = useState(null);

  const getPokemon = async(searchTerm) => {
    try {
      
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <>
      <Form />
      <PokemonDisplay />
    </>
  )
}

export default App

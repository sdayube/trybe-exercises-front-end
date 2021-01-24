import './App.css';
import pokemons from './exercises/11. React Intro/11.2. React Components/data';
import React from 'react';
import Pokedex from './exercises/11. React Intro/11.2. React Components/Pokedex';

function App() {
  return (
    <Pokedex pokemons={pokemons}/>
  );
}

export default App;

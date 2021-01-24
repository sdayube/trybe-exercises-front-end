import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    return (
      <main className="mdc-poke-main">
        {this.props.pokemons
          .sort((a, b) => a.id - b.id)
          .map(pokemon => <Pokemon entry={pokemon} key={pokemon.id} />)}
      </main>
    );
  }
}

export default Pokedex;

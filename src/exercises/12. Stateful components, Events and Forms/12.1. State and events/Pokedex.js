import React from 'react';
import Pokemon from './Pokemon';
import Buttons from './Buttons'
import './Pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    const pokemons = this.props.pokemons.sort((a, b) => a.id - b.id);
    this.state = {
      pokemons,
      originalPokemons: pokemons,
      pokemonIndex: 0,
      pokemon: pokemons[0],
    }
    this.handleNext = this.handleNext.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleNext() {
    const { pokemons, pokemonIndex } = this.state;
    if (pokemonIndex + 1 >= pokemons.length) {
      this.setState({
        pokemonIndex: 0,
        pokemon: pokemons[0],
      })
    } else {
      this.setState({
        pokemonIndex: (pokemonIndex + 1),
        pokemon: pokemons[pokemonIndex + 1],
      })
    }
  }

  handleFilter(event) {
    const element = event.target.innerText;
    const { originalPokemons } = this.state

    const filteredPokemons = (element === 'All') ? originalPokemons : originalPokemons.filter(pokemon => pokemon.type === element);

    this.setState({
      pokemons: filteredPokemons,
      pokemonIndex: 0,
      pokemon: filteredPokemons[0],
    })
  }

  render() {
    const allTypes = this.props.pokemons.reduce(((types, pokemon) =>
      types.includes(pokemon.type) ? types : [...types, pokemon.type])
    , [])

    return (
      <>
        <header><h1>Pokedex</h1></header>
        <main className="mdc-poke-main">
          <Pokemon entry={this.state.pokemon} />
        </main>
        <button onClick={this.handleNext} className="mdc-poke-next" disabled={this.state.pokemons.length <= 1}>
            Próximo
        </button>
        <Buttons>
          {allTypes.map(type => 
            <button onClick={this.handleFilter} className="mdc-poke-next">
              {type}
            </button>
          )}
          <button onClick={this.handleFilter} className="mdc-poke-next">
            All
          </button>
        </Buttons>
      </>
    );
  }
}

export default Pokedex;

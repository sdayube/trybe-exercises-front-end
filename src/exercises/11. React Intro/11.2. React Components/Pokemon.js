import React from 'react';
import './Pokedex.css';

class Pokemon extends React.Component {
  render() {
    return (
      <article className="mdc-poke-card" key={this.props.key}>
        <h3 className="mdc-poke-name"># {this.props.entry.id}: {this.props.entry.name}</h3>
        <div className="mdc-poke-content">
          <div>
            <h4 className="mdc-poke-type">Type: {this.props.entry.type}</h4>
            <h4 className="mdc-poke-weight">Avg. W.: {this.props.entry.averageWeight.value} {this.props.entry.averageWeight.measurementUnit}</h4>
          </div>
          <img className="mdc-poke-img" src={this.props.entry.image} alt={this.props.entry.name + ' Image'} />
        </div>
      </article>
    );
  }
}

export default Pokemon;

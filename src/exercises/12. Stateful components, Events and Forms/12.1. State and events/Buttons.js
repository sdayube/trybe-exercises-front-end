import React from 'react';

class Buttons extends React.Component {
  render() {
    return (
      <div className="mdc-poke-filters">
        {this.props.children}
      </div>
    );
  }
}

export default Buttons;

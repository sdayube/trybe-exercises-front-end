import React from 'react';
import PropTypes from 'prop-types';

function CityInput(props) {
  const { handleChange } = props;
  return (
    <>
      <label htmlFor="city">
        Cidade
        <input type="text" id="city" name="city" maxLength="28" required onChange={ handleChange } />
      </label>
      <br />
    </>
  );
}

CityInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CityInput;

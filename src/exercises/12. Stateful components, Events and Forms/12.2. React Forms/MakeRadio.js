import React from 'react';
import PropTypes from 'prop-types';

function MakeRadio(props) {
  const { handleChange, options, radioGroup } = props;
  return (
    <>
      {options.map((button) => (
        <label htmlFor={ button.name } key={ button.name }>
          <input type="radio" id={ button.name } value={ button.name } name={ radioGroup } onChange={ handleChange } required />
          { button.labelName }
        </label>
      ))}
      <br />
    </>
  );
}

MakeRadio.propTypes = {
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  radioGroup: PropTypes.string.isRequired,
};

export default MakeRadio;

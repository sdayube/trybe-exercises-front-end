import React from 'react';
import PropTypes from 'prop-types';

function MakeTextArea(props) {
  const { handleChange, name, maxLength, labelName } = props;
  return (
    <>
      <label htmlFor={ name }>
        { labelName }
        <textarea
          id={ name }
          name={ name }
          maxLength={ maxLength }
          onChange={ handleChange }
          required
        />
      </label>
      <br />
    </>
  );
}

MakeTextArea.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  labelName: PropTypes.string.isRequired,
};

export default MakeTextArea;

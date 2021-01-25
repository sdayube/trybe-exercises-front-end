import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line max-lines-per-function
function MakeInput(props) {
  const {
    handleChange,
    handleBlur,
    name,
    type,
    maxLength,
    labelName,
    handleMouseover,
  } = props;

  return (
    <>
      <label htmlFor={ name }>
        { labelName }
        <input
          type={ type }
          id={ name }
          name={ name }
          maxLength={ maxLength }
          onChange={ handleChange }
          onBlur={ handleBlur }
          onMouseOver={ handleMouseover }
          onFocus={ handleMouseover }
          required
        />
      </label>
      <br />
    </>
  );
}

MakeInput.defaultProps = {
  type: 'text',
  handleBlur: (() => null),
  handleMouseover: (() => null),
};

MakeInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  handleMouseover: PropTypes.func,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  labelName: PropTypes.string.isRequired,
};

export default MakeInput;

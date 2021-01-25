import React from 'react';
import PropTypes from 'prop-types';

function MakeSelect(props) {
  const { handleChange, name, labelName, options } = props;
  return (
    <>
      <label htmlFor={ name }>
        { labelName }
        <select
          id={ name }
          name={ name }
          onChange={ handleChange }
        >
          {options.map((sel) => <option value={ sel } key={ sel }>{sel}</option>)}
        </select>
      </label>
      <br />
    </>
  );
}

MakeSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MakeSelect;

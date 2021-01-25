import React from 'react';
import PropTypes from 'prop-types';
import MakeTextArea from './MakeTextArea';
import MakeInput from './MakeInput';

function JobForm(props) {
  const { handleChange, handleMouseover } = props;
  return (
    <fieldset>
      <MakeTextArea name="resume" maxLength={ 1000 } labelName="Resumo do currículo" handleChange={ handleChange } />
      <MakeInput name="job" maxLength={ 40 } labelName="Cargo" handleChange={ handleChange } handleMouseover={ handleMouseover } />
      <MakeTextArea name="jobDescription" maxLength={ 500 } labelName="Descrição do cargo" handleChange={ handleChange } handleMouseover={ handleMouseover } />
    </fieldset>
  );
}

JobForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleMouseover: PropTypes.func.isRequired,
};

export default JobForm;

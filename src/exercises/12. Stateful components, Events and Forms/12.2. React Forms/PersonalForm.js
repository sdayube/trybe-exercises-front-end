import React from 'react';
import PropTypes from 'prop-types';
import MakeInput from './MakeInput';
import MakeSelect from './MakeSelect';
import MakeRadio from './MakeRadio';
import states from './states';
import homeTypes from './homeTypes';

function PersonalForm(props) {
  const { handleChange, handleBlur } = props;
  return (
    <fieldset>
      <MakeInput name="name" maxLength={ 40 } labelName="Nome" handleChange={ handleChange } />
      <MakeInput name="e-mail" maxLength={ 50 } labelName="E-mail" handleChange={ handleChange } type="email" />
      <MakeInput name="cpf" maxLength={ 11 } labelName="CPF" handleChange={ handleChange } />
      <MakeInput name="address" maxLength={ 200 } labelName="Endereço" handleChange={ handleChange } />
      <MakeRadio options={ homeTypes } radioGroup="residenceType" handleChange={ handleChange } />
      <MakeInput name="city" maxLength={ 28 } labelName="Cidade" handleChange={ handleChange } handleBlur={ handleBlur } />
      <MakeSelect options={ states } name="state" labelName="Estado" handleChange={ handleChange } />
    </fieldset>
  );
}

PersonalForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default PersonalForm;

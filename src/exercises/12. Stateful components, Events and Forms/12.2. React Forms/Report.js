/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

function Report(props) {
  const { info, reportStatus } = props;
  const infoObj = Object.fromEntries(info);

  if (!reportStatus) {
    return <div />;
  }

  return (
    <div>
      <p>Nome: {infoObj.name}</p>
      <p>E-mail: {infoObj['e-mail']}</p>
      <p>CPF: {infoObj.cpf}</p>
      <p>Endereço: {infoObj.address}, {infoObj.residenceType}, {infoObj.city}/{infoObj.state}</p>
      <p>Resumo do Currículo: {infoObj.resume}</p>
      <p>Cargo: {infoObj.job}</p>
      <p>{infoObj.jobDescription}</p>
    </div>
  );
}

Report.propTypes = {
  info: PropTypes.arrayOf(PropTypes.array).isRequired,
  reportStatus: PropTypes.bool.isRequired,
};

export default Report;

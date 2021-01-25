import React from 'react';
import JobForm from './JobForm';
import PersonalForm from './PersonalForm';
import Report from './Report';

class Exercise extends React.Component {
  // eslint-disable-next-line max-lines-per-function
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      'e-mail': '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      residenceType: '',
      mouseOver: false,
      resume: '',
      job: '',
      jobDescription: '',
      info: [],
      report: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouseover = this.handleMouseover.bind(this);
    this.handleReport = this.handleReport.bind(this);
    this.handleClean = this.handleClean.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name } = target;

    if (name === 'name') {
      target.value = target.value.toUpperCase();
    } if (name === 'cpf') {
      target.value = target.value.replace(/\D/g, '');
    } if (name === 'address') {
      target.value = target.value.replace(/[^\w\d\s]/, '');
    }

    this.setState({
      [name]: target.value,
    }, () => console.log(this.state));
  }

  handleBlur(event) {
    const { value, name } = event.target;
    if (value.match(/^\d/)) {
      event.target.value = '';
      this.setState({
        [name]: '',
      }, () => console.log(this.state));
    }
  }

  handleMouseover() {
    const { mouseOver } = this.state;
    if (!mouseOver) {
      // eslint-disable-next-line no-alert
      alert('Preencha com cuidado esta informação');
      this.setState({ mouseOver: true });
    }
  }

  handleReport() {
    this.setState((prevState) => ({
      info: Object.entries(prevState).filter((entry) => entry[0] !== 'info'),
      report: true,
    }));
  }

  handleClean() {
    this.setState({
      name: '',
      'e-mail': '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      residenceType: '',
      mouseOver: false,
      resume: '',
      job: '',
      jobDescription: '',
      info: [],
      report: false,
    });
    document.getElementById('myForm').reset();
  }

  render() {
    const { info, report } = this.state;
    return (
      <form id="myForm">
        <PersonalForm
          handleChange={ this.handleChange }
          handleBlur={ this.handleBlur }
        />
        <JobForm
          handleChange={ this.handleChange }
          handleMouseover={ this.handleMouseover }
        />
        <button type="button" onClick={ this.handleReport }>Gerar relatório</button>
        <button type="button" onClick={ this.handleClean }>Gerar relatório</button>
        <Report info={ info } reportStatus={ report } />
      </form>
    );
  }
}

export default Exercise;

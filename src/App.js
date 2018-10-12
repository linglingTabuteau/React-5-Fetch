import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GenerateEmployee from './GenerateEmployee';
import DisplayEmployee from './DisplayEmployee';

const sampleEmplyee = {
  gender: 'male',
  name:{
    title:'mr',
    first:'mathys',
    last:'autbert'
  },
  location:{
    street:'9467 rue gasparin',
    city:'perpignan',
    postcode:'90208'
  },
  email: 'mathys.aubert@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/66.jpg'
  }
};
class App extends Component {
  constructor (props){
    super (props);
    this.state = {
    // on peut mettre notre sampleEmployee par défaut
    // afin d'avoir toujours un employé d'affiché
      employee: sampleEmplyee
    };
  }
  getEmployee(){
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=num")
    .then(response => response.json())
    .then(data => {
      this.setState({
        // data.results[0] represente ?
        // pour simpson change à employee:  data.results et on doit changer le format de props dans child DisplayEmloyee??
        employee:  data[0],
      });
     
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* ??une fonction callback? pour () => this.getEmployee() */}
        <GenerateEmployee selectEmployee={() => this.getEmployee()} />
        <DisplayEmployee employee={this.state.employee} />
      </div>
    );
  }
}

export default App;

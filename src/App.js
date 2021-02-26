import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person nombre='Luis Miguel' trabajo='cantante' />
        <Person nombre='Jorge Ramos' trabajo='periodista' />
        <Person nombre='Frida Kahlo' trabajo='artista' />
      </div>
    );
  }
}

export default App;

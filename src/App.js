import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    miGente: [
      { nombre: 'Luis Miguel', trabajo: 'cantante' },
      { nombre: 'Jorge Ramos', trabajo: 'periodista' },
      { nombre: 'Frida Kahlo', trabajo: 'artista' }
    ]
  }

  render() {

    const { miGente } = this.state
    return (
      <div className="App">
        <button>Cambia de Nombre</button>
        <Person nombre={miGente[0].nombre} trabajo={miGente[0].trabajo} >Adivina cual soy</ Person>
        <Person nombre={miGente[1].nombre} trabajo={miGente[1].trabajo} />
        <Person nombre={miGente[2].nombre} trabajo={miGente[2].trabajo} />
      </div>
    );
  }
}

export default App;

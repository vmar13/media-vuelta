import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [ miGenteState, setMiGenteState ] = useState({
    miGente: [
        { nombre: 'Luis Miguel', trabajo: 'cantante' },
        { nombre: 'Jorge Ramos', trabajo: 'periodista' },
        { nombre: 'Frida Kahlo', trabajo: 'artista' }
      ],
      bolivia: 'La Paz'
    });

  const cambiaNombreHandler = () => {
    setMiGenteState({ miGente: [
        { nombre: 'Romeo Santos', trabajo: 'cantante' },
        { nombre: 'Maria Elena Salinas', trabajo: 'periodista' },
        { nombre: 'Salvador Dalí', trabajo: 'artista' }
      ]})
      // this.setState({
      //   miGente: [...this.state.miGente, {nombre: 'Salvador Dali', trabajo: 'artista'}]
      // })
      // console.log(this.state.miGente)
    }


    // const { miGente } = this.state;
    // const { cambiaNombreHandler } = this;
    return (
      <div className="App">
        <button onClick={cambiaNombreHandler}>Cambia de Nombre</button>
        <Person nombre={miGenteState.miGente[0].nombre} trabajo={miGenteState.miGente[0].trabajo} >Adivina cual soy</ Person>
        <Person nombre={miGenteState.miGente[1].nombre} trabajo={miGenteState.miGente[1].trabajo} />
        <Person nombre={miGenteState.miGente[2].nombre} trabajo={miGenteState.miGente[2].trabajo} />
      </div>
    );

}

export default App;

// state = {
//   miGente: [
//     { nombre: 'Luis Miguel', trabajo: 'cantante' },
//     { nombre: 'Jorge Ramos', trabajo: 'periodista' },
//     { nombre: 'Frida Kahlo', trabajo: 'artista' }
//   ],
//   bolivia: 'La Paz'
// }

// cambiaNombreHandler = () => {
//   this.setState({ miGente: [
//     { nombre: 'Romeo Santos', trabajo: 'cantante' },
//     { nombre: 'Maria Elena Salinas', trabajo: 'periodista' },
//     { nombre: 'Salvador Dalí', trabajo: 'artista' }
//   ]})
//   // this.setState({
//   //   miGente: [...this.state.miGente, {nombre: 'Salvador Dali', trabajo: 'artista'}]
//   // })
//   // console.log(this.state.miGente)
// }
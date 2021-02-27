import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
  miGente: [
    { nombre: 'Luis Miguel', trabajo: 'cantante' },
    { nombre: 'Jorge Ramos', trabajo: 'periodista' },
    { nombre: 'Frida Kahlo', trabajo: 'artista' }
  ],
  bolivia: 'La Paz'
}

cambiaNombreHandler = () => {
  this.setState({ miGente: [
    { nombre: 'Romeo Santos', trabajo: 'cantante' },
    { nombre: 'Maria Elena Salinas', trabajo: 'periodista' },
    { nombre: 'Salvador Dalí', trabajo: 'artista' }
  ]})
  // this.setState({
  //   miGente: [...this.state.miGente, {nombre: 'Salvador Dali', trabajo: 'artista'}]
  // })
  // console.log(this.state.miGente)
}
  

  render() {
    const { miGente } = this.state;
    const { cambiaNombreHandler } = this;
    return (
      <div className="App">
        <button onClick={cambiaNombreHandler}>Cambia de Nombre</button>
        <Person 
          nombre={miGente[0].nombre} 
          trabajo={miGente[0].trabajo} >Adivina cual soy</ Person>
        <Person 
          nombre={miGente[1].nombre} 
          trabajo={miGente[1].trabajo} 
          switchName={cambiaNombreHandler}/>
        <Person 
          nombre={miGente[2].nombre} 
          trabajo={miGente[2].trabajo} />
      </div>
    );

  }
}

export default App;

// const [ miGenteState, setMiGenteState ] = useState({
//   miGente: [
//       { nombre: 'Luis Miguel', trabajo: 'cantante' },
//       { nombre: 'Jorge Ramos', trabajo: 'periodista' },
//       { nombre: 'Frida Kahlo', trabajo: 'artista' }
//     ]
//   });

// const [ bolivia, setBoliviaState ] = useState({ bolivia: 'La Paz' })

// console.log(miGenteState, bolivia)

// const cambiaNombreHandler = () => {
//   setMiGenteState({ miGente: [
//       { nombre: 'Romeo Santos', trabajo: 'cantante' },
//       { nombre: 'Maria Elena Salinas', trabajo: 'periodista' },
//       { nombre: 'Salvador Dalí', trabajo: 'artista' }
//     ]
//   })

//     // setMiGenteState({
//     //   miGente: [{nombre: 'Salvador Dali', trabajo: 'artista'}]
//     // })
// }
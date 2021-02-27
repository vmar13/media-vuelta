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
    bolivia: 'La Paz',
    showMiGente: false
}

  cambiaNombreHandler = (nuevoNombre) => {
    this.setState({ 
      miGente: [
        { nombre: nuevoNombre, trabajo: 'cantante' },
        { nombre: 'Maria Elena Salinas', trabajo: 'periodista' },
        { nombre: 'Salvador Dalí', trabajo: 'artista' }
    ]})
    // this.setState({
    //   miGente: [...this.state.miGente, {nombre: 'Salvador Dali', trabajo: 'artista'}]
    // })
    // console.log(this.state.miGente)
  }
  
  nombreDeFormHandler = (event) => {
    this.setState({ 
      miGente: [
        { nombre: 'Max', trabajo: 'cantante' },
        { nombre:  event.target.value, trabajo: 'periodista' },
        { nombre: 'Salvador Dalí', trabajo: 'artista' }
    ]})
  }

  toggleMiGente = () => {
    const doesShow = this.state.showMiGente;
    this.setState({ showMiGente: !doesShow })
  }

  render() {
    const { miGente, showMiGente } = this.state;
    const { cambiaNombreHandler, nombreDeFormHandler, toggleMiGente } = this;
    
    let persons = null;

    if (showMiGente) {
      persons = (
        <div>
          {miGente.map(person => {
            return <Person 
              nombre={person.nombre}
              trabajo={person.trabajo} />
          })}
        </div>
      );
    }


    return (
      <div className="App">
        <button onClick={toggleMiGente}>Show People</button>
        {persons}
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


{/* <div>
          <Person 
            nombre={miGente[0].nombre} 
            trabajo={miGente[0].trabajo} >Adivina cual soy</ Person>
          <Person 
            nombre={miGente[1].nombre} 
            trabajo={miGente[1].trabajo} 
            switchName={cambiaNombreHandler.bind(this, 'Max')}
            changed={nombreDeFormHandler}/>
          <Person 
            nombre={miGente[2].nombre} 
            trabajo={miGente[2].trabajo} />
        </div>  */}
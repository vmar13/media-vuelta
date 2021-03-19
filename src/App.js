import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    persons: [
      {id: 1, nombre: 'Luis Miguel', trabajo: 'cantante' },
      {id: 2, nombre: 'Jorge Ramos', trabajo: 'periodista' },
      {id: 3, nombre: 'Frida Kahlo', trabajo: 'artista' }
    ],
    bolivia: 'La Paz',
    showPersons: false,
    para: ''
}
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)

    const person = {
      ...this.state.persons[personIndex]
    };

    person.nombre = event.target.value;

    //a copy of the old array with updated person
    //where we adjusted the name
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ 
      persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })

  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  lengthHandler = event => {
    this.setState({ para: event.target.value })
  }

  deleteCharHandler = index => {
    const text = this.state.para.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ para: updatedText });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    const { showPersons, para } = this.state;
    const { nameChangedHandler, togglePersons, deletePersonHandler, lengthHandler, deleteCharHandler } = this;
    
    let charList = para.split('').map((char, index) => {
      return <Char 
        key={index} 
        character={char} 
        deleteChar={() => deleteCharHandler(index)}/>
    })

    let persons = null;

    if (showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              key={person.id}
              removePerson={() => deletePersonHandler(index)}
              nombre={person.nombre}
              trabajo={person.trabajo}
              changed={(event) => nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'red';
    } 


    return (
      <div className="App">
        <input text='text' onChange={lengthHandler} value={para}/>
        <Validation paraLength={para.length} /><br/>
        {charList}
        <hr />
        <button style={style} onClick={togglePersons}>Show People</button>
        {persons}
      </div>
    );

  }
}

export default App;

// const [ personsState, setpersonsState ] = useState({
//   persons: [
//       { nombre: 'Luis Miguel', trabajo: 'cantante' },
//       { nombre: 'Jorge Ramos', trabajo: 'periodista' },
//       { nombre: 'Frida Kahlo', trabajo: 'artista' }
//     ]
//   });

// const [ bolivia, setBoliviaState ] = useState({ bolivia: 'La Paz' })

// console.log(personsState, bolivia)

// const cambiaNombreHandler = () => {
//   setpersonsState({ persons: [
//       { nombre: 'Romeo Santos', trabajo: 'cantante' },
//       { nombre: 'Maria Elena Salinas', trabajo: 'periodista' },
//       { nombre: 'Salvador Dalí', trabajo: 'artista' }
//     ]
//   })

//     // setpersonsState({
//     //   persons: [{nombre: 'Salvador Dali', trabajo: 'artista'}]
//     // })
// }


{/* <div>
          <Person 
            nombre={persons[0].nombre} 
            trabajo={persons[0].trabajo} >Adivina cual soy</ Person>
          <Person 
            nombre={persons[1].nombre} 
            trabajo={persons[1].trabajo} 
            switchName={cambiaNombreHandler.bind(this, 'Max')}
            changed={nameChangedHandler}/>
          <Person 
            nombre={persons[2].nombre} 
            trabajo={persons[2].trabajo} />
        </div>  */}
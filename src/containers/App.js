import React, { Component } from 'react';
import classes from './App.css';
// import styled from 'styled-components';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit'


// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
  
//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }`

class App extends Component {

  state = {
    persons: [
      {id: 1, nombre: 'Luis Miguel', trabajo: 'cantante' },
      {id: 2, nombre: 'Jorge Ramos', trabajo: 'periodista' },
      {id: 3, nombre: 'Frida Kahlo', trabajo: 'artista' }
    ],
    bolivia: 'La Paz',
    showPersons: false,
    showCockpit: true,
    para: ''
}
  
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
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


  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    const { showPersons, para } = this.state;
    const { nameChangedHandler, togglePersons, deletePersonHandler } = this;

    let persons = null;

    if (showPersons) {
      persons = <People 
        people={this.state.persons}
        removePerson={deletePersonHandler}
        changed={nameChangedHandler} />
    } 

    return (
      <div className={classes.App}>
        {/* <StyledButton alt={this.state.showPersons} onClick={togglePersons}>
          Show People
        </StyledButton> */}
        <button
          onClick={() => this.setState({ showCockpit: false })}
        >
          Remove cockpit
        </button>
        {this.state.showCockpit ? 
         <Cockpit 
         showPersons={showPersons} 
         people={this.state.persons}
         togglePersons={togglePersons} />
         : null 
        }
        {persons}
      </div>
    );

  }
}
//This is a higher order component, which injects some extra syntax which 
//will parse my styles and add other features
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
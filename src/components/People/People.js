import React from 'react';
import Person from './Person/Person';

class People extends React.Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[People.js] getDerivedStateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('People.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[People.js] getSnapShotBeforeUpdate');
  }

  componentDidUpdate() {
    console.log('[People.js] componentDidUpdate');
  }

  //This lifecycle hook will run right BEFORE the comp unmounts
  componentWillUnmount() {
    console.log('[People.js] componentWillUnmount');
  }

  render() {
    console.log('[People.js] rendering...')
    const { removePerson, changed } = this.props

    return (
      this.props.people.map((person, index) => {
        return <Person 
          key={person.id}
          // removePerson={() => props.deletePersonHandler(index)}
          index={index}
          id={person.id}
          removePerson={removePerson}
          nombre={person.nombre}
          trabajo={person.trabajo}
          changed={changed} />
      })
    )
  }
}

export default People;
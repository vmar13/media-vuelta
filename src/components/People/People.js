import React from 'react';
import Person from './Person/Person';

const People = props => props.people.map((person, index) => {
        return <Person 
          key={person.id}
          // removePerson={() => props.deletePersonHandler(index)}
          index={index}
          id={person.id}
          removePerson={props.removePerson}
          nombre={person.nombre}
          trabajo={person.trabajo}
          changed={props.changed} />
      })


export default People;
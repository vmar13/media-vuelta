import React from 'react';
import Person from './Person/Person';

const People = props => props.people.map((person, index) => {
        return <Person 
          key={person.id}
          removePerson={() => props.deletePersonHandler(index)}
          nombre={person.nombre}
          trabajo={person.trabajo}
          changed={(event) => props.nameChangedHandler(event, person.id)} />
      })


export default People;
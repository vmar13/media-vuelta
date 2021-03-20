import React from 'react';
import classes from './Cockpit.css';

const Cockpit = props => {
    //This is a class list; let assignedClasses = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.people.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.people.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Saludos capos y capas!!</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                // className={btnClass.join(' ')} 
                onClick={props.togglePersons}>
                Toggle People
            </button>
        </div>
    )
}

export default Cockpit;
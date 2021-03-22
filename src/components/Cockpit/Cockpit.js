import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = props => {
    //Works like componentDidMount & componentDidUpdate in one!
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //mimicking http request
        setTimeout(() => {
            alert('saved data to cloud')
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, []); //Empty array as sec arg will cause hook to run once FIRST TIME
    //Can also include dependencies like below with people array, but
    //that will cause the useEffect hook to run every time a change 
    //is made to the people array
// }, [props.people]);


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
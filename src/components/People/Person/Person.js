import React from 'react';
// import './Person.css';
// import styled from 'styled-components';
import classes from './Person.css';

//StyledDiv is a valid React component
// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px) {
//         width: 450px;
// }`

const Person = (props) => {
    const { nombre, trabajo, changed, removePerson } = props
    
    return ( 
         //   {/* <div className='Person' style={style}> */}
        <div className={classes.Person}>
            <p onClick={removePerson}>Me llamo {nombre} y soy un/a {trabajo}.</p>
            <input type='text' onChange={changed} value={nombre} />
        </div>
    )
}

export default Person;
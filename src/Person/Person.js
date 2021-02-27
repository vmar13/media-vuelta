import React from 'react';
import './Person.css';

const Person = (props) => {
    const { nombre, trabajo, switchName, children, changed } = props

    return (
        <div>  
           
            <h4>{children}</h4>

            <div className='Person'>
                <p onClick={switchName}>Me llamo {nombre} y soy un/a {trabajo}.</p>
                <input type='text' onChange={changed} value={nombre} />
            </div>
        </div>
    )
}

export default Person;
import React from 'react';

const Person = (props) => {
    const { nombre, trabajo, switchName, children, changed } = props

    return (
        <div>
            <h4>{children}</h4>
            <p onClick={switchName}>Me llamo {nombre} y soy un/a {trabajo}.</p>
            <input type='text' onChange={changed} />
        </div>
    )
}

export default Person;
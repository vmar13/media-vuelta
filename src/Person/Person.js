import React from 'react';

const Person = (props) => {
    const { nombre, trabajo, children } = props

    return (
        <div>
            <h4>{children}</h4>
            <p>Me llamo {nombre} y soy un/a {trabajo}.</p>
        </div>
    )
}

export default Person;
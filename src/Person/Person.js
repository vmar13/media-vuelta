import React from 'react';

const Person = (props) => {
    const { nombre, trabajo, switchName, children } = props

    return (
        <div>
            <h4>{children}</h4>
            <p onClick={switchName}>Me llamo {nombre} y soy un/a {trabajo}.</p>
        </div>
    )
}

export default Person;
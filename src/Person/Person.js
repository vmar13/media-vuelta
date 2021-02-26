import React from 'react';

const Person = (props) => {
    const { nombre, trabajo } = props

    return <p>Me llamo {nombre} y soy un {trabajo}.</p>
}

export default Person;
import React from 'react';
import './Char.css'

const Char = props => {
    const { character, deleteChar } = props

    return (
        <div className='Char' onClick={deleteChar}>
            {character} 
        </div>
    )
}

export default Char;
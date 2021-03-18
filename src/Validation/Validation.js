import React from 'react';

const Validation = props => {
    const { para } = props
    return (
        <div>
        <p>{para}</p>
        {para <= 5 ? 
        <p>Text too short</p>
        :
        <p>Text long enough</p>
        }
        </div>
    )
}

export default Validation;
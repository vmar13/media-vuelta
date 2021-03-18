import React from 'react';

const Validation = props => {
    const { para } = props

    let validationMsg = 'Text long enough';

    if (para <= 5) {
        validationMsg = 'Text too short';
    }

    return (
        <div>
            <p>{validationMsg}</p>
        </div>
    );
    // return (
    //     <div>
    //     <p>{para}</p>
    //     {para <= 5 ? 
    //     <p>Text too short</p>
    //     :
    //     <p>Text long enough</p>
    //     }
    //     </div>
    // )
};

export default Validation;
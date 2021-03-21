import React from 'react';
// import './Person.css';
// import styled from 'styled-components';
import classes from './Person.css';

class Person extends React.Component {
    render() {
        const { nombre, trabajo, changed, id } = this.props
    
        return ( 
            //   {/* <div className='Person' style={style}> */}
            <div className={classes.Person}>
                <p onClick={() => this.props.removePerson(this.props.index)}>Me llamo {nombre} y soy un/a {trabajo}.</p>
                <input type='text' onChange={(event) => changed(event, id)} value={nombre} />
            </div>
        )
    }
}

export default Person;

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
import React from 'react';
// import styled from 'styled-components'
// import Radium from 'radium'
import './Person.css' ;

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'

    //     }
    // }
    //${props => props.alt ? 'red' : 'green'}
    // const StyledDiv = styled.div`
    //     width: 60%; 
    //     margin: 16px auto;
    //     box-shadow:0 2px 3px #ccc;
    //     padding: 16px;
    //     @media (min-width: 500px) {
    //         width: 450px;
    //     }
    // `;

    return (
    // <div className="Person" style={style}>
    <div>       
        <p onClick = {props.click}>I'm a {props.name} {props.age} years old ({Math.floor(Math.random() * 30)})</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
    );
}

export default person;
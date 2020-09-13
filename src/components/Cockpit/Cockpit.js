import React, { useEffect } from 'react';

import styles from './Cockpit.module.css';

const Cockpit = (props) => {
useEffect(() => {
    console.log(' use Effect');
    //http request... 
    setTimeout(() =>{
        alert('fake http request')
    }, 1000)
    return () => {
        console.log("clean up")
    }
}, [props.persons]);

    let assignedstyles = [];//"red bold"

    if(props.persons.length <= 2){
        assignedstyles.push(styles.red);
    }
    if(props.persons.length <= 1){
        assignedstyles.push(styles.bold);
    }
    return (
        <div className={styles.Cockpit}>
            <h1>You will be first App</h1>
            <p className={assignedstyles.join(' ')}>it works!</p>
            <button
                onClick={props.clicked}>Show Person</button>
        </div>
    );
}
export default Cockpit;
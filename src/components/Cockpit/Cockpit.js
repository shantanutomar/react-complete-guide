import React from 'react';
import classes from './Cockpit.css'

var Cockpit = (props) => {

    var assignedClasses = [];
    var btnClass= '';
    if(props.persons.length <= 2){
        assignedClasses.push(classes.red);
    }   
    if(props.persons.length <= 1){
        assignedClasses.push(classes.bold);
    }   
    if(props.showPersons){
        btnClass = classes.Red;
    }
    return(
    <div className={classes.Cockpit}>
        <h1>{props.personTitle}</h1>
        <p className = {assignedClasses.join(' ')}>This is a new paragraph. Let's check this out..!!</p>
        <p>Toggle click count is : {props.toggleCount}</p>
        <button onClick={props.clicked} className = {btnClass}>Toggle Persons</button>
    </div>
    );

};

export default Cockpit;




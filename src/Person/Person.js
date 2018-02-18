import React from "react";
import "./Person.css";

var person = (props) => {

    return(
    <div className = "Person"> 
    <h3 onClick={props.click}>My name is {props.name} and my age is {props.age} !</h3>
    <p>{props.children}</p>
    <input type="text" onChange={props.changeNameClick} value={props.name}/>
    </div>
    );
};

export default person;

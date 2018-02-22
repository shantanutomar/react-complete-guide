import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  render(){ 
      return(
        <div className = {classes.Person}> 
        <h3 onClick={this.props.click}>My name is {this.props.name} and my age is {this.props.age} !</h3>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changeNameClick} value={this.props.name}/>
        </div>
        );
  };  
};

export default Person;

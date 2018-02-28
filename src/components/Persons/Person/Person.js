import React, { Component } from "react";
import classes from "./Person.css";
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {

  componentDidMount = () => {
    if(this.props.personId === 1){
      this.inputRef.focus();
    };
  };

  render(){ 
      return(
        <Aux> 
        <h3 onClick={this.props.click}>My name is {this.props.name} and my age is {this.props.age} !</h3>
        <p>{this.props.children}</p>
        <input 
          ref={(inp) => {this.inputRef = inp}}
          type="text" onChange={this.props.changeNameClick} 
          value={this.props.name}/>
        </Aux>
        );
  };  
};

Person.propTypes = {
  click : PropTypes.func,
  age : PropTypes.number
};

export default withClass(Person, classes.Person);


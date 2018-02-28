import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends Component {

  state = {
    persons : [
      {id : "1", name : "Shantanu", age : 29},
      {id : "2", name : "Rashmi", age : 28},
      {id : "3", name : "Megha", age : 29}
    ],
    showPersons : false,
    toggleCount : 0
  };

  deletePersonHandler = (personIndex) => {
    var persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  };

  changeNameHandler = (event, id) => {

    var pIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    var personObject = {...this.state.persons[pIndex]};
    personObject.name = event.target.value;

    var persons = [...this.state.persons];  
    persons[pIndex] = personObject; 

    this.setState({persons : persons});
    
  };

  hidePersons = () => {
    this.setState((prevState, props) => {
      return {
        showPersons : !this.state.showPersons,
        toggleCount : prevState.toggleCount + 1
      };
  });
}

  render() {
    let persons;
    if(this.state.showPersons){
      persons = (
        <div>
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler}/>
        </div>
      );
    }

    return (
      <Aux>
        <Cockpit persons = {this.state.persons}
        showPersons={this.state.showPersons} 
        clicked = {this.hidePersons}
        personTitle={this.props.title}
        toggleCount = {this.state.toggleCount}/>
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);

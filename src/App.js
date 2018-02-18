import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {id : "1", name : "Shantanu", age : 29},
      {id : "2", name : "Rashmi", age : 28},
      {id : "3", name : "Megha", age : 29}
    ],
    showPersons : false
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
    this.setState({showPersons : !this.state.showPersons})
  };

  render() {

    var style = {
      backgroundColor:"green",
      color:"white",
      border:"2px solid blue",
      padding:"1em",
      cursor:"pointer",
      font:"inherit"
    };

    var classes = [];
    if(this.state.persons.length <= 2){
      classes.push("red");
    }   

    if(this.state.persons.length <= 1){
      classes.push("bold");
    }   

    let persons;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person name={person.name} age={person.age} click={this.deletePersonHandler.bind(this, index)}
              changeNameClick={(event) => this.changeNameHandler(event, person.id)} /*Not clear */
              key={person.id}/> 
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
    }

    return (
      <div className = "App">
        <h1>This is my react app</h1>
        <p className = {classes.join(' ')}>This is a new paragraph. Let's check this out..!!</p>
        <button onClick={this.hidePersons}
        style={style}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import Person from './Person/Person';


class Persons extends Component{
    render(){
        return this.props.persons.map((person, index) => <Person 
        name={person.name} 
        age={person.age} 
        click={() => this.props.clicked(index)}
        changeNameClick={(event) => this.props.changed(event, person.id)} /*Not clear */
        key={person.id}
        personId={index}/> 
    );
};
};

export default Persons;





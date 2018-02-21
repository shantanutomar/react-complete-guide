import React from 'react';
import Person from './Person/Person'

var Persons = (props) => props.persons.map((person, index) => <Person 
    name={person.name} 
    age={person.age} 
    click={() => props.clicked(index)}
    changeNameClick={(event) => props.changed(event, person.id)} /*Not clear */
    key={person.id}/> 
);

export default Persons;





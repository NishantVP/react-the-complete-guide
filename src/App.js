import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

    state  = {
        persons: [
            { id: '123', name: "Kshitija", age: 22},
            { id: 'abc', name: "Sarika", age: 29},
            { id: 'x1y2z3', name: "Nishant", age: 29}
        ],
        otherState: 'some other value',
        showPersons: false
    }



    deletePersonHandler = (personIndex) => {

        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];

        persons.splice(personIndex,1);

        this.setState(
            {
                persons : persons
            }
        )
    }


    nameChangeHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex( person => {
            return person.id === id;
        });

        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;

        const persons = [...this.state.persons];

        persons[personIndex] = person;

        this.setState(
            {
                persons : persons
            }
        )
    }


    togglePersonsHandler = () => {

        const doesShow = this.state.showPersons;

        this.setState({
            showPersons: !doesShow
        })
    }


    render() {

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1x solid blue',
            padding: '8px',
            cursor: 'pointer'
        };


        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>{
                    this.state.persons.map( (person, index) => {
                        return (
                            <Person
                                key={person.id}
                                name={person.name}
                                age={person.age}
                                click={this.deletePersonHandler.bind(this,index)}
                                changed={(event) => this.nameChangeHandler(event, person.id)}>
                            </Person>
                        )
                    })}
                </div>
            );

            style.backgroundColor = 'red';

        }


        return (
            <div className="App">
                <h1>Hi, I am React App</h1>
                <p> This is really working!</p>

                <button
                    style={style}
                    onClick={this.togglePersonsHandler }> Toggle Persons
                </button>

                {persons}

            </div>
        );
    }
}

export default App;

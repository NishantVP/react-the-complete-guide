import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

    state  = {
        persons: [
            { name: "Kshitija", age: 22},
            { name: "Sarika", age: 29},
            { name: "Nishant", age: 29}
        ],
        otherState: 'some other value',
        showPersons: false
    }



    deletePersonHandler = (personIndex) => {

        const persons = this.state.persons;

        persons.splice(personIndex,1);

        this.setState(
            {
                persons : persons
            }
        )
    }


    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: "Kshitija", age: 22},
                { name: event.target.value, age: 29},
                { name: "Nishant", age: 29}
            ]
        })
    }


    togglePersonsHandler = () => {

        const doesShow = this.state.showPersons;

        this.setState({
            showPersons: !doesShow
        })
    }


    render() {

        const style = {
            backgroundColor: 'white',
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
                                name={person.name}
                                age={person.age}
                                click={this.deletePersonHandler.bind(this,index)}>
                            </Person>
                        )
                    })}
                </div>
            );
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

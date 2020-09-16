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

    switchNameHandler = (newName) => {
        // console.log('Was clicked!')
        // DON'T DO THIS: this.state.persons[2].name = "Nis"
        this.setState({
                persons: [
                    { name: "Kshitija", age: 22},
                    { name: "Sarika", age: 29},
                    { name: newName, age: 29}
                ]
        })
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
                <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age} />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click ={this.switchNameHandler.bind(this, 'Nis!')}
                        changed ={this.nameChangeHandler}> My Hobbies: Racing

                    </Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age} />
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

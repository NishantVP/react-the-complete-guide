import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

    state  = {
        persons: [
            { name: "Kshitija", age: 22},
            { name: "Sarika", age: 22},
            { name: "Nishant", age: 22}
        ]
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I am React App</h1>
                <p> This is really working!</p>
                <button> Switch Name </button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My Hobbies: Racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;

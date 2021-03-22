import React, { Component } from "react";

import Person from "./Person/Person";
import classes from "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: "sd", name: "Ali", age: 13 },
      { id: "we", name: "Nes", age: 41 },
      { id: "wer", name: "Eren", age: 13 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (e, id) => {
    //dont mutate state
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = { ...this.state.persons[personIndex] };
    //const person=Object.assign({},this.state.perons[i]);

    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = personIndx => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndx, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons;
    let btnClass = "";
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                change={e => this.nameChangedHandler(e, person.id)}
              />
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }
    let assignedClasses = [];
    if (this.state.persons.length < 3) assignedClasses.push(classes.red);
    if (this.state.persons.length < 2) assignedClasses.push(classes.bold);
    return (
      <div className={classes.App}>
        <h1>First react app</h1>
        <p className={assignedClasses.join(" ")}>
          {this.state.persons.length} users
        </p>
        <button
          className={btnClass}
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          {this.state.showPersons ? "Hide Users" : "Show Users"}
        </button>
        {persons}
      </div>
    );
  }
}
export default App;

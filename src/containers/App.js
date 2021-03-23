import React, { Component } from "react";

import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
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

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        ></Persons>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}
export default App;

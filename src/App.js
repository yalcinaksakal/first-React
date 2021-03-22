import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium from "radium";
//stateful component, smart comp, container componnet
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
    //in line styling
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "none",
      borderRadius: "5px",
      padding: "8px",
      cursor: "pointer",
      outline: "none",
      width: "150px",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };
    let persons;
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
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }
    let classes = [];
    if (this.state.persons.length < 3) classes.push("red");
    if (this.state.persons.length < 2) classes.push("bold");
    return (
      <div className="App">
        <h1>First react app</h1>
        <p className={classes.join(" ")}>{this.state.persons.length} users</p>
        <button onClick={this.togglePersonsHandler} style={style}>
          {this.state.showPersons ? "Hide Users" : "Show Users"}
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);

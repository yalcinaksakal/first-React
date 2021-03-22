import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
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
      backgroundColor: "whitesmoke",
      font: "inherit",
      border: "none",
      borderRadius: "10px",
      padding: "8px",
      cursor: "pointer",
      outline: "none",
    };
    let persons;
    this.state.showPersons
      ? (persons = (
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
        ))
      : (persons = null);
    return (
      <div className="App">
        <h1>First react app</h1>
        <p>React, react, react</p>
        <button onClick={this.togglePersonsHandler} style={style}>
          Show Users
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

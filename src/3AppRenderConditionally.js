import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
//stateful component, smart comp, container componnet
class App extends Component {
  state = {
    persons: [
      { name: "Ali", age: 13 },
      { name: "Nes", age: 41 },
      { name: "Eren", age: 13 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: "Armağan", age: 13 },
        { name: newName, age: 41 },
        { name: "Meren", age: 13 },
      ],
    });
  };
  nameChangedHandler = e => {
    this.setState({
      persons: [
        { name: "Armağan", age: 13 },
        { name: e.target.value, age: 41 },
        { name: "Meren", age: 13 },
      ],
    });
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
    return (
      <div className="App">
        <h1>First react app</h1>
        <p>React, react, react</p>
        <button onClick={this.togglePersonsHandler} style={style}>
          Show Users
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              //you can pass and also methods as props to components
              //usage of bind method is preferred
              change={this.nameChangedHandler}
              click={() => this.switchNameHandler("Nesli")}
            >
              My hobbies: Racing and cooking.
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;

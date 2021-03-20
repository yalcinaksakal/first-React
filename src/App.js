import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Ali", age: 13 },
      { name: "Nes", age: 41 },
      { name: "Eren", age: 13 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Armağan" },
        { name: "Nesli" },
        { name: "Meren" },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1>First react app</h1>
        <p>React, react, react</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobbies: Racing and cooking.
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div',{className:"App"},React.createElement('h1',null,"First react project"))
  }
}

export default App;

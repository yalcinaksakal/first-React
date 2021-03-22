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
  render() {
    //in line styling
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>First react app</h1>
        <p>React, react, react</p>
        <button onClick={this.switchNameHandler.bind(this, 5)} style={style}>
          Switch Name
        </button>
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
      </div>
    );
    // return React.createElement('div',{className:"App"},React.createElement('h1',null,"First react project"))
  }
}

export default App;

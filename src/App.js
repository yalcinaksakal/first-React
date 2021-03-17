import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>First react app</h1>
        <p>React, react, react</p>
        <Person/>
      </div>
    );
    // return React.createElement('div',{className:"App"},React.createElement('h1',null,"First react project"))
  }
}

export default App;

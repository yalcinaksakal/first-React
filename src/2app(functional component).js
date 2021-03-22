//react hooks

//import useState
import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

// function based component
const app = props => {
  //useState returns array of two, first current state and second a function to setstate

  //multiple state slices with Hook

  //stateful component, smart comp, container componnet
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Ali", age: 13 },
      { name: "Nes", age: 41 },
      { name: "Eren", age: 13 },
    ],
  });

  const [otherState, setOtherState] = useState("some other state");

  console.log(personsState, otherState);
  //setPersonsstate !!!!replaces state, you have to add all state ingredients manually
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Armağan", age: 13 },
        { name: "Nesli", age: 41 },
        { name: "Meren", age: 13 },
      ],
      //manually adding old state, more elegant useState again
      // otherState: personsState.otherState,
    });
  };
  //no render just return jsx
  return (
    <div className="App">
      <h1>First react app</h1>
      <p>React, react, react</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobbies: Racing and cooking.
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};
export default app;

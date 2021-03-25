import React, { Component } from "react";

import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import classes from "./App.css";
import withClass from "../components/hoc/withClass";
import Aux from "../components/hoc/Auxiliary";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    //this.state=.....
  }
  state = {
    persons: [
      { id: "sd", name: "Ali", age: 13 },
      { id: "we", name: "Nes", age: 41 },
      { id: "wer", name: "Eren", age: 13 },
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps ", props);
    return state;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  nameChangedHandler = (e, id) => {
    //dont mutate state
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    //reference type, so change pointers, so state will change
    const person = { ...this.state.persons[personIndex] };
    //const person=Object.assign({},this.state.perons[i]);

    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    //this.state may not be synchronous, so changeCounter may not work correctly or as expected. So use prevState when you are depending on prevstate
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
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
    console.log("[App.js] render ");
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
      // <div className={classes.App}>
      // <WithClass classes={classes.App}>
      <Aux>
        <button
          onClick={() =>
            this.setState({ showCockpit: !this.state.showCockpit })
          }
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </Aux>
      // </WithClass>
      // </div>
    );
  }
}
export default withClass(App, classes.App);

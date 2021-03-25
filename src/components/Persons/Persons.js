import React, { PureComponent } from "react";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends PureComponent {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("[Persons.js] getDerivedStateFromProps");
  //     return state;
  //   }

  //every functional component should be wrapped by React.memo for performace, for not rerendering if there is not any change in props. Similarly every class based component should include shouldComponentUpdate hook.
  //of course if component's parent's state always effect child component, then do NOT use React.memo or shouldCompUpdate
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   //complete props change control=>then use PureComponent. shouldComponentUpdate with all props cehcked is already constructed there
  //   return (
  //     nextProps.persons !== this.props.person ||
  //     nextProps.change !== this.props.change ||
  //     nextProps.click !== this.props.click
  //   );
  //   //if (nextProps.persons !== this.props.persons) return true;
  //   //else return false;
  //   // return true; // you shooul return true or false
  // }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js]  getSnapshotBeforeUpdate");
    return { message: "snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }
  //for functional components useEffetc return function will handle cleanup. in class based components us componentWillUnmount for cleanup
  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }
  render() {
    console.log("[Persons.js] rendering");

    //returning array of JSX, since each have key, it is ok
    return this.props.persons.map((person, index) => {
      return (
        <ErrorBoundary key={person.id}>
          <Person
            name={person.name}
            age={person.age}
            click={() => this.props.clicked(index)}
            key={person.id}
            change={e => this.props.changed(e, person.id)}
          />
        </ErrorBoundary>
      );
    });
  }
}

export default Persons;

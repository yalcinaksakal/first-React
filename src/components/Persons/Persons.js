import React from "react";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

const persons = props =>
  props.persons.map((person, index) => {
    return (
      <ErrorBoundary key={person.id}>
        <Person
          name={person.name}
          age={person.age}
          click={() => props.clicked(index)}
          key={person.id}
          change={e => props.changed(e, person.id)}
        />
      </ErrorBoundary>
    );
  });

export default persons;

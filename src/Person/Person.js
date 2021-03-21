import React from "react";
import "./Person.css";
//stateless component, dump component,presentational comp
const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am {props.name} and {props.age} years old. {props.children}
      </p>
      {/* two way binding */}
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};
export default person;

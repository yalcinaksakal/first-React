import React from "react";

const person = props => {
  return (
    <div>
      <p>
        I am {props.name} and {props.age} years old. {props.children}
      </p>
     
    </div>
  );
};
export default person;

import React from "react";
import classes from "./Person.css";

const person = props => {
  //   const style = {
  //     "@media (min-width: 500px)": {
  //       width: "450px",
  //     },
  //   };
  return (
    // <div className="Person" style={style}>
    <div className={classes.Person}>
      <p onClick={props.click}>
        I am {props.name ? props.name : "none"} and {props.age} years old.{" "}
        {props.children}
      </p>
      {/* two way binding */}
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};
export default person;
// export default Radium(person);

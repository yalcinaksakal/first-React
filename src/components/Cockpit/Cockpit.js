import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) btnClass = classes.Red;

  if (props.personsLength < 3) assignedClasses.push(classes.red);
  if (props.personsLength < 2) assignedClasses.push(classes.bold);

  return (
    <div className={classes.Cockpit}>
      <h1>First react app</h1>
      <p className={assignedClasses.join(" ")}>{props.personsLength} users</p>
      <button className={btnClass} onClick={props.clicked}>
        {props.showPersons ? "Hide Users" : "Show Users"}
      </button>
    </div>
  );
};

export default cockpit;

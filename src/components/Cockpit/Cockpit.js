import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  //[props.persons]: executed if props.persons change
  //[]: empty array works once at first execution
  useEffect(() => {
    console.log("[Cockpit.js] useEffect 1");
    //const timer =
    setTimeout(() => alert("Saved data to cloud"), 1000);

    //componentWillunmount equivalent in functional componet, cleanup function
    return () => {
      //clearTimeout(timer);
      console.log("[Cockpit.js]  cleanup work in UseEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect 2");
    return () => console.log("[Cockpit.js]  cleanup work in 2nd UseEffect");
  });

  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) btnClass = classes.Red;

  if (props.personsLength < 3) assignedClasses.push(classes.red);
  if (props.personsLength < 2) assignedClasses.push(classes.bold);

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>{props.personsLength} users</p>
      <button className={btnClass} onClick={props.clicked}>
        {props.showPersons ? "Hide Users" : "Show Users"}
      </button>
    </div>
  );
};
//every functional component should be wrapped by React.memo for performace, for not rerendering if there is not any change in props. Similarly every class based component should include shouldComponentUpdate hook.
//of course if component's parent's state always effect child component, then do NOT use React.memo or shouldCompUpdate
export default React.memo(cockpit);

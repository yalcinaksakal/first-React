import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";

import AuthContext from "../../context/auth-context";

const cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  console.log(authContext);
  //jsx hasnt created button yet so below click wont work.
  //toggleBtnRef.current.click();
  //[props.persons]: executed if props.persons change
  //[]: empty array works once at first execution
  useEffect(() => {
    console.log("[Cockpit.js] useEffect 1");
    //const timer =
    // setTimeout(() => alert("Saved data to cloud"), 1000);

    toggleBtnRef.current.click();
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
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        {props.showPersons ? "Hide Users" : "Show Users"}
      </button>
      {/* <AuthContext.Consumer> */}
      {/* {
        context =>  */}
      <button onClick={authContext.login}>Log in</button>
      {/* } */}
      {/* </AuthContext.Consumer> */}
    </div>
  );
};
//every functional component should be wrapped by React.memo for performace, for not rerendering if there is not any change in props. Similarly every class based component should include shouldComponentUpdate hook.
//of course if component's parent's state always effect child component, then do NOT use React.memo or shouldCompUpdate
export default React.memo(cockpit);

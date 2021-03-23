import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  //const person = props => {
  //   const style = {
  //     "@media (min-width: 500px)": {
  //       width: "450px",
  //     },
  //   };

  render() {
    console.log("[Person.js] rendering");
    return (
      // <div className="Person" style={style}>
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I am {this.props.name ? this.props.name : "none"} and {this.props.age} years old.{" "}
          {this.props.children}
        </p>
        {/* two way binding */}
        <input type="text" onChange={this.props.change} value={this.props.name} />
      </div>
    );
  }
}
export default Person;
// export default Radium(person);

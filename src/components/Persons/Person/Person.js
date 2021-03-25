import React, { Component, Fragment } from "react";
import classes from "./Person.css";
import Aux from "../../hoc/Auxiliary";
import withClass from "../../hoc/withClass";
import PropTypes from "prop-types";

class Person extends Component {
  //const person = props => {
  //   const style = {
  //     "@media (min-width: 500px)": {
  //       width: "450px",
  //     },
  //   };
  constructor(props) {
    super(props);
    this.inputElRef = React.createRef();
  }
  componentDidMount() {
    // this.inputEl.focus();
    this.inputElRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering");
    return (
      <Fragment>
        <div>
          <p onClick={this.props.click}>
            I am {this.props.name ? this.props.name : "none"} and{" "}
            {this.props.age} years old. {this.props.children}
          </p>

          <input
            // ref={inputEl => (this.inputEl = inputEl)}
            ref={this.inputElRef}
            type="text"
            onChange={this.props.change}
            value={this.props.name}
          />
        </div>

        <div>hello</div>
      </Fragment>

      //   // <div className="Person" style={style}>
      //   //instead of Aux component we can use React.Fragment built in component for that purpose
      //   <React.Fragment>
      //     {/* OR we can import Fragment from react and use it directly */}
      //     {/* //<Aux> */}
      //     <div className={classes.Person}>
      //       <p onClick={this.props.click}>
      //         I am {this.props.name ? this.props.name : "none"} and{" "}
      //         {this.props.age} years old. {this.props.children}
      //       </p>
      //       {/* two way binding */}
      //       <input
      //         type="text"
      //         onChange={this.props.change}
      //         value={this.props.name}
      //       />
      //     </div>
      //     {/* root element cant contain adjacent JSX
      //  [div,p,input] will work but u will get a warning of key unexistance */}
      //     {/* we are avoiding array and keys with an aux component which simply returns its children  */}
      //     <div>hello</div>
      //     {/* </Aux> */}
      //   </React.Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func,
};
export default withClass(Person, classes.Person);
// export default Radium(person);

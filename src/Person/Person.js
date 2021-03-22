import React from "react";
//import "./Person.css";
// import Radium from "radium";

import styled from "styled-components";
//stateless component, dump component,presentational comp

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  @media (min-width: 500px): {
    width: "450px"; 
  }
`;

const person = props => {
  //   const style = {
  //     "@media (min-width: 500px)": {
  //       width: "450px",
  //     },
  //   };
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        I am {props.name ? props.name : "none"} and {props.age} years old.{" "}
        {props.children}
      </p>
      {/* two way binding */}
      <input type="text" onChange={props.change} value={props.name} />
    </StyledDiv>
  );
};
export default person;
// export default Radium(person);

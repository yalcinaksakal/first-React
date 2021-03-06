import React from "react";

// const withClass = props => (
//   <div className={props.classes}>{props.children}</div>
// );
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      {/* spread props, pass all props of wrapped componnets to hoc component  */}
      <WrappedComponent {...props} />
    </div>
  );
};
export default withClass;

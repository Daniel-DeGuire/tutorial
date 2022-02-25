import React from "react";
import ReactDom from "react-dom";

// JSX rules
// Return single element
// div/ section/ article or Fragment
// use cameCase for html attribute
// className instead of class
// close every element
// formatting

//stateless functional component
// always return JSX

function Greeting() {
  return (
    <React.Fragment>
      <h3>hello word</h3>
      <ul>
        <li>
          <a href="#">hello world</a>
        </li>
      </ul>
    </React.Fragment>
  );
}

// const Greeting = () => {
//   return React.createElement("h1", {}, "hello world");
// };

ReactDom.render(<Greeting />, document.getElementById("root"));

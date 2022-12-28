
import React from "react";
import ReactDOM from "react-dom";

const lName = "Pun";
const fName = "Sakada";
ReactDOM.render(
  <div>
    <h1>My name</h1>
    <p>{`${lName} ${fName}`}</p>
  </div>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";

let img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Random Images
    </h1>
    <div className="container">
      <img src={img} alt="random-img" />
      <img src={img} alt="random-img" />
      <img src={img} alt="random-img" />
    </div>
  </div>,
  document.getElementById("root")
);

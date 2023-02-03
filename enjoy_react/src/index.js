import React from "react";
import ReactDom from "react-dom";
import Header from "./Header";
import Greeting from "./Greeting";

class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <Greeting name="Cambodia" />
      </>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));

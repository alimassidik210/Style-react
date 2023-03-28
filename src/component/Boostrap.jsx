import NavComp from "./Functional/NavComp";
import Jumbotron from "./Functional/Jumbotron";
import Main from "./Functional/Main";
import React from "react";

class Boostrap extends React.Component {
  render() {
    return (
      <div>
        <NavComp />
        <Jumbotron />
        <Main />
      </div>
    );
  }
}

export default Boostrap;

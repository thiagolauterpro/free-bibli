import React, { Component } from "react";
import ListBook from "./components/book/ListBook";

class App extends Component {

  render() {
    return(
      <div>
        <h1> Listar por nome </h1>
        <ListBook nameBook="buraco da agulha"/>
        <hr />
        <h1> Listar por codigo </h1>
        <ListBook codBook="EEhqDwAAQBAJ"/>
      </div>
    );
  }
}

export default App;
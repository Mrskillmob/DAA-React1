import React, { Component } from "react";

import CalculatorForm from "./components/CalculatorForm";
import Result from "./components/Result";
import './App.css';

export default class App extends Component{
  render(){
    const title ='React kalkulacka';

    return (
      <div className="App">
        <h1>{title}</h1>
        <CalculatorForm />
        <Result />

      </div>



    );


  }
}

